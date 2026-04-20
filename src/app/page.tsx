import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Stat Bar */}
      <section className="bg-navy py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: '150+', label: 'Clients Served' },
              { value: '15+',  label: 'Years Experience' },
              { value: '100%', label: 'Confidential' },
              { value: '24hr', label: 'Response Time' },
            ].map((stat, i, arr) => (
              <div
                key={stat.label}
                className={`text-center py-8${i < arr.length - 1 ? ' border-r border-white/10' : ''}`}
              >
                <span className="block text-4xl font-serif text-gold leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Bryce Angel */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">
                  About the Attorney
                </p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                  Meet Bryce Angel
                </h2>
                <p className="text-text-body leading-relaxed text-base mb-8">
                  With years of focused experience in civil and business litigation, Bryce Angel
                  provides clear, protective counsel designed to build long-term trust with every client.
                  From trade secrets disputes to complex commercial matters, our approach prioritizes
                  honest communication and strategic resolution.
                </p>
                <Link href="/about" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <div className="relative rounded-lg overflow-hidden img-overlay aspect-[4/3]">
                  <Image
                    src="/images/bryce-angel.png"
                    alt="Bryce Angel, attorney"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex gap-8 mt-6">
                  <div>
                    <span className="font-serif text-3xl text-gold">150+</span>
                    <span className="block text-xs text-text-light mt-1 uppercase tracking-wide">
                      Clients Served
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-3xl text-gold">15+</span>
                    <span className="block text-xs text-text-light mt-1 uppercase tracking-wide">
                      Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">
                What We Do
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Services</h2>
              <p className="text-text-body max-w-lg">
                Focused legal support tailored to your business needs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Litigation',
                desc: 'Resolving disputes in trade secrets, contracts, and partnerships.',
                img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format',
              },
              {
                title: 'Trade Secrets',
                desc: 'Protecting your confidential business information from exposure.',
                img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format',
              },
              {
                title: 'Business Counsel',
                desc: 'Discreet advice on contracts, NDAs, and personal legal matters.',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format',
              },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <Link
                  href="/services"
                  className="block bg-white rounded-lg overflow-hidden shadow-sm card-hover no-underline group"
                >
                  <div className="relative aspect-[16/10] img-overlay">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 border-t-[3px] border-gold">
                    <h3 className="font-serif text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 md:py-28 bg-navy grain-overlay relative">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
              Ready to protect your business?
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">
              Confidential consultations available. Reach out today.
            </p>
            <Link href="/contact" className="btn-primary text-sm">
              Schedule a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
