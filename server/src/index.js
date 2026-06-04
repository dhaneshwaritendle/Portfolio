// src/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

app.use('/api/projects', require('./routes/projects'));
app.use('/api/skills', require('./routes/skills'));

app.listen(process.env.PORT || 3000, () =>
  console.log('API running')
);