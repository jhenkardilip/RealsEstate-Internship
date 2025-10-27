const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/User');

dotenv.config(); // ✅ Load environment variables from .env file

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

// ✅ Access environment variables like JWT_SECRET here if needed
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
