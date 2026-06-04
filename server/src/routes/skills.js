// src/routes/skills.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();


// Public — get all skills

const {getSkills} = require('../controllers/skillControllers');
router.get('/', getSkills);


module.exports = router;
