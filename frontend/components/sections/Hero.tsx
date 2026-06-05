import Button from '../ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20"
    >
      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm tracking-widest uppercase mb-4 font-medium">
          Hi, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Dhaneshwari{' '}
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Tendle
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Full-Stack Developer passionate about building elegant, performant web
          applications with modern technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </Button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-200 text-base font-medium"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}
