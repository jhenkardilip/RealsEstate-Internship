// // const express = require('express');
// // const router = express.Router();
// // const User = require('../models/User');
// // const bcrypt = require('bcryptjs');

// // router.post('/register', async (req, res) => {
// //   const { name, identifier, password, re_password, registration_type, type } = req.body;

// //   console.log('Received registration request:', req.body);

// //   try {
// //      if (!name || !identifier || !password || !re_password || !registration_type) {
// //       return res.status(400).json({ message: 'All fields are required' });
// //     }

// //      if (!['phone', 'email'].includes(registration_type)) {
// //       return res.status(400).json({ message: 'Invalid registration type. Must be "phone" or "email"' });
// //     }
// //     if (password !== re_password) {
// //       return res.status(400).json({ message: 'Passwords do not match' });
// //     }
// //     const existingUser = await User.findOne({ identifier });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

    
// //     const user = new User({
// //       name,
// //       identifier,
// //       password: hashedPassword,
// //       registration_type,
// //       type,
// //     });

// //     console.log('Attempting to save user:', user); 
// //     await user.save();
// //     console.log('User saved successfully:', user); 
// //     res.status(201).json({ message: 'User registered successfully' });
// //   } catch (error) {
// //     console.error('Registration error:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const User = require('../models/User');
// // const bcrypt = require('bcryptjs');

// // router.post('/register', async (req, res) => {
// //   const { name, identifier, password, re_password, registration_type, type } = req.body;

// //   console.log('Received registration request:', req.body);

// //   try {
// //      if (!name || !identifier || !password || !re_password || !registration_type) {
// //       return res.status(400).json({ message: 'All fields are required' });
// //     }

// //      if (!['phone', 'email'].includes(registration_type)) {
// //       return res.status(400).json({ message: 'Invalid registration type. Must be "phone" or "email"' });
// //     }
// //     if (password !== re_password) {
// //       return res.status(400).json({ message: 'Passwords do not match' });
// //     }
// //     const existingUser = await User.findOne({ identifier });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

    
// //     const user = new User({
// //       name,
// //       identifier,
// //       password: hashedPassword,
// //       registration_type,
// //       type,
// //     });

// //     console.log('Attempting to save user:', user); 
// //     await user.save();
// //     console.log('User saved successfully:', user); 
// //     res.status(201).json({ message: 'User registered successfully' });
// //   } catch (error) {
// //     console.error('Registration error:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const jwtSecret = process.env.JWT_SECRET || 'your_fallback_secret';

// // Middleware to verify token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   jwt.verify(token, jwtSecret, (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = decoded;
//     next();
//   });
// }

// // Register Route
// router.post('/register', async (req, res) => {
//   const { name, identifier, password, re_password, registration_type, type } = req.body;

//   console.log('Received registration request:', req.body);

//   try {
//     if (!name || !identifier || !password || !re_password || !registration_type) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (!['phone', 'email'].includes(registration_type)) {
//       return res.status(400).json({ message: 'Invalid registration type. Must be "phone" or "email"' });
//     }

//     if (password !== re_password) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ identifier });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = new User({
//       name,
//       identifier,
//       password: hashedPassword,
//       registration_type,
//       type,
//     });

//     console.log('Attempting to save user:', user);
//     await user.save();
//     console.log('User saved successfully:', user);

//     // Create and send token
//     const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

//     res.status(201).json({
//       message: 'User registered successfully',
//       token,
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // GET /profile - fetch user details
// router.get('/profile', authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json({
//       identifier: user.identifier,
//       type: user.type,
//     });
//   } catch (err) {
//     console.error('Error fetching profile:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PATCH /profile - update user profile
// router.patch('/profile', authenticateToken, async (req, res) => {
//   const { identifier, password, type } = req.body;

//   try {
//     const updates = {};
//     if (identifier) updates.identifier = identifier;
//     if (type !== undefined) updates.type = type;

//     if (password) {
//       const salt = await bcrypt.genSalt(10);
//       updates.password = await bcrypt.hash(password, salt);
//     }

//     const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');

//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json({
//       message: 'Profile updated successfully',
//       user: {
//         identifier: user.identifier,
//         type: user.type,
//       },
//     });
//   } catch (err) {
//     console.error('Error updating profile:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;






//--------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const jwtSecret = process.env.JWT_SECRET || 'your_fallback_secret';

// // Middleware to verify token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   jwt.verify(token, jwtSecret, (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = decoded;
//     next();
//   });
// }

// // Register Route
// router.post('/register', async (req, res) => {
//   const { name, identifier, password, re_password, registration_type, type } = req.body;

//   console.log('Received registration request:', req.body);

//   try {
//     if (!name || !identifier || !password || !re_password || !registration_type) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (!['phone', 'email'].includes(registration_type)) {
//       return res.status(400).json({ message: 'Invalid registration type. Must be "phone" or "email"' });
//     }

//     if (password !== re_password) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ identifier });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = new User({
//       name,
//       identifier,
//       password: hashedPassword,
//       registration_type,
//       type,
//     });

//     console.log('Attempting to save user:', user);
//     await user.save();
//     console.log('User saved successfully:', user);

//     // Create and send token
//     const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

//     res.status(201).json({
//       message: 'User registered successfully',
//       token,
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // GET /profile - fetch user details
// router.get('/profile', authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json({
//       name: user.name,                // ✅ added name here
//       identifier: user.identifier,
//       type: user.type,
//     });
//   } catch (err) {
//     console.error('Error fetching profile:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PATCH /profile - update user profile
// router.patch('/profile', authenticateToken, async (req, res) => {
//   const { name, identifier, password, type } = req.body;

//   try {
//     const updates = {};
//     if (name) updates.name = name;
//     if (identifier) updates.identifier = identifier;
//     if (type !== undefined) updates.type = type;

//     if (password) {
//       const salt = await bcrypt.genSalt(10);
//       updates.password = await bcrypt.hash(password, salt);
//     }

//     const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');

//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json({
//       message: 'Profile updated successfully',
//       user: {
//         name: user.name,
//         identifier: user.identifier,
//         type: user.type,
//       },
//     });
//   } catch (err) {
//     console.error('Error updating profile:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  identifier: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registration_type: { type: String, enum: ["email", "phone"], required: true },
  type: { type: String, enum: ["Broker", "Buyer", ""], default: "" },
  brokerDetails: {
    type: {
      fullName: String,
      age: String,
      address: String,
      city: String,
      locality: String,
      pinCode: String,
      experience: String,
      interestedIn: String,
      operatingArea: String,
      description: String,
      photo: String, // Store file path or URL
    },
    default: {},
  },
});
const User = mongoose.model("User", userSchema);

// OTP Schema
const otpSchema = new mongoose.Schema({
  identifier: String,
  otp: String,
  expiresAt: { type: Date, expires: "10m", default: () => new Date(Date.now() + 10 * 60 * 1000) },
});
const OTP = mongoose.model("OTP", otpSchema);

// Middleware to authenticate token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Register API
router.post("/register/", async (req, res) => {
  const { name, identifier, password, re_password, registration_type, type } = req.body;

  if (!name || !identifier || !password || !re_password || !registration_type) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password !== re_password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ identifier });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (registration_type === "phone") {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      await OTP.create({ identifier, otp });
      // TODO: Send OTP via SMS (e.g., Twilio)
      console.log(`OTP for ${identifier}: ${otp}`);
      return res.json({ message: "OTP sent to phone", identifier });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, identifier, password: hashedPassword, registration_type, type });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Verify OTP API
router.post("/verify-otp/", async (req, res) => {
  const { identifier, otp, name, password, registration_type, type } = req.body;
  try {
    const otpRecord = await OTP.findOne({ identifier, otp });
    if (!otpRecord) return res.status(400).json({ message: "Invalid or expired OTP" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, identifier, password: hashedPassword, registration_type, type });
    await user.save();
    await OTP.deleteOne({ identifier, otp });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login API
router.post("/login/", async (req, res) => {
  const { identifier, password, registration_type } = req.body;
  try {
    const user = await User.findOne({ identifier, registration_type });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get User Data API
router.get("/me/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update User Profile API
router.put("/update/", authMiddleware, upload.single("photo"), async (req, res) => {
  const { name, identifier, type, password, brokerDetails } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.identifier = identifier || user.identifier;
    user.type = type || user.type;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (brokerDetails && user.type === "Broker") {
      const parsedBrokerDetails = typeof brokerDetails === "string" ? JSON.parse(brokerDetails) : brokerDetails;
      user.brokerDetails = { ...user.brokerDetails, ...parsedBrokerDetails };
    }
    if (req.file) {
      user.brokerDetails.photo = `/uploads/${req.file.filename}`;
    }

    await user.save();
    res.json({ message: "Profile updated successfully", ...user._doc, password: undefined });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;