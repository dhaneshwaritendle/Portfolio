import SectionLabel from '../ui/SectionLabel';
import SkillChip from '../ui/SkillChip';
import useSkills from '../../hooks/useSkills';
import type { Skill } from '../../types';

const skills:Skill[] = [
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


export default function Skills() {
 

 const groupedSkills = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {}
  )


  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel text="Skills" />
          <h2 className="text-4xl font-bold text-white">What I Work With</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-950 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillChip
                    key={skill.name}
                    label={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
