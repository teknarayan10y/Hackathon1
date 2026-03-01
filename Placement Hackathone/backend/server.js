require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/auth-app';
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_123';

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
