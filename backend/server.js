const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // 👈 ye .env file se values uthayega

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB se connect yahi hota hai
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// 👇 Yahan routes lagao
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
