'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Check } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, TikTokIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitting(true);
      try {
        await fetch("https://formsubmit.co/ajax/esakenyattawie@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            type: "WIE Summit Newsletter Signup",
            email: email.trim()
          })
        });
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      } catch (err) {
        console.error("Failed to subscribe newsletter:", err);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <footer className="relative bg-[#0b0c10] text-white border-t border-border/20 overflow-hidden">
      {/* Background radial soft light decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          
          {/* Logo & About Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">
              WIE Summit 3.0
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Shaping a Just, Green, and Digital Future. Empowering women engineers and STEM professionals across Kenya to innovate, lead, and excel.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/women-in-engineering-ku/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/esa_wie_ku/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@esa_wie_ku"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-base tracking-wide text-white uppercase">Summit</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  About Summit
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  Program Details
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  Organizing Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-base tracking-wide text-white uppercase">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <Link href="/previous-summits" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  Gallery & Vault
                </Link>
              </li>
              <li>
                <Link href="/about#esa-wie" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  About ESA-WIE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">
                  Help Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-bold text-base tracking-wide text-white uppercase">Newsletter</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Stay in the loop with updates, announcements, and timeline schedules.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 text-sm bg-white/5 rounded-lg border border-white/10 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={subscribed || submitting}
                className="px-4 py-2 text-sm font-bold bg-accent hover:bg-accent/90 rounded-lg transition-colors cursor-pointer disabled:bg-emerald-600 flex items-center justify-center min-w-[90px]"
              >
                {subscribed ? <Check size={18} className="animate-scale-in" /> : submitting ? '...' : 'Subscribe'}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 font-medium animate-fade-in">
                Thank you for subscribing! Keep an eye on your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact quick summaries */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                <span>Kenyatta University, Nairobi</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <div className="flex flex-col sm:flex-row gap-x-2">
                  <a href="mailto:esakenyattawie@gmail.com" className="hover:text-white">
                    esakenyattawie@gmail.com
                  </a>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <a href="mailto:esawiekenyatta2@gmail.com" className="hover:text-white">
                    esawiekenyatta2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <span>+254717052939</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 flex flex-col md:flex-row items-center gap-4">
              <p>&copy; {currentYear} ESA WIE. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <span className="text-white/10">|</span>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
