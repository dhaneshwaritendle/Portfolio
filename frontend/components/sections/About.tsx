import SectionLabel from '../ui/SectionLabel';

export default function About() {

  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel text="About Me" />
          <h2 className="text-4xl font-bold text-white">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a passionate full-stack developer with experience building scalable web
              applications using modern frameworks like React, Next.js, Node.js, and Express.
              I love crafting clean, maintainable code and intuitive user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or building games.
            </p>
          </div>

            {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="/profile.webp"   // put image inside /public folder
              alt="Profile Picture"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-white/10 shadow-lg"
            />
          </div>
        </div>

        
        </div>
      </div>
    </section>
  );
}
