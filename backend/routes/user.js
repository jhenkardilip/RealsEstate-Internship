//--------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET || 'your_fallback_secret';

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

// Register Route
router.post('/register', async (req, res) => {
  const { name, identifier, password, re_password, registration_type, type } = req.body;

  console.log('Received registration request:', req.body);

  try {
    if (!name || !identifier || !password || !re_password || !registration_type) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!['phone', 'email'].includes(registration_type)) {
      return res.status(400).json({ message: 'Invalid registration type. Must be "phone" or "email"' });
    }

    if (password !== re_password) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ identifier });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      identifier,
      password: hashedPassword,
      registration_type,
      type,
    });

    console.log('Attempting to save user:', user);
    await user.save();
    console.log('User saved successfully:', user);

    // Create and send token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /profile - fetch user details
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      name: user.name,                // ✅ added name here
      identifier: user.identifier,
      type: user.type,
    });
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PATCH /profile - update user profile
router.patch('/profile', authenticateToken, async (req, res) => {
  const { name, identifier, password, type } = req.body;

  try {
    const updates = {};
    if (name) updates.name = name;
    if (identifier) updates.identifier = identifier;
    if (type !== undefined) updates.type = type;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(password, salt);
    }

    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      message: 'Profile updated successfully',
      user: {
        name: user.name,
        identifier: user.identifier,
        type: user.type,
      },
    });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


