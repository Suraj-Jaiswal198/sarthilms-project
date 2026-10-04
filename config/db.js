const mongoose = require('mongoose');
const config = require('config');

// Get URI from your default.json or local.json config
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    // In Mongoose 6+, you can call connect() with just the URI
    await mongoose.connect(db);
    
    console.log("MongoDB Connected....");
  } catch (err) {
    console.error("Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
