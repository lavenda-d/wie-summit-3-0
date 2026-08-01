'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activePin, setActivePin] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time simple validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setFormErrors({ email: 'Please enter a valid email format.' });
      } else {
        setFormErrors({ email: '' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formErrors.email || !formData.name || !formData.email || !formData.subject || !formData.message) return;

    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/esakenyattawie@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          type: "WIE Summit Contact Form Inquiry",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch (err) {
      console.error("Failed to submit contact form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Coordinates data for the interactive vector map
  const mapPins = [
    { id: 'auditorium', label: 'Main Auditorium', x: '45%', y: '40%', desc: 'Venue for keynote addresses and panel sessions.' },
    { id: 'labs', label: 'Engineering Labs', x: '68%', y: '55%', desc: 'Hackathon coding center and workshop benches.' },
    { id: 'desk', label: 'WIE Help Desk', x: '35%', y: '65%', desc: 'Pre-registration badging pick-up and merchandise.' },
    { id: 'gate', label: 'Main Entrance', x: '15%', y: '80%', desc: 'Kenyatta University main gate arrival check-point.' },
  ];

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or want to partner for our 2-day summit? Get in touch with our coordinator committee."
      />

      <section className="section-spacing bg-white">
        <div className="container-custom">
          
          {/* Top Quick Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal direction="up" delay={0}>
              <div className="bg-secondary rounded-2xl border border-border p-6 flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#070a13] rounded-xl text-accent border border-border flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">Email</h3>
                  <a href="mailto:esakenyattawie@gmail.com" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors block">
                    esakenyattawie@gmail.com
                  </a>
                  <a href="mailto:esawiekenyatta2@gmail.com" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors block mt-0.5">
                    esawiekenyatta2@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="bg-secondary rounded-2xl border border-border p-6 flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#070a13] rounded-xl text-accent border border-border flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">Phone</h3>
                  <a href="tel:+254717052939" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors block">
                    +254 717 052 939
                  </a>
                  <p className="text-xs text-foreground/50 mt-0.5 font-bold uppercase">Mon-Fri 9AM - 5PM EAT</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-secondary rounded-2xl border border-border p-6 flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#070a13] rounded-xl text-accent border border-border flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">Location</h3>
                  <p className="text-sm font-semibold text-foreground/80">
                    Kenyatta University Campus,<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form & Map Grid */}
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form Card */}
            <div className="md:col-span-6 bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-foreground mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                /* Successful Submission Message Banner */
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl p-6 text-center animate-scale-in">
                  <CheckCircle className="text-emerald-500 mx-auto mb-3" size={44} />
                  <h3 className="text-lg font-bold text-foreground mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-foreground/80 dark:text-gray-300 leading-relaxed font-semibold">
                    Thank you for reaching out. A copy of your query has been logged and forwarded to the WIE coordinator. We aim to respond within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold placeholder-foreground/35"
                      placeholder="Jane Mwangi"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-2.5 text-sm border bg-secondary rounded-lg focus:outline-none focus:ring-2 text-foreground font-semibold placeholder-foreground/35",
                        formErrors.email 
                          ? "border-red-500 focus:ring-red-500/25" 
                          : "border-border focus:ring-accent"
                      )}
                      placeholder="jane.mwangi@example.com"
                    />
                    {formErrors.email && (
                      <span className="text-[11px] font-bold text-red-500 mt-1 block flex items-center gap-1">
                        <ShieldAlert size={12} /> {formErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-1.5">
                      Query Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold"
                    >
                      <option value="">Select category...</option>
                      <option value="registration">Registration Help</option>
                      <option value="sponsorship">Sponsorship Inquiry</option>
                      <option value="speaker">Speaker & Panelist</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-1.5">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold placeholder-foreground/35 resize-none"
                      placeholder="Detail your question or partnership proposal..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!!formErrors.email || isSubmitting}
                    className="cta-button w-full py-3 text-center text-sm font-bold inline-flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={14} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map centered on Kenyatta University */}
            <div className="md:col-span-6 space-y-6">
              <h2 className="text-2xl font-extrabold text-foreground">Kenyatta University Campus Map</h2>
              
              <div className="relative w-full aspect-[4/3] bg-secondary rounded-2xl border border-border overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.016593457193!2d36.9248443743513!3d-1.1838925988049615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc965e64883%3A0x6b4afc3f91572c6!2sKenyatta%20University!5e0!3m2!1sen!2ske!4v1722513900000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full rounded-2xl"
                ></iframe>
              </div>

              {/* Response SLA reminder */}
              <div className="bg-secondary border border-border/80 rounded-2xl p-6 flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#070a13] rounded-xl text-accent border border-border flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Expected Response SLA</h3>
                  <p className="text-sm text-foreground/75 dark:text-gray-400 leading-relaxed font-semibold">
                    We review submissions daily. General inquiries are processed within 24 hours. Academic and sponsorship proposals receive feedback within 48 business hours.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Welcome Committee & Banners Section */}
      <section className="section-spacing bg-white border-t border-border/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Arriving on Campus
              </span>
              <h2 className="section-title">Venue & Welcome Committee</h2>
              <p className="section-subtitle">Look out for our banners and welcome coordinators when you arrive at Kenyatta University.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="right">
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-border/80 shadow-md">
                <Image
                  src="/images/uploaded_summit2_2.jpg"
                  alt="Official WIE Summit roll-up banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 z-20 text-white bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  Main Entrance Hallway Roll-up
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={150}>
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-border/80 shadow-md">
                <Image
                  src="/images/uploaded_summit2_9.jpg"
                  alt="Student delegates welcoming committee"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 z-20 text-white bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  Welcome Desk Committee
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Dropdowns */}
      <section className="section-spacing bg-secondary border-t border-border/50">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                FAQ
              </span>
              <h2 className="section-title">Common Questions</h2>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            
            <details className="bg-card border border-border/80 rounded-xl p-5 group cursor-pointer">
              <summary className="font-bold text-foreground flex justify-between items-center select-none">
                <span>What is the best way to contact the organizers?</span>
                <span className="text-foreground/50 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="text-sm text-foreground/75 dark:text-gray-400 mt-3 leading-relaxed font-semibold">
                For urgent enquiries, you can dial our phone coordinates directly. For formal proposals (sponsorship, keynotes, university delegations), email us at esakenyattawie@gmail.com.
              </p>
            </details>

            <details className="bg-card border border-border/80 rounded-xl p-5 group cursor-pointer">
              <summary className="font-bold text-foreground flex justify-between items-center select-none">
                <span>Can I request a meeting on campus?</span>
                <span className="text-foreground/50 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="text-sm text-foreground/75 dark:text-gray-400 mt-3 leading-relaxed font-semibold">
                Yes! Our organizing committee maintains office hours on campus. Fill the contact form requesting an appointment, and our coordinator will lock in a time.
              </p>
            </details>

            <details className="bg-card border border-border/80 rounded-xl p-5 group cursor-pointer">
              <summary className="font-bold text-foreground flex justify-between items-center select-none">
                <span>How can my university send a delegation?</span>
                <span className="text-foreground/50 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="text-sm text-foreground/75 dark:text-gray-400 mt-3 leading-relaxed font-semibold">
                We accommodate student delegations! Select the "General Question" subject and detail your student size. We provide custom delegation registers and support group badging.
              </p>
            </details>

          </div>
        </div>
      </section>
    </>
  );
}
