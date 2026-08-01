'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Info, Shield, HelpCircle, Calculator, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sponsorship() {
  const [budget, setBudget] = useState<number>(300000); // Default slider value 300,000 KES
  
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.email || !partnerForm.message) return;
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/esakenyattawie@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          type: "WIE Summit Partner Inquiry",
          name: partnerForm.name,
          email: partnerForm.email,
          company: partnerForm.company || "N/A",
          message: partnerForm.message,
        }),
      });
      setIsSubmitted(true);
      setPartnerForm({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error("Partner submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const tiers = [
    {
      name: 'Platinum',
      range: '350,000 - 500,000 KES',
      minVal: 350000,
      description: 'Maximum visibility and engagement with the entire summit audience',
      featured: true,
      benefits: [
        'Logo on all event materials and website main header',
        'Sponsorship naming rights for hackathon tracks',
        'Executive speaking slot or keynote opportunity',
        'Premium double-sized sponsor booth in high-traffic lane',
        '10 complimentary team passes & VIP lounge entry',
        'Promotional interview spotlight in post-event mailing list',
        'Full post-event analytics and participant resume vault access',
      ],
    },
    {
      name: 'Gold',
      range: '250,000 - 350,000 KES',
      minVal: 250000,
      description: 'Strong brand visibility and meaningful student talent acquisition outreach',
      featured: false,
      benefits: [
        'Logo on all promotional materials and website page',
        'Sponsor booth inside the main pavilion',
        '6 complimentary team passes with lunch access',
        'Recognition during opening and closing remarks',
        'Participant resume vault access (select profiles)',
        'VIP seating coordinates for organization executives',
      ],
    },
    {
      name: 'Silver',
      range: '150,000 - 250,000 KES',
      minVal: 150000,
      description: 'Solid engagement with targeted engineering and computer science audience',
      featured: false,
      benefits: [
        'Logo on select print materials and website sponsor board',
        '3 complimentary team passes',
        'Logo placement on workshop signage board',
        'Post-event attendee list metrics summary',
      ],
    },
    {
      name: 'Bronze',
      range: '50,000 - 150,000 KES',
      minVal: 50000,
      description: 'Entry-level sponsorship with valuable brand recognition on campus',
      featured: false,
      benefits: [
        'Logo on website partner page',
        'Mention in sponsor directory booklet',
        'Post-event aggregate attendee demographic summary',
      ],
    },
  ];

  const benefitMatrix = [
    { feature: 'Logo on Event Materials', platinum: true, gold: true, silver: true, bronze: true },
    { feature: 'Website Listing', platinum: true, gold: true, silver: true, bronze: true },
    { feature: 'Speaking Opportunity', platinum: true, gold: false, silver: false, bronze: false },
    { feature: 'Sponsor Booth', platinum: 'Double Premium', gold: 'Standard', silver: false, bronze: false },
    { feature: 'Complimentary Passes', platinum: 10, gold: 6, silver: 3, bronze: false },
    { feature: 'VIP Seating', platinum: true, gold: true, silver: false, bronze: false },
    { feature: 'Naming Rights', platinum: true, gold: false, silver: false, bronze: false },
    { feature: 'Resume Vault Access', platinum: 'Full Access', gold: 'Select Profiles', silver: false, bronze: false },
  ];

  // Helper to determine active tier recommendation based on slider budget
  const getRecommendedTier = (val: number) => {
    if (val >= 350000) return tiers[0];
    if (val >= 250000) return tiers[1];
    if (val >= 150000) return tiers[2];
    return tiers[3];
  };

  const recommendedTier = getRecommendedTier(budget);

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Partnership Opportunities"
        subtitle="Become an official sponsor of the 2-day WIE Summit 3.0. Connect with 500+ women engineers and STEM leaders in East Africa."
        primaryCTA={{ text: 'Partner With Us', href: '#contact' }}
      />

      {/* Why Sponsor */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Alignment
              </span>
              <h2 className="section-title">Why Sponsor WIE Summit?</h2>
              <p className="section-subtitle">Support diversity and hire the best engineering talent in East Africa.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StaggerReveal staggerInterval={100} direction="up">
              <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-accent transition-colors duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Reach Top Talent</h3>
                <p className="text-foreground/80 dark:text-gray-400 text-sm leading-relaxed font-semibold">
                  Direct recruitment channels to 500+ top-tier women engineers and computer science students from Kenyatta University and other top institutions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center relative overflow-hidden group hover:border-accent transition-colors duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Build Brand Equity</h3>
                <p className="text-foreground/80 dark:text-gray-400 text-sm leading-relaxed font-semibold">
                  Affirm your commitment to diversity, equity, and inclusion (DEI). Stand out as a leading advocate for women in STEM technology.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center relative overflow-hidden group hover:border-accent transition-colors duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Support Local Innovation</h3>
                <p className="text-foreground/80 dark:text-gray-400 text-sm leading-relaxed font-semibold">
                  Partner in our Hackathon track, setting real-world challenges in clean green tech and digital transformation, and sponsor local solutions.
                </p>
              </div>
            </StaggerReveal>
          </div>

        </div>
      </section>

      {/* Full-width audience banner showing support */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden border-y border-border/50">
        <Image
          src="/images/uploaded_summit2_17.jpg"
          alt="WIE Summit 2.0 Audience Session"
          fill
          className="object-cover brightness-75 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 flex items-center">
          <div className="container-custom relative z-20 text-white max-w-2xl text-left">
            <ScrollReveal direction="right">
              <h3 className="text-xl md:text-3xl font-extrabold mb-3">Empowering the Next Generation</h3>
              <p className="text-sm text-gray-200 font-semibold leading-relaxed">
                By sponsoring, you directly fund clean technology challenges, enable technical workshops, and support mentorship opportunities for 500+ female engineers.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sponsorship Calculator Widget */}
      <section className="section-spacing bg-secondary border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          
          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Interactive ROI Tool
              </span>
              <h2 className="section-title">Package Value Estimator</h2>
              <p className="section-subtitle">Slide the budget bar below to see which package aligns with your budget and its key highlights.</p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-10 shadow-lg">
            <ScrollReveal direction="up">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                
                {/* Estimator Controls */}
                <div className="md:col-span-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-foreground flex items-center gap-2">
                      <Calculator size={18} className="text-accent" />
                      Target Budget (KES)
                    </span>
                    <span className="text-2xl font-extrabold text-accent">
                      {budget.toLocaleString()} KES
                    </span>
                  </div>

                  {/* Slider Control */}
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="25000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs font-bold text-foreground/50">
                    <span>50K KES</span>
                    <span>250K KES</span>
                    <span>500K KES</span>
                  </div>

                  <div className="p-4 bg-secondary rounded-xl border border-border flex items-start gap-3">
                    <Info size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                      This calculator matches standard configurations. For custom configurations (e.g. keynotes only, or co-branded merchandise), get in touch with our partnerships coordinator below.
                    </p>
                  </div>
                </div>

                {/* Estimate Result Panel */}
                <div className="md:col-span-6 bg-secondary/40 dark:bg-secondary/15 rounded-2xl border border-border/80 p-6 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase bg-accent text-white px-2.5 py-1 rounded-md mb-2.5 inline-block">
                      Recommended Level
                    </span>
                    <h3 className="text-3xl font-extrabold text-foreground mb-1">
                      {recommendedTier.name} Tier
                    </h3>
                    <p className="text-sm font-semibold text-accent mb-4">
                      Qualifications: {recommendedTier.range}
                    </p>
                    <p className="text-sm text-foreground/80 dark:text-gray-300 leading-relaxed mb-6 font-medium">
                      {recommendedTier.description}
                    </p>
                  </div>

                  <Link
                    href="#contact"
                    className="w-full text-center py-3 bg-accent text-white font-bold rounded-lg text-sm transition-all hover:scale-[1.02] shadow-md shadow-accent/10"
                  >
                    Confirm {recommendedTier.name} Request
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Sponsorship Tiers Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Catalog
              </span>
              <h2 className="section-title">Sponsorship Tiers</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerReveal staggerInterval={100} direction="up">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl border flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300 p-6 bg-card",
                    tier.featured
                      ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-2xl scale-[1.03] lg:scale-[1.05] z-10'
                      : 'border-border/80 hover:border-accent'
                  )}
                >
                  {tier.featured && (
                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-accent text-white text-center text-[10px] font-extrabold py-1.5 px-3 rounded-full uppercase tracking-wider">
                      Most Selected
                    </div>
                  )}
                  
                  <div>
                    <h3 className={cn("text-2xl font-extrabold mb-1", tier.featured ? 'text-accent' : 'text-foreground')}>
                      {tier.name}
                    </h3>
                    <p className="font-extrabold text-lg text-foreground/80 mb-3">
                      {tier.range}
                    </p>
                    <p className="text-xs text-foreground/75 dark:text-gray-400 mb-6 leading-relaxed font-semibold">
                      {tier.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/80 dark:text-gray-300 font-semibold">
                          <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#contact"
                    className={cn(
                      "w-full text-center py-2.5 rounded-lg font-bold text-sm transition-all",
                      tier.featured
                        ? 'bg-accent text-white hover:opacity-95'
                        : 'border border-border bg-secondary hover:bg-muted text-foreground'
                    )}
                  >
                    Select Plan
                  </Link>
                </div>
              ))}
            </StaggerReveal>
          </div>

        </div>
      </section>

      {/* Benefit Matrix Table */}
      <section className="section-spacing bg-secondary border-y border-border/50">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Matrix
              </span>
              <h2 className="section-title">Benefit Comparison</h2>
            </ScrollReveal>
          </div>

          <div className="overflow-x-auto bg-card rounded-2xl border border-border shadow-sm">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left py-5 px-6 font-bold text-foreground text-sm tracking-wide uppercase">Feature Pillar</th>
                  <th className="text-center py-5 px-4 font-extrabold text-accent text-sm tracking-wide uppercase">Platinum</th>
                  <th className="text-center py-5 px-4 font-extrabold text-accent text-sm tracking-wide uppercase">Gold</th>
                  <th className="text-center py-5 px-4 font-extrabold text-accent text-sm tracking-wide uppercase">Silver</th>
                  <th className="text-center py-5 px-4 font-extrabold text-accent text-sm tracking-wide uppercase">Bronze</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {benefitMatrix.map((row, index) => (
                  <tr key={index} className="hover:bg-secondary/20 dark:hover:bg-secondary/10 transition-colors">
                    <td className="py-4.5 px-6 font-semibold text-foreground text-sm">{row.feature}</td>
                    
                    <td className="text-center py-4.5 px-4">
                      {row.platinum === true ? (
                        <Check size={18} className="text-accent mx-auto" />
                      ) : row.platinum === false ? (
                        <span className="text-foreground/30 text-xs font-semibold">—</span>
                      ) : (
                        <span className="font-bold text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{row.platinum}</span>
                      )}
                    </td>

                    <td className="text-center py-4.5 px-4">
                      {row.gold === true ? (
                        <Check size={18} className="text-accent mx-auto" />
                      ) : row.gold === false ? (
                        <span className="text-foreground/30 text-xs font-semibold">—</span>
                      ) : (
                        <span className="font-bold text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{row.gold}</span>
                      )}
                    </td>

                    <td className="text-center py-4.5 px-4">
                      {row.silver === true ? (
                        <Check size={18} className="text-accent mx-auto" />
                      ) : row.silver === false ? (
                        <span className="text-foreground/30 text-xs font-semibold">—</span>
                      ) : (
                        <span className="font-bold text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{row.silver}</span>
                      )}
                    </td>

                    <td className="text-center py-4.5 px-4">
                      {row.bronze === true ? (
                        <Check size={18} className="text-accent mx-auto" />
                      ) : row.bronze === false ? (
                        <span className="text-foreground/30 text-xs font-semibold">—</span>
                      ) : (
                        <span className="font-bold text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{row.bronze}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Custom Packages */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="up">
              <Shield className="mx-auto text-accent mb-6" size={40} />
              <h2 className="section-title mb-4">Custom Sponsorship Packages</h2>
              <p className="text-lg text-foreground/80 font-medium mb-8 leading-relaxed">
                We welcome tailored partnership packages aligned with your organization&apos;s corporate goals. Our coordinating committee will develop unique activation programs that maximize recruitment, media presence, and brand recognition.
              </p>
              <Link href="#contact" className="cta-button-secondary">
                Discuss Custom Co-Branding
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="section-spacing bg-white border-t border-border/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Collaboration
              </span>
              <h2 className="section-title">Our Partners</h2>
              <p className="section-subtitle">Proudly collaborating with leading institutions and technical groups to cultivate tomorrow&apos;s engineering leaders.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* AWEIK Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm h-full">
              <ScrollReveal direction="up" className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/aweik-logo.jpg"
                    alt="AWEIK Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">AWEIK</h3>
                <p className="text-xs text-foreground/60 font-semibold">Association for Women in Energy and Extractives in Kenya</p>
              </ScrollReveal>
            </div>

            {/* ATC KENYA Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm h-full">
              <ScrollReveal direction="up" delay={50} className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/atc-logo.png"
                    alt="ATC Kenya Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">ATC KENYA</h3>
                <p className="text-xs text-foreground/60 font-semibold">American Tower Corporation</p>
              </ScrollReveal>
            </div>

            {/* Davis & Shirtliff Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm h-full">
              <ScrollReveal direction="up" delay={100} className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/davis-logo.png"
                    alt="Davis & Shirtliff Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">DAVIS & SHIRTLIFF</h3>
                <p className="text-xs text-foreground/60 font-semibold">Official Technical & Water Systems Sponsor</p>
              </ScrollReveal>
            </div>

            {/* POA INTERNET Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm h-full">
              <ScrollReveal direction="up" delay={150} className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/poa-logo.jpg"
                    alt="Poa Internet Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">POA INTERNET</h3>
                <p className="text-xs text-foreground/60 font-semibold">Connectivity & Community Partner</p>
              </ScrollReveal>
            </div>

            {/* IEK Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm h-full">
              <ScrollReveal direction="up" delay={200} className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/iek-logo.png"
                    alt="IEK Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">IEK</h3>
                <p className="text-xs text-foreground/60 font-semibold">Institution of Engineers of Kenya</p>
              </ScrollReveal>
            </div>

            {/* IEEE Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm h-full">
              <ScrollReveal direction="up" delay={250} className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/ieee-logo.jpg"
                    alt="IEEE Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">IEEE</h3>
                <p className="text-xs text-foreground/60 font-semibold">Institute of Electrical and Electronics Engineers</p>
              </ScrollReveal>
            </div>

            {/* BE THE ENGINEER Card */}
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border/80 text-center shadow-sm lg:col-span-3 lg:max-w-md lg:mx-auto h-full">
              <ScrollReveal direction="up" delay={300} className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-24 mx-auto mb-3 bg-white/50 dark:bg-white/5 rounded-xl border border-border/60 p-2 flex items-center justify-center">
                  <Image
                    src="/images/betheengineer-logo.jpg"
                    alt="Be The Engineer Logo"
                    width={160}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="font-extrabold text-foreground text-base tracking-tight mb-1">BE THE ENGINEER</h3>
                <p className="text-xs text-foreground/60 font-semibold">STEM Mentorship Network</p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-slate-50 dark:bg-[#0b0c10] text-foreground border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 animate-fade-in text-foreground">Ready to Partner?</h2>
            
            <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
              
              {/* Call for Sponsors poster */}
              <div className="lg:col-span-5 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border bg-white dark:bg-white/5 shadow-lg flex items-center justify-center p-1">
                <Image
                  src="/images/call_for_sponsors.jpg"
                  alt="WIE Summit 3.0 Call for Sponsors Poster"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Helpdesk Form Column */}
              <div className="lg:col-span-7 bg-white dark:bg-[#12131a] rounded-2xl p-6 md:p-8 border border-border dark:border-white/10 shadow-xl flex flex-col justify-between">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 h-full">
                    <Check className="text-emerald-500 w-16 h-16 mb-4 animate-scale-in" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-foreground/75 text-sm max-w-md font-semibold">
                      Thank you for your interest in partnering with WIE Summit 3.0. Our committee will review your proposal and respond directly within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground tracking-tight mb-1">Partnership Inquiry</h3>
                      <p className="text-xs text-foreground/60 font-semibold mb-4">Submit your proposal directly to the WIE Chairperson in the background.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="partnerName" className="block text-xs font-bold text-foreground mb-1.5">
                          Your Name
                        </label>
                        <input
                          id="partnerName"
                          type="text"
                          required
                          value={partnerForm.name}
                          onChange={(e) => setPartnerForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Jane Doe"
                          className="w-full px-3 py-2 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold placeholder-foreground/35"
                        />
                      </div>
                      <div>
                        <label htmlFor="partnerEmail" className="block text-xs font-bold text-foreground mb-1.5">
                          Work Email
                        </label>
                        <input
                          id="partnerEmail"
                          type="email"
                          required
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="name@company.com"
                          className="w-full px-3 py-2 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold placeholder-foreground/35"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="partnerCompany" className="block text-xs font-bold text-foreground mb-1.5">
                        Organization / Brand Name
                      </label>
                      <input
                        id="partnerCompany"
                        type="text"
                        value={partnerForm.company}
                        onChange={(e) => setPartnerForm(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="American Tower Corp"
                        className="w-full px-3 py-2 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold placeholder-foreground/35"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnerMessage" className="block text-xs font-bold text-foreground mb-1.5">
                        Partnership Proposal / Note
                      </label>
                      <textarea
                        id="partnerMessage"
                        required
                        rows={4}
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Describe your tier preference or custom request..."
                        className="w-full px-3 py-2 text-sm border border-border bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground font-semibold placeholder-foreground/35 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-button w-full py-3 text-center text-sm font-bold inline-flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Partner With Us'}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
