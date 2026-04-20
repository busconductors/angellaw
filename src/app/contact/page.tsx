'use client';

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    legalMatter: '',
    contactMethod: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value;
    setForm({ ...form, [target.name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-36 md:py-44 grain-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90 z-0" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1] tracking-[-0.02em]">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Reach out for clear, trusted legal guidance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Split Contact Form */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 shadow-lg overflow-hidden rounded-lg">

              {/* Left Panel — Navy with gold accents */}
              <div className="bg-navy text-white p-8 lg:p-12 flex flex-col justify-between grain-overlay relative">
                <div className="relative z-10">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-gold/70 mb-4">
                    Schedule a Consultation
                  </p>
                  <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-tight">
                    Bryce Angel Law
                  </h2>
                  <p className="text-white/60 mb-10 text-sm leading-relaxed max-w-xs">
                    Confidential consultations available. All inquiries are handled with complete discretion.
                  </p>

                  <div className="space-y-7">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Address</p>
                        <address className="not-italic text-white/80 text-sm leading-relaxed">
                          505 20th Street North, Suite 800<br />
                          Birmingham, AL 35203
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Phone</p>
                        <a href="tel:6156591898" className="text-white/80 hover:text-gold transition-colors text-sm">
                          615-659-1898
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                        <a href="mailto:info@bryceangellaw.com" className="text-white/80 hover:text-gold transition-colors text-sm">
                          info@bryceangellaw.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Hours</p>
                        <p className="text-white/80 text-sm">Mon–Fri: 9am – 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                  <a
                    href="https://maps.google.com/?q=505+20th+Street+North+Suite+800+Birmingham+AL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-text text-gold/70 hover:text-gold"
                  >
                    Get Directions
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Panel — White form */}
              <div className="bg-white p-8 lg:p-12">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-14 h-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mx-auto mb-6">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl mb-3">Request Submitted</h2>
                    <p className="text-text-body text-sm max-w-xs">
                      Thank you for reaching out. We will review your inquiry and respond within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">
                      Intake Form
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-navy mb-2">Request a Consultation</h2>
                    <p className="text-text-body text-sm mb-8">
                      All consultations are confidential. Fields marked <span className="text-gold">*</span> are required.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="fullName" className="block text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            id="fullName" name="fullName" type="text" required
                            value={form.fullName} onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all min-h-[44px]"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                            Email <span className="text-gold">*</span>
                          </label>
                          <input
                            id="email" name="email" type="email" required
                            value={form.email} onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all min-h-[44px]"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                            Phone
                          </label>
                          <input
                            id="phone" name="phone" type="tel"
                            value={form.phone} onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all min-h-[44px]"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                            Company
                          </label>
                          <input
                            id="company" name="company" type="text"
                            value={form.company} onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all min-h-[44px]"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="legalMatter" className="block text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                          Brief Description of Legal Matter <span className="text-gold">*</span>
                        </label>
                        <textarea
                          id="legalMatter" name="legalMatter" required
                          value={form.legalMatter} onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all resize-none"
                          placeholder="Please describe your legal matter briefly..."
                        />
                      </div>

                      <div>
                        <label htmlFor="contactMethod" className="block text-xs font-semibold tracking-wide uppercase text-navy/60 mb-2">
                          Preferred Contact Method <span className="text-gold">*</span>
                        </label>
                        <select
                          id="contactMethod" name="contactMethod" required
                          value={form.contactMethod} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-white min-h-[44px]"
                        >
                          <option value="">Select a method</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="either">Either</option>
                        </select>
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          id="consent" name="consent" type="checkbox" required
                          checked={form.consent} onChange={handleChange}
                          className="mt-1 w-4 h-4 accent-gold min-w-[16px]"
                        />
                        <span className="text-xs text-text-body leading-relaxed">
                          I consent to having this firm collect my information to respond to my inquiry.{' '}
                          <span className="text-gold">*</span>
                        </span>
                      </label>

                      <button type="submit" className="btn-primary w-full text-sm py-4">
                        Submit Request
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
