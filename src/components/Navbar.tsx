'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Pages where the hero is dark — navbar starts transparent
const darkHeroPages = ['/', '/contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = darkHeroPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    // Set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Determine navbar style
  const navClass = hasDarkHero
    ? scrolled ? 'navbar-scrolled' : 'navbar-transparent'
    : 'navbar-white';

  // Link color depends on bg
  const linkColor = (hasDarkHero && !scrolled)
    ? 'text-white/80 hover:text-white'
    : 'text-navy/70 hover:text-navy';

  const activeColor = (hasDarkHero && !scrolled) ? 'text-gold' : 'text-gold';

  const logoColor = (hasDarkHero && !scrolled) ? 'text-white' : 'text-navy';

  const hamburgerColor = (hasDarkHero && !scrolled) ? 'bg-white' : 'bg-navy';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${navClass}`}
        style={{ paddingTop: '3px' }} /* offset the gold accent bar */
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2.5 no-underline ${logoColor}`}>
            <div className="w-7 h-7 rounded-sm bg-gold flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a1628" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
              </svg>
            </div>
            <span className="font-serif text-xl tracking-tight">BAL</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-[13px] font-medium tracking-wide no-underline transition-colors duration-200 ${
                  pathname === link.href ? activeColor : linkColor
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-[13px] !px-5 !py-2.5 ml-2">
              Get Help
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[1.5px] ${hamburgerColor} transition-all duration-250 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] ${hamburgerColor} transition-all duration-250 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] ${hamburgerColor} transition-all duration-250 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer — white bg, dark text */}
      <div
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium no-underline py-3 border-b border-border transition-colors ${
                pathname === link.href ? 'text-gold' : 'text-navy/80 hover:text-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-6 text-center text-sm">
            Get Help
          </Link>
        </nav>
      </div>
    </>
  );
}
