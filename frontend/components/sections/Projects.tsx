import { useEffect, useState } from 'react'
import { Project } from '../../types'
import api from '../../lib/api'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../ui/ProjectCard'
import useProjects from '../../hooks/useProjects'

const projects = [
  {
    id: 1,
    title: "Web development",
    description: "EXTC website contributor. Worked on migration and CSS styling of the website.",
    techStack: ["JQuery", "HTML", "JS", "CSS"],
    githubUrl: "https://github.com/tayyabsayyad/ExtcDeptWebsite",
    liveUrl: "https://extc.dbit.in/",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Hospital Bed Management system",
    description: "Hospital Bed management system is an organized computerized system designed to deal with day-today operations of hospital beds.",
    techStack: ["Javafx scenebuilder", "mysql "],
    githubUrl: "https://github.com/dhaneshwaritendle/Java-Mini-Project",
    liveUrl: "https://github.com/dhaneshwaritendle/Java-Mini-Project",
    imageUrl: "https://github.com/dhaneshwaritendle/Java-Mini-Project/raw/bc2fb20c76c04e4b276b701cd52a2b9a66639f43/Screenshot_2.png?raw=true",
  },
  {
    id: 3,
    title: "Edulib",
    description: "An OER platform i.e Open Educational Resource. A free online educational platform for I.T students that contains curated content only based on the Mumbai University(MU) syllabus. Includes wide range of materials, contains content Evaluated by Evaluators and evaluate effectiveness of OER by reviews",
    techStack: ["MongoDB", "Express", "ReactJS", "NodeJS", "JWT"],
    githubUrl: "https://github.com/dhaneshwaritendle/Web-Mini-Project",
    liveUrl: "https://github.com/dhaneshwaritendle/Web-Mini-Project",
    imageUrl: "https://github.com/dhaneshwaritendle/Web-Mini-Project/raw/main/snippets/Home.png",
  },
];

export default function Projects() {

  return (
    <section id="projects" className="6xl px-12 md:px-18 py-24  mx-auto bg-gray-950 items-center-safe">

      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <SectionLabel text="What I've built" />
        <h2 className="text-4xl font-bold text-white">Projects.</h2>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 "> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}