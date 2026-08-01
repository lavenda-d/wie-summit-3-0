'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Calendar, MapPin, Bell, Check, Clock } from 'lucide-react';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <>
      {/* Hero - clean dark gradient, no image overlay */}
      <HeroSection
        title="Summit Registration"
        subtitle="Secure your seat at Kenyatta University for the premier 2-day WIE Summit 3.0"
      />

      {/* Coming Soon Panel */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal direction="up">
              <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden text-center">
                {/* Glow spheres */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Indicator icon */}
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent/20">
                  <Bell size={28} className="animate-pulse" />
                </div>
                
                <span className="text-xs uppercase bg-accent/10 text-accent border border-accent/20 font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  Registration Opening Soon
                </span>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Passes Launching Shortly!
                </h2>
                
                <p className="text-foreground/80 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
                  We are finalizing the registration portals for the 2-day WIE Summit 3.0. Thank you for your patience as we prepare to welcome you.
                </p>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left border-t border-border/80 pt-6">
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
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

/*
// PRESERVED ORIGINAL TICKET GENERATOR LOGIC AND Confetti Particles Engine
// Commented out to make registration page "Coming Soon" active:

import React, { useState, useRef, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Calendar, MapPin, Ticket, Award, CheckCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TicketData {
  name: string;
  email: string;
  university: string;
  track: string;
  serial: string;
}

export function OriginalRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    track: 'General Attendee',
  });
  
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const tracks = ['General Attendee', 'Hackathon Challenger', 'STEM Observer'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.university) return;

    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const serial = `WIE-30-${randomHex}`;

    setTicket({
      ...formData,
      serial,
    });
    setShowConfetti(true);
  };

  const handleReset = () => {
    setTicket(null);
    setFormData({
      name: '',
      email: '',
      university: '',
      track: 'General Attendee',
    });
    setShowConfetti(false);
  };

  useEffect(() => {
    if (!showConfetti || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#d946ef', '#f472b6', '#38bdf8', '#34d399', '#fbbf24'];
    const particles: any[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -height - 20,
        r: Math.random() * 6 + 4,
        d: Math.random() * height,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        if (p.y > height) {
          particles[idx] = {
            ...p,
            x: Math.random() * width,
            y: -20,
            tilt: Math.random() * 10 - 5,
          };
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [showConfetti]);

  return (
    <>
      <HeroSection
        title="Pre-Registration Pass"
        subtitle="Claim your virtual entry pass for WIE Summit 3.0 and unlock access to hackathons and tech tracks"
        backgroundImage="/images/hero-background.png"
      />
      <section className="section-spacing bg-white">
        <div className="container-custom">
          {showConfetti && <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 w-full h-full" />}
          <div className="max-w-4xl mx-auto">
            {!ticket ? (
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 space-y-6">
                  <div className="p-6 bg-secondary rounded-2xl border border-border">
                    <h3 className="font-extrabold text-foreground mb-3 text-lg">Secure Your Seat</h3>
                    <ul className="space-y-2 text-xs text-foreground/80 font-medium">
                      <li className="flex gap-2"><CheckCircle size={14} className="text-accent flex-shrink-0" /> Free virtual event entry pass</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-accent flex-shrink-0" /> Submits seat in preferred tracks</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-accent flex-shrink-0" /> Generates unique attendee barcode</li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-7 bg-card border border-border p-8 rounded-3xl shadow-xl">
                  <form onSubmit={handleGenerateTicket} className="space-y-5">
                    <div>
                      <label className="block text-xs font-extrabold text-foreground uppercase tracking-wide mb-1.5">Full Name</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent text-sm font-semibold" />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-foreground uppercase tracking-wide mb-1.5">Email Address</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent text-sm font-semibold" />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-foreground uppercase tracking-wide mb-1.5">University / Affiliate</label>
                      <input type="text" name="university" required value={formData.university} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent text-sm font-semibold" />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-foreground uppercase tracking-wide mb-1.5">Preferred Track</label>
                      <select name="track" value={formData.track} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent text-sm font-semibold">
                        {tracks.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <button type="submit" className="cta-button w-full mt-4 py-3 text-sm font-extrabold">Generate My Pass</button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-8 animate-fade-in">
                <div className="relative mx-auto max-w-md bg-card border border-border rounded-3xl overflow-hidden shadow-2xl p-6">
                  <div className="flex justify-between items-center border-b border-border/80 pb-4 mb-4">
                    <span className="font-extrabold text-accent tracking-widest text-xs">WIE SUMMIT 3.0</span>
                    <span className="text-[10px] font-bold bg-accent/15 text-accent py-0.5 px-2.5 rounded-full">{ticket.track}</span>
                  </div>
                  <div className="space-y-4 text-left">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-foreground/50">Attendee</p>
                      <p className="text-lg font-extrabold text-foreground">{ticket.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-foreground/50">Affiliation</p>
                      <p className="text-sm font-bold text-foreground">{ticket.university}</p>
                    </div>
                  </div>
                </div>
                <button onClick={handleReset} className="cta-button-secondary py-2.5 text-xs font-bold inline-flex items-center gap-2"><RefreshCw size={14} /> Register Another Pass</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
*/
