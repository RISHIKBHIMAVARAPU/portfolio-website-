export default function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Rishik Bhimavarapu</div>
          <p className="text-slate-400 mb-6">Building innovative solutions with modern technologies</p>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-blue-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 Rishik Bhimavarapu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
