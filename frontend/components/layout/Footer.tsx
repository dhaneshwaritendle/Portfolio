export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-8 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Dhaneshwari. Built with{' '}
        <span className="text-violet-400">Next.js</span> &{' '}
        <span className="text-pink-400">Tailwind CSS</span>.
      </p>
    </footer>
  );
}
