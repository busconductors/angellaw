'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Shield, Users } from 'lucide-react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: 'easeOut' as const },
});

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navy gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.80) 50%, rgba(10,22,40,0.92) 100%)',
        }}
      />

      {/* Main content — centered, full-height */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center">
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-10 lg:px-20 py-40">

          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-[11px] font-semibold tracking-widest uppercase text-gold mb-8 inline-block"
          >
            Civil · Business · Commercial Litigation
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Trusted Legal{' '}
            <span style={{ color: '#c9a84c' }}>Guidance</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Focused on civil, business, and commercial litigation — with
            clarity, discretion, and long-term trust at every step.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary text-sm">
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="btn-ghost !text-white !border-white/30 hover:!bg-white/10 hover:!text-white text-sm"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            {...fadeUp(0.7)}
            className="flex flex-wrap justify-center gap-8 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { icon: Shield, label: '15+ Years Experience' },
              { icon: Users, label: '150+ Clients Served' },
              { icon: Scale, label: 'Licensed in Alabama' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/60">
                <Icon size={16} className="text-gold shrink-0" />
                <span className="text-xs tracking-wide uppercase font-medium">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gold accent bottom line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1.0, ease: 'easeOut' }}
        className="relative z-10 w-full h-px origin-center"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #c9a84c 30%, #c9a84c 70%, transparent 100%)',
        }}
      />
    </section>
  );
}
