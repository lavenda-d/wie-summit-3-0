'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Privacy() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="Understand how we collect, safeguard, and utilize your personal information for WIE Summit 3.0"
      />

      <section className="section-spacing bg-white text-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            <ScrollReveal direction="up">
              <h2 className="text-2xl font-bold mb-4">1. Scope of Privacy Policy</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                This privacy document governs the data practices of the **Engineering Students Association Women in Engineering (ESA WIE KU)** at Kenyatta University for the WIE Summit 3.0 website. It details the collection, storage, and processing scopes for student registrations, newsletters, and partner sponsorships.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-2xl font-bold mb-4">2. Information Collection Scopes</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We only request parameters essential for planning the 2-day summit events:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 font-semibold">
                <li>**Contact Parameters:** Full name, email address, telephone coordinates, and academic details.</li>
                <li>**Academic Context:** Current university registration, department majors, and student ID verification.</li>
                <li>**Organizational Tiers:** Professional affiliation credentials, design portfolios, and co-branding assets for sponsors.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-2xl font-bold mb-4">3. Utilization of Personal Data</h2>
              <p className="text-foreground/80 leading-relaxed mb-4 font-semibold">
                Your collected coordinates are utilized strictly for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>**Badging & Access:** To print valid delegate tags and verify entry checkpoints on campus.</li>
                <li>**Newsletter Updates:** To dispatch coordinate schedules, maps, speaker announcements, and launch updates.</li>
                <li>**Mentorship Allocations:** To group delegates based on department majors for roundtable panels.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Sharing</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                ESA-WIE does not lease, sell, or disclose personal visitor parameters to external brokers. Limited coordinate records may be processed by official summit partners (AWEIK, ATC Kenya, Davis & Shirtliff, Poa Internet) solely to coordinate student badge permissions or sponsor recruitment rosters.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h2 className="text-2xl font-bold mb-4">5. Contact & Corrections</h2>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                If you have questions about the data recorded or wish to request data erasure or updates, reach out to the helpdesk at **esakenyattawie@gmail.com** or call **+254 717 052 939**.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
