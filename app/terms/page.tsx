'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Terms() {
  return (
    <>
      <HeroSection
        title="Terms of Service"
        subtitle="Review the guidelines and codes of conduct for registering and attending WIE Summit 3.0"
      />

      <section className="section-spacing bg-white text-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            <ScrollReveal direction="up">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                By accessing this portal, registering for summit pass updates, or signing up as a sponsor candidate, you agree to abide by these Terms of Service. These rules are governed by the **ESA WIE KU** organizing committee at Kenyatta University.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-2xl font-bold mb-4">2. Summit Attendance & Conduct Codes</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We maintain an active and respectful academic atmosphere during the 2-day event. Attendees agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 font-semibold">
                <li>**Professional Respect:** Refrain from disruptive behavior, hate speech, or harassment during keynotes or hackathons.</li>
                <li>**Academic Integrity:** Complete hackathon tasks independently or with assigned partners fairly.</li>
                <li>**Security Protocols:** Wear valid printed badge tags visibly at all checkpoints while on Kenyatta University grounds.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-2xl font-bold mb-4">3. Registration & Verification</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                Passes are subject to review. We reserve the right to verify student registrations or coordinate major credentials prior to printing final entry codes. Access passes are non-transferable and may be revoked if these guidelines are breached.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                All WIE Summit 3.0 graphics, timeline logs, banners, and code blocks served on this site remain the intellectual properties of ESA-WIE KU. Corporate logos of our partners (AWEIK, ATC Kenya, Davis & Shirtliff, Poa Internet) belong to their respective institutions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h2 className="text-2xl font-bold mb-4">5. Inquiries & Coordination</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                If you have questions about these guidelines, please contact the coordinator helpdesk at **esakenyattawie@gmail.com** or call **+254 717 052 939**.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
