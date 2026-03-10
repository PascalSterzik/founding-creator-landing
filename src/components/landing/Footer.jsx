'use client';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-[var(--cocoa-deep)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
        <p>© 2026 Platri IT GmbH. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a
            href="/impressum"
            className="hover:text-[var(--gold)] transition-colors"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="hover:text-[var(--gold)] transition-colors"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
