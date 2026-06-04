// src/routes/projects.js
// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Public — get all projects

const {getprojects} = require('../controllers/projectControllers');
router.get('/', getprojects);




module.exports = router;