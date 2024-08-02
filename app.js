const express = require('express');
const app = express();
const cors = require('cors');  // Import the cors package
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

module.exports = app;
