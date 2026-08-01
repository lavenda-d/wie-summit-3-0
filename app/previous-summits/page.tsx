'use client';

import React, { useState, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X, Maximize2, Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PreviousSummits() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const stats = [
    { target: '150', label: 'Summit 1.0', desc: 'Participants' },
    { target: '33%', label: 'Growth', desc: 'Year on Year' },
    { target: '200', label: 'Summit 2.0', desc: 'Participants' },
    { target: '350+', label: 'Summit 3.0', desc: 'Expected' },
  ];

  const testimonials = [
    {
      quote: "WIE Summit was transformative. I gained technical skills, mentorship, and lifelong connections with amazing women in engineering.",
      author: "Sarah M.",
      affiliation: "University of Nairobi Student",
      stars: 5,
    },
    {
      quote: "The hackathon was intense but inspiring. I proved to myself what I'm capable of and got recruited by one of the corporate sponsors!",
      author: "Jane K.",
      affiliation: "Kenyatta University Graduate",
      stars: 5,
    },
    {
      quote: "As a keynote speaker, I was impressed by the caliber of participants and the passion for creating green tech change in our industry.",
      author: "Dr. Grace O.",
      affiliation: "Tech Industry Director & Advisor",
      stars: 5,
    },
  ];

  const galleryImages = [
    { src: '/images/group-photo.jpg', alt: 'Kenyatta University ESA-WIE Group photo', category: 'Success Stories' },
    { src: '/images/uploaded_summit2_1.jpg', alt: 'WIE Summit student coordinators with blue banner', category: 'Success Stories' },
    { src: '/images/uploaded_summit2_2.jpg', alt: 'WIE Summit roll-up banner at entrance hallway', category: 'Networking' },
    { src: '/images/uploaded_summit2_3.jpg', alt: 'Student delegates standing in front of ACEK banner', category: 'Hackathon' },
    { src: '/images/uploaded_summit2_4.jpg', alt: 'Sponsor panel table during keynote address', category: 'Speaking' },
    { src: '/images/uploaded_summit2_5.jpg', alt: 'Organizers and partners shaking hands', category: 'Success Stories' },
    { src: '/images/uploaded_summit2_6.jpg', alt: 'Auditorium session showing crowd scale', category: 'Speaking' },
    { src: '/images/uploaded_summit2_7.jpg', alt: 'Delegates posing in front of Davis & Shirtliff banner', category: 'Networking' },
    { src: '/images/uploaded_summit2_8.jpg', alt: 'Student delegate asking a question on microphone', category: 'Speaking' },
    { src: '/images/uploaded_summit2_9.jpg', alt: 'Two coordinators standing by the welcome banner', category: 'Success Stories' },
    { src: '/images/uploaded_summit2_10.jpg', alt: 'Sponsor panel speakers listing presentation Q&A', category: 'Speaking' },
    { src: '/images/uploaded_summit2_11.jpg', alt: 'Two delegates smiling at the sound/audio console', category: 'Workshops' },
    { src: '/images/uploaded_summit2_12.jpg', alt: 'Recruiting speaker presenting from podium', category: 'Speaking' },
    { src: '/images/uploaded_summit2_13.jpg', alt: 'WIE keynotes and academic presenters', category: 'Speaking' },
    { src: '/images/uploaded_summit2_14.jpg', alt: 'Organizers presenting Certificate of Excellence', category: 'Success Stories' },
    { src: '/images/uploaded_summit2_15.jpg', alt: 'Classroom setup showing roundtable technical lessons', category: 'Workshops' },
    { src: '/images/uploaded_summit2_16.jpg', alt: 'WIE Summit committee group photo in front of banners', category: 'Success Stories' },
    { src: '/images/uploaded_summit2_17.jpg', alt: 'Full auditorium crowd list listening to keynotes', category: 'Networking' },
    { src: '/images/activity_keynote.jpg', alt: 'WIE Summit 2.0 Keynote Address Lady Speaker at Podium', category: 'Speaking' },
    { src: '/images/activity_panel.jpg', alt: 'WIE Summit 2.0 Panel of Women Leaders on Stage', category: 'Speaking' },
    { src: '/images/activity_workshop.jpg', alt: 'WIE Summit 2.0 Two Student Delegates Coding in Workshop', category: 'Workshops' },
    { src: '/images/activity_hackathon.jpg', alt: 'WIE Summit 2.0 Students Coding on Project Desk', category: 'Hackathon' },
    { src: '/images/atc_industrial_visit.jpg', alt: 'WIE Summit 2.0 Committee Members at American Tower Office', category: 'Success Stories' },
    { src: '/images/summit1_1.jpg', alt: 'WIE Summit 1.0 Keynote Address', category: 'Speaking' },
    { src: '/images/summit1_3.jpg', alt: 'WIE Summit 1.0 Hackathon Lab', category: 'Hackathon' },
    { src: '/images/summit1_5.jpg', alt: 'WIE Summit 1.0 Hardware Session', category: 'Workshops' },
    { src: '/images/summit1_9.jpg', alt: 'WIE Summit 1.0 Group Photo', category: 'Success Stories' },
    { src: '/images/summit1_10.jpg', alt: 'WIE Summit 1.0 delegates closing ceremony', category: 'Networking' },
  ];

  const categories = ['All', 'Hackathon', 'Workshops', 'Speaking', 'Networking', 'Success Stories'];

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  const openLightbox = (src: string) => {
    const idx = galleryImages.findIndex((img) => img.src === src);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col justify-between p-6 animate-fade-in">
          {/* Header */}
          <div className="flex justify-between items-center text-white">
            <span className="text-xs font-bold bg-accent py-1 px-3 rounded uppercase tracking-wider">
              {galleryImages[lightboxIndex].category}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body / Main Image */}
          <div className="relative flex-grow flex items-center justify-center max-h-[75vh]">
            <button 
              onClick={prevImage}
              className="absolute left-2 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-10 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </div>

            <button 
              onClick={nextImage}
              className="absolute right-2 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-10 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Footer description */}
          <div className="text-center text-white/80 max-w-2xl mx-auto pb-4">
            <p className="text-sm font-semibold">{galleryImages[lightboxIndex].alt}</p>
            <p className="text-[10px] text-gray-500 mt-1 font-mono">
              Image {lightboxIndex + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}

      <HeroSection
        title="Previous Summits"
        subtitle="Celebrating our historic growth and impact. Reflecting on WIE Summits 1.0 and 2.0 as we scale to our 2-day format."
      />

      {/* Summit 2.0 Segment */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Visual Panel */}
            <div className="md:col-span-5 relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-border order-2 md:order-1">
              <ScrollReveal direction="right" className="relative w-full h-full">
                <Image src="/images/uploaded_summit2_4.jpg" alt="WIE Summit 2.0 Keynotes" fill className="object-cover" />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="text-xs uppercase bg-accent font-extrabold py-1 px-2.5 rounded-full mb-1 inline-block">
                    Summit 2.0
                  </span>
                  <p className="font-bold text-lg text-white">Auditorium Main Stage</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Context Content */}
            <div className="md:col-span-7 order-1 md:order-2">
              <ScrollReveal direction="left">
                <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                  Edition 2.0
                </span>
                <h2 className="section-title">WIE Summit 2.0</h2>
                <p className="text-lg text-foreground/80 font-medium mb-6 leading-relaxed">
                  Building on our inaugural platform, Summit 2.0 established structured mentorship networks and expanded recruiter partnership tables, driving real student career entries.
                </p>

                <div className="bg-secondary rounded-xl border border-border p-6 space-y-3">
                  <h3 className="font-extrabold text-foreground text-sm uppercase tracking-wider mb-2">Key Achievements:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/80 font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>200+ female engineers attended</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>30+ expert recruiters & mentors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>15+ active sponsor partners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>Launch of year-round mentors portal</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 flex justify-start">
                  <a
                    href="https://www.playbook.com/s/pichaperfect/LVXyHLJJK9SwrqhVHnhM3LWc"
                    target="_blank"
                    rel="noreferrer"
                    className="cta-button inline-flex items-center gap-2 text-xs md:text-sm font-extrabold px-5 py-3 cursor-pointer shadow-md hover:shadow-lg transition-all"
                  >
                    View WIE Summit 2.0 Full Album ↗
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Summit 1.0 Segment */}
      <section className="section-spacing bg-secondary border-y border-border/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Context Content */}
            <div className="md:col-span-7">
              <ScrollReveal direction="right">
                <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                  Inaugural V1.0
                </span>
                <h2 className="section-title">WIE Summit 1.0</h2>
                <p className="text-lg text-foreground/80 font-medium mb-6 leading-relaxed">
                  The inaugural Women in Engineering Summit launched in 2023 at Kenyatta University, creating an essential bridge between ambitious students and established engineering models.
                </p>
                
                <div className="bg-card rounded-xl border border-border p-6 space-y-3">
                  <h3 className="font-extrabold text-foreground text-sm uppercase tracking-wider mb-2">Key Highlights:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/80 font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>150+ student participants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>15+ keynotes from local industries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>Introduction to hardware masterclass</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>Core community charter signing</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 flex justify-start">
                  <a
                    href="https://photos.app.goo.gl/nG5gdbWrHtVGWMeG8"
                    target="_blank"
                    rel="noreferrer"
                    className="cta-button-secondary inline-flex items-center gap-2 text-xs md:text-sm font-extrabold px-5 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    View WIE Summit 1.0 Full Album ↗
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Panel */}
            <div className="md:col-span-5 relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-border">
              <ScrollReveal direction="left" className="relative w-full h-full">
                <Image src="/images/summit1_3.jpg" alt="WIE Summit 1.0 Coding" fill className="object-cover" />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="text-xs uppercase bg-accent font-extrabold py-1 px-2.5 rounded-full mb-1 inline-block">
                    Summit 1.0
                  </span>
                  <p className="font-bold text-lg text-white">Kenyatta University Launch</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Growth Statistics */}
      <section className="section-spacing bg-white border-b border-border/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Growth
              </span>
              <h2 className="section-title">Our Growth Journey</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggerReveal staggerInterval={100} direction="up">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-6xl font-extrabold text-accent mb-2 select-none">
                    <AnimatedCounter value={stat.target} />
                  </div>
                  <p className="text-lg font-bold text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-foreground/50 font-bold uppercase">{stat.desc}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="section-spacing bg-secondary relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Endorsements
              </span>
              <h2 className="section-title">Participant Feedback</h2>
            </ScrollReveal>
          </div>

          {/* Testimonial Box */}
          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg relative min-h-[250px] flex flex-col justify-between">
                
                {/* Quote details */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-accent">
                    <Quote size={40} className="opacity-30" />
                    <div className="flex gap-0.5">
                      {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed italic text-balance animate-fade-in">
                    &quot;{testimonials[activeTestimonial].quote}&quot;
                  </p>
                </div>

                {/* Author Info & Nav buttons */}
                <div className="flex justify-between items-end border-t border-border/80 pt-6 mt-8">
                  <div>
                    <h4 className="font-extrabold text-foreground text-base">
                      {testimonials[activeTestimonial].author}
                    </h4>
                    <p className="text-xs text-foreground/55 font-bold uppercase mt-0.5">
                      {testimonials[activeTestimonial].affiliation}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                      className="p-2.5 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                      className="p-2.5 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing bg-white border-t border-border/50">
        <div className="container-custom">
          
          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Vault
              </span>
              <h2 className="section-title">Summit Gallery</h2>
              <p className="section-subtitle">Select filters to view snapshots from hackathons, workshops, and speaking sessions.</p>
            </ScrollReveal>
          </div>

          {/* Tags filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            <ScrollReveal direction="up" className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer",
                    activeCategory === cat
                      ? "bg-accent border-accent text-white shadow-md shadow-accent/15"
                      : "bg-secondary border-border hover:bg-muted text-foreground/80"
                  )}
                >
                  {cat === 'All' ? 'All Images' : cat}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {filteredImages.map((image, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 50}
                className="relative h-48 md:h-60 rounded-xl overflow-hidden group cursor-pointer border border-border shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover glass action info overlay */}
                <div 
                  onClick={() => openLightbox(image.src)}
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4"
                >
                  <div className="flex justify-end">
                    <span className="p-1.5 bg-white/10 rounded-lg text-white border border-white/10">
                      <Maximize2 size={14} />
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase bg-accent text-white px-2 py-0.5 rounded inline-block mb-1.5">
                      {image.category}
                    </span>
                    <p className="text-white font-bold text-xs leading-normal line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Description container */}
          <div className="max-w-3xl mx-auto text-center bg-secondary rounded-2xl p-8 border border-border">
            <ScrollReveal direction="up">
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Capturing Our Impact</h3>
              <p className="text-base text-foreground/80 dark:text-gray-300 leading-relaxed font-semibold">
                Every captured moment is a validation of peer collaboration and tech capability building. From hardware soldering to full stacks pitching, these records tell the history of Kenyan student engineering potential in actions. See you at WIE Summit 3.0!
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Next Summit CTA */}
      <section className="section-spacing bg-gradient-to-br from-primary to-[#0a1128] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">What&apos;s Next: WIE Summit 3.0</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We leverage our growth history to make V3.0 our most comprehensive layout, increasing participants, corporate booths, and prizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link href="/registration" className="cta-button w-full sm:w-auto text-center px-8 py-3.5">
                Register Pass
              </Link>
              <Link href="/sponsorship" className="cta-button-secondary w-full sm:w-auto text-center px-8 py-3.5 border-white text-white hover:bg-white hover:text-black">
                Become a Sponsor
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
