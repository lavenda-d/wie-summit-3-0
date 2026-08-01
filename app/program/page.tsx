import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Schedule | WIE Summit 3.0 | ESA WIE Kenyatta University',
  description: 'Explore the WIE Summit 3.0 schedule, keynote tracks, and workshops. Join us at Kenyatta University as we host hands-on tech sessions and leadership masterclasses.',
};
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Program() {
  return (
    <>
      {/* Hero - plain background, no grid boxes */}
      <HeroSection
        title="Summit Program"
        subtitle="Explore the schedule and masterclasses for the 2-day WIE Summit 3.0"
      />

      {/* Program Coming Soon Panel */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="relative bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl overflow-hidden grid md:grid-cols-12 gap-8 items-center">
                
                {/* Visual Speaker Teaser column */}
                <div className="md:col-span-5 relative h-64 md:h-[350px] w-full rounded-2xl overflow-hidden border border-border/80 bg-slate-50 dark:bg-slate-900 shadow-md flex items-center justify-center p-2">
                  <Image
                    src="/images/coming_soon_poster.png"
                    alt="WIE Summit Coming Soon Poster"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 left-3 z-20 text-white bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    Official Event Poster
                  </div>
                </div>

                {/* Details Column */}
                <div className="md:col-span-7 text-center md:text-left">
                  {/* Decorative glows */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Indicator icon */}
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 border border-accent/20 mx-auto md:mx-0">
                    <Calendar size={22} className="animate-pulse" />
                  </div>
                  
                  <span className="text-[10px] uppercase bg-accent/10 text-accent border border-accent/20 font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    Schedule Coming Soon
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                    Program Under Development!
                  </h2>
                  
                  <p className="text-foreground/80 font-medium text-xs md:text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                    We are currently finalising the 2-day schedule, keynote tracks, and hands-on workshops with our speakers and local sponsors. The full agenda will be posted here shortly.
                  </p>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-border/80 pt-4">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-foreground/50">Date</p>
                        <p className="text-sm font-bold text-foreground">November 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-foreground/50">Duration</p>
                        <p className="text-sm font-bold text-foreground">2-Day Summit</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:col-span-2 mt-2">
                      <MapPin size={18} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-foreground/50">Location</p>
                        <p className="text-sm font-bold text-foreground">Kenyatta University, Nairobi</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

/*
// PRESERVED ORIGINAL PROGRAM SCHEDULE LOGIC AND TIMETABLE
// Commented out to make program page "Coming Soon" active:

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Filter, Award, ChevronDown, ChevronUp, AlertCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function OriginalProgram() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  const activities = [
    {
      title: 'Keynote Address',
      time: '9:00 AM - 10:00 AM',
      description:
        'Hear from industry leaders and innovators on the future of engineering, sustainability, and digital transformation.',
      highlights: [
        'Vision and expertise from industry pioneers',
        'Insights on global trends in engineering and STEM',
      ],
      image: '/images/hero-background.png',
    },
  ];

  const schedule = [
    {
      time: '08:00 AM - 09:00 AM',
      event: 'Arrival & Registration Check-in',
      speaker: 'WIE Desk Committee',
      category: 'General',
      details: 'Check-in and badge collection at the Main Auditorium desk.',
    },
  ];

  const categories = ['All', 'Keynote', 'Hackathon', 'Networking', 'General'];

  return (
    <>
      <section className="section-spacing bg-white">
        <div className="container-custom">
          {schedule.map((item, idx) => (
            <div key={idx}>{item.event}</div>
          ))}
        </div>
      </section>
    </>
  );
}
*/
