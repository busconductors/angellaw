'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    q: 'What cases do you handle?',
    a: 'We focus on civil, business, and commercial litigation, including trade secrets disputes, contract issues, shareholder conflicts, and business fraud matters.',
  },
  {
    q: 'How do I start working with you?',
    a: 'Simply reach out via email or phone to schedule a confidential consultation. We will discuss your situation and determine the best path forward together.',
  },
  {
    q: 'Do you offer contract reviews?',
    a: 'Yes. We provide discreet, high-level counsel on contracts, NDAs, and other personal or business legal matters to protect your interests.',
  },
  {
    q: 'What is your approach to client trust?',
    a: 'We prioritize clarity, protection, and long-term trust in every engagement. Honest communication is the foundation of our practice, and we ensure clients always understand where they stand.',
  },
  {
    q: 'Where are you located?',
    a: 'We are a local practice based in Birmingham, Alabama, with flexible remote consultation options available for clients across the region.',
  },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero / Intro */}
      <section className="relative py-36 md:py-44 bg-navy grain-overlay">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">About</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Meet Bryce Angel
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                  Bryce Angel offers focused legal support in civil and business litigation,
                  with a commitment to clarity, protection, and long-term trust.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get Help
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden img-overlay aspect-[3/4]">
                  <Image
                    src="/images/bryce-angel.png"
                    alt="Bryce Angel, Attorney"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative rounded-lg overflow-hidden img-overlay aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80&auto=format"
                      alt="Reviewing legal contracts at desk"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 25vw, 15vw"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden img-overlay aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format"
                      alt="Professional meeting room"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 25vw, 15vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">How We Work</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Approach</h2>
            <div className="border-l-2 border-gold/30 pl-6">
              <p className="text-text-body text-lg leading-relaxed">
                We focus on clear, protective counsel that builds long-term trust with clients.
                Every case is handled with strategic precision, honest communication, and a
                commitment to achieving the best possible outcome for your business and personal interests.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">Location</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">Our Office</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
              <div>
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-text-light mb-3">Address</h3>
                <address className="not-italic text-navy leading-relaxed">
                  <p className="font-medium">505 20th Street North, Suite 800</p>
                  <p className="text-text-body">Birmingham, AL 35203</p>
                </address>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-text-light mb-3">Hours</h3>
                <p className="text-navy">Mon–Fri: 9am – 6pm</p>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-text-light mb-3">Phone</h3>
                <a href="tel:6156591898" className="text-navy hover:text-gold transition-colors no-underline font-medium min-h-[44px] flex items-center w-fit">615-659-1898</a>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-text-light mb-3">Email</h3>
                <a href="mailto:info@bryceangellaw.com" className="text-navy hover:text-gold transition-colors no-underline font-medium min-h-[44px] flex items-center w-fit">info@bryceangellaw.com</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">Common Questions</h2>
          </ScrollReveal>
          <div className="max-w-2xl space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left min-h-[44px] hover:bg-cream/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="font-medium text-navy text-sm md:text-base pr-4">{faq.q}</span>
                    <svg
                      className={`faq-chevron shrink-0 text-gold ${openFaq === i ? 'open' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    id={`faq-${i}`}
                    className={`faq-content ${openFaq === i ? 'open' : ''}`}
                    role="region"
                  >
                    <div className="px-6 pb-6 text-text-body text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
