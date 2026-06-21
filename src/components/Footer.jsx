const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4 mt-16">
      <span className="text-indigo-600 font-bold text-lg">Go Business</span>

      <nav aria-label="Footer" className="flex items-center gap-8 text-sm font-medium text-slate-500">
        <a href="#about" className="hover:text-indigo-600 transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-indigo-600 transition-colors">
          Contact
        </a>
        <a href="#privacy" className="hover:text-indigo-600 transition-colors">
          Privacy
        </a>
        <a href="#terms" className="hover:text-indigo-600 transition-colors">
          Terms
        </a>
      </nav>

      <div className="text-sm font-medium text-slate-400">
        © 2024 Go Business
      </div>
    </footer>
  );
};

export default Footer;
