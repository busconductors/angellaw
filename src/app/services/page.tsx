import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const practiceAreas = [
  {
    number: '01',
    title: 'Trade Secrets',
    desc: 'Protecting your confidential business information, proprietary processes, and competitive advantages with comprehensive legal strategy.',
  },
  {
    number: '02',
    title: 'Contract Law',
    desc: 'Clear, precise contracts for lasting trust — drafting, reviewing, and negotiating agreements that hold up under scrutiny.',
  },
  {
    number: '03',
    title: 'Litigation',
    desc: 'Resolving disputes with strategic representation designed to protect your interests and achieve the best possible outcome.',
  },
  {
    number: '04',
    title: 'Business Counsel',
    desc: 'Discreet advice for everyday business matters — from formation and governance to NDAs and ongoing compliance.',
  },
];

const reviews = [
  {
    name: 'J. Martinez',
    location: 'Austin, TX',
    text: 'Bryce handled our business dispute with precision and professionalism. His strategic approach saved our company both time and resources. I would highly recommend his services.',
    initials: 'JM',
  },
  {
    name: 'L. Chen',
    location: 'Dallas, TX',
    text: 'The contract counsel we received was thorough, discreet, and tailored to our exact needs. Bryce truly understands business law and delivers clear, actionable guidance.',
    initials: 'LC',
  },
  {
    name: 'R. Williams',
    location: 'Birmingham, AL',
    text: 'From the first consultation to the resolution of our trade secrets case, Bryce demonstrated exceptional knowledge and unwavering commitment to protecting our interests.',
    initials: 'RW',
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-36 md:py-44 bg-navy grain-overlay">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Focused legal support tailored to your business needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Service Blocks */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white border border-border rounded-lg overflow-hidden card-hover">
                <div className="relative aspect-[16/10] img-overlay">
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&auto=format"
                    alt="Legal litigation documents and courtroom setting"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 border-t-[3px] border-gold">
                  <h2 className="font-serif text-2xl mb-3">Litigation</h2>
                  <p className="text-text-body leading-relaxed mb-6">
                    Resolving disputes in trade secrets, contracts, and partnerships. We provide
                    strategic representation designed to protect your interests and achieve the
                    best possible outcome.
                  </p>
                  <Link href="/contact" className="btn-primary text-sm">
                    Confidential Consultation
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white border border-border rounded-lg overflow-hidden card-hover">
                <div className="relative aspect-[16/10] img-overlay">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format"
                    alt="Business counsel meeting in professional office"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 border-t-[3px] border-gold">
                  <h2 className="font-serif text-2xl mb-3">Counsel</h2>
                  <p className="text-text-body leading-relaxed mb-6">
                    Discreet advice on contracts, NDAs, and personal legal matters. We offer
                    high-level guidance that builds lasting trust and protects your business
                    relationships.
                  </p>
                  <Link href="/contact" className="btn-primary text-sm">
                    Confidential Consultation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Practice Areas — numbered list */}
      <section className="py-20 md:py-28 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-3">
              Areas of Practice
            </p>
            <h2 className="font-serif text-3xl md:text-[40px] leading-tight mb-12">
              Our Work
            </h2>
          </ScrollReveal>

          <div>
            {practiceAreas.map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 80}>
                <div className="flex items-center justify-between py-8 px-0 border-b border-border group hover:bg-cream/60 transition-colors -mx-4 px-4">
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <span className="text-xs font-semibold text-gold tracking-widest shrink-0">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-xl text-navy shrink-0">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-sm hidden md:block max-w-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-text shrink-0 ml-8"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-3">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-[40px] leading-tight mb-3">
              Reviews
            </h2>
            <p className="text-text-body mb-12">
              What clients say about bryceangellaw.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 100}>
                <div
                  className="rounded-lg p-8 card-hover shadow-sm"
                  style={{ backgroundColor: 'var(--surface)' }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#c9a84c" stroke="none" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-body text-sm leading-relaxed mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-text-light text-xs">{review.location}</p>
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
