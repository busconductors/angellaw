'use client';

import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const credentials = ['State Bar Association', 'ABA Member', 'BBB Accredited', 'Super Lawyers'];

export default function Footer() {
  return (
    <footer className="bg-navy text-white grain-overlay" role="contentinfo">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 pt-16 pb-10 md:pt-20">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white no-underline mb-4 w-fit">
              <div className="w-7 h-7 rounded-sm bg-gold flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a1628" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                </svg>
              </div>
              <span className="font-serif text-xl tracking-tight">BAL</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[220px]">
              Trusted legal guidance focused on civil, business, and commercial litigation.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                { label: 'LinkedIn', initial: 'in' },
                { label: 'Twitter / X', initial: 'X' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded border border-white/15 flex items-center justify-center text-xs text-white/40 hover:border-gold hover:text-gold transition-colors no-underline"
                >
                  {s.initial}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Navigation</h4>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors no-underline py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p className="leading-relaxed">
                505 20th Street North, Suite 800<br />
                Birmingham, AL 35203
              </p>
              <p>Mon–Fri: 9am – 6pm</p>
              <a
                href="tel:6156591898"
                className="block hover:text-gold transition-colors no-underline min-h-[44px] flex items-center"
              >
                615-659-1898
              </a>
              <a
                href="mailto:info@bryceangellaw.com"
                className="block hover:text-gold transition-colors no-underline min-h-[44px] flex items-center"
              >
                info@bryceangellaw.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8">
          {/* Credentials */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {credentials.map((cred) => (
              <span key={cred} className="text-[10px] font-semibold tracking-widest uppercase text-white/25">
                {cred}
              </span>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs">
            &copy; 2025 Bryce Angel Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
