// controllers/skillController.js
const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getSkills = async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        category: 'asc'
      }
    });

    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch skills' });
  }
};
module.exports = { getSkills };