// controllers/projectController.js
const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getprojects = async (req, res) => {
  try {
    const project = await prisma.project.findMany({ });

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch project' });
  }
};
module.exports = { getprojects };