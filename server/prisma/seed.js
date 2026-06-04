const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const skills = [
  { name: "Node.js", category: "Backend", level: 4 },
  { name: "Express", category: "Backend", level: 4 },
  { name: "Spring Boot", category: "Backend", level: 3 },
  { name: "JavaScript", category: "Backend", level: 4 },
  { name: "React", category: "Frontend", level: 4 },
  { name: "Next.js", category: "Frontend", level: 3 },
  { name: "Tailwind CSS", category: "Frontend", level: 4 },
  { name: "TypeScript", category: "Frontend", level: 3 },
  { name: "PostgreSQL", category: "Database", level: 4 },
  { name: "Redis", category: "Database", level: 3 },
  { name: "Prisma", category: "Database", level: 3 },
  { name: "Kafka", category: "DevOps", level: 2 },
  { name: "Docker", category: "DevOps", level: 3 },
  { name: "Git", category: "DevOps", level: 4 },
];

const projects = [
   {
    title: "Web development",
    description: "EXTC website contributor. Worked on migration and CSS styling of the website.",
    longDesc:"",
    techStack: ["JQuery", "HTML", "JS", "CSS"],
    githubUrl: "https://github.com/tayyabsayyad/ExtcDeptWebsite",
    liveUrl: "https://extc.dbit.in/",
    imageUrl: "",
  },
  {
    title: "Hospital Bed Management system",
    description: "Hospital Bed management system is an organized computerized system designed to deal with day-today operations of hospital beds.",
    longDesc:
      "The hospital bed management is designed for hospital to replace their existing manual system.The new system is to control the following information: patient information, room availability, bed visibility.These services are provided in graphic user interface in an efficient manner to reduce the time and resources currently required for such tasks.",
    techStack: ["Javafx scenebuilder", "mysql "],
    githubUrl: "https://github.com/dhaneshwaritendle/Java-Mini-Project",
    liveUrl: "https://github.com/dhaneshwaritendle/Java-Mini-Project",
    imageUrl: "https://github.com/dhaneshwaritendle/Java-Mini-Project/raw/bc2fb20c76c04e4b276b701cd52a2b9a66639f43/Screenshot_2.png?raw=true",
  },
    {
    title: "Edulib",
    description: "An OER platform i.e Open Educational Resource. A free online educational platform for I.T students that contains curated content only based on the Mumbai University(MU) syllabus. Includes wide range of materials, contains content Evaluated by Evaluators and evaluate effectiveness of OER by reviews",
    longDesc:"",
    techStack: ["MongoDB", "Express","ReactJS","NodeJS","JWT"],
    githubUrl: "https://github.com/dhaneshwaritendle/Web-Mini-Project",
    liveUrl: "https://github.com/dhaneshwaritendle/Web-Mini-Project",
    imageUrl: "https://github.com/dhaneshwaritendle/Web-Mini-Project/raw/main/snippets/Home.png",
  },
];

async function main() {
  console.log("Seeding skills...");

  // for (const skill of skills) {
  //   await prisma.skill.upsert({
  //     where: { id: -1 }, // always insert
  //     update: {},
  //     create: skill,
  //   });
  // }
  const project_add = await prisma.project.createMany({
    data: projects,
    skipDuplicates:true,
  })

  console.log(`Done: ${project_add.length} data inserted`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
