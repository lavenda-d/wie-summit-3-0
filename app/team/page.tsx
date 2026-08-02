'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Heart, Filter } from 'lucide-react';
import { LinkedInIcon } from '@/components/ui/SocialIcons';
import { cn } from '@/lib/utils';

export default function Team() {
  const [activeDept, setActiveDept] = useState<string>('All');
  const [showVolunteerModal, setShowVolunteerModal] = useState<boolean>(false);

  const teamMembers = [
    {
      name: 'Lavenda Shipichira',
      role: 'Chairperson',
      department: 'Event Coordination',
      category: 'Leadership',
      bio: 'ESA-WIE Chairperson coordinating the overall vision, timeline coordination, and execution of the summit.',
      avatarColor: 'from-[#d946ef] to-pink-500',
      image: '/images/team_natasha.png',
      objectPosition: 'object-[center_30%]',
      linkedin: 'https://www.linkedin.com/in/lavenda-shipichira-034b38272',
    },
    {
      name: 'Eve Mobisa',
      role: 'Logistics Lead',
      department: 'Operations & Venue',
      category: 'Logistics',
      bio: 'Managing summit operations, Kenyatta University venue setup, scheduling execution, and logistics planning.',
      avatarColor: 'from-blue-400 to-indigo-600',
      image: '/images/team_eve.png',
      linkedin: 'https://www.linkedin.com/in/eve-mobisa-9931b1290/',
    },
    {
      name: 'Diana Bosibori',
      role: 'Finance Lead',
      department: 'Budget & Resources',
      category: 'Finance',
      bio: 'Managing summit resource allocation, corporate budgeting, financial tracking, and sponsor funding allocations.',
      avatarColor: 'from-emerald-400 to-teal-600',
      image: '/images/team_diana.jpg',
      linkedin: 'https://www.linkedin.com/in/diana-bosibori/',
    },
    {
      name: 'Latasha Ngatia',
      role: 'Publicity Lead',
      department: 'Communications & Design',
      category: 'Publicity',
      bio: 'Leading marketing outreach, social publicity campaigns, graphic assets design, and student engagement.',
      avatarColor: 'from-pink-400 to-accent',
      image: '/images/team_latasha.jpg',
      linkedin: 'https://www.linkedin.com/in/latasha-ngatia-950548299/',
    },
    {
      name: 'Natasha Lung\'azo',
      role: 'Guest Liaison Lead',
      department: 'Program Development & Speakers',
      category: 'Technical Programs',
      bio: 'Curating summit speakers and VIP guests, managing track programming, and leading the masterclass schedule.',
      avatarColor: 'from-[#38bdf8] to-blue-600',
      image: '/images/team_lavenda.jpg',
      objectPosition: 'object-top',
      linkedin: 'https://www.linkedin.com/in/natasha-lung-azo-967992299/',
    },
  ];

  const departments = ['All', 'Leadership', 'Logistics', 'Finance', 'Publicity', 'Technical Programs'];

  const filteredTeam = teamMembers.filter(
    (member) => activeDept === 'All' || member.category === activeDept
  );

  return (
    <>
      <HeroSection
        title="Organizing Team"
        subtitle="Meet the student leaders and innovators driving Kenyatta University's 2-day WIE Summit 3.0"
      />

      {/* Team Mission */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Who We Are
              </span>
              <h2 className="section-title mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-6">
                Our student-led organizing committee coordinates with university departments and industry professionals to engineer a seamless, collaborative summit environment.
              </p>
              <p className="text-lg text-foreground/80 font-medium leading-relaxed">
                By bringing unique tech competencies, finance management, and networking expertise, each committee member plays a vital role in executing an outstanding WIE Summit 3.0.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Filter & Members */}
      <section className="section-spacing bg-secondary border-t border-border/50">
        <div className="container-custom">
          
          {/* Section title & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <ScrollReveal direction="right">
              <div>
                <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-2 block">
                  Organizers
                </span>
                <h2 className="section-title !mb-0">Committee Members</h2>
              </div>
            </ScrollReveal>
            
            {/* Filter buttons */}
            <ScrollReveal direction="left" className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer",
                    activeDept === dept
                      ? "bg-accent border-accent text-white shadow-md shadow-accent/15"
                      : "bg-card border-border hover:bg-muted text-foreground/80"
                  )}
                >
                  {dept}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Members Grid */}
          {activeDept === 'All' ? (
            <div className="space-y-8">
              {/* Row 1: 3 members (Lavenda, Eve, Diana) */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <StaggerReveal staggerInterval={80} direction="up">
                  {filteredTeam.slice(0, 3).map((member) => (
                    <div 
                      key={member.name} 
                      className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Team Member Photo Container */}
                      <div className="relative w-full h-64 overflow-hidden bg-secondary">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className={cn(
                              "object-cover transition-transform duration-500 group-hover:scale-105",
                              member.objectPosition || "object-center"
                            )}
                          />
                        ) : (
                          <div className={cn(
                            "w-full h-full bg-gradient-to-br flex flex-col items-center justify-center relative",
                            member.avatarColor
                          )}>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-3xl font-extrabold shadow-inner">
                              {member.name.charAt(0)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-accent transition-colors duration-200">
                            {member.name}
                          </h3>
                          <p className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">
                            {member.role}
                          </p>
                          <p className="text-[10px] font-bold text-foreground/50 border-b border-border/80 pb-3 mb-3">
                            {member.department}
                          </p>
                          <p className="text-xs text-foreground/75 dark:text-gray-400 leading-relaxed font-semibold">
                            {member.bio}
                          </p>
                        </div>

                        {/* Social Hover links - LinkedIn Only */}
                        <div className="flex gap-3 mt-5 border-t border-border/60 pt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                          <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-foreground/55 hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-bold">
                            <LinkedInIcon size={16} />
                            <span>LinkedIn Profile</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </StaggerReveal>
              </div>

              {/* Row 2: 2 members (Latasha, Natasha) centered */}
              <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center">
                <StaggerReveal staggerInterval={80} direction="up">
                  {filteredTeam.slice(3, 5).map((member) => (
                    <div 
                      key={member.name} 
                      className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Team Member Photo Container */}
                      <div className="relative w-full h-64 overflow-hidden bg-secondary">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className={cn(
                              "object-cover transition-transform duration-500 group-hover:scale-105",
                              member.objectPosition || "object-center"
                            )}
                          />
                        ) : (
                          <div className={cn(
                            "w-full h-full bg-gradient-to-br flex flex-col items-center justify-center relative",
                            member.avatarColor
                          )}>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-3xl font-extrabold shadow-inner">
                              {member.name.charAt(0)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-accent transition-colors duration-200">
                            {member.name}
                          </h3>
                          <p className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">
                            {member.role}
                          </p>
                          <p className="text-[10px] font-bold text-foreground/50 border-b border-border/80 pb-3 mb-3">
                            {member.department}
                          </p>
                          <p className="text-xs text-foreground/75 dark:text-gray-400 leading-relaxed font-semibold">
                            {member.bio}
                          </p>
                        </div>

                        {/* Social Hover links - LinkedIn Only */}
                        <div className="flex gap-3 mt-5 border-t border-border/60 pt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                          <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-foreground/55 hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-bold">
                            <LinkedInIcon size={16} />
                            <span>LinkedIn Profile</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </StaggerReveal>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              <StaggerReveal staggerInterval={80} direction="up">
                {filteredTeam.map((member) => (
                  <div 
                    key={member.name} 
                    className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Team Member Photo Container */}
                    <div className="relative w-full h-64 overflow-hidden bg-secondary">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className={cn(
                            "object-cover transition-transform duration-500 group-hover:scale-105",
                            member.objectPosition || "object-center"
                          )}
                        />
                      ) : (
                        <div className={cn(
                          "w-full h-full bg-gradient-to-br flex flex-col items-center justify-center relative",
                          member.avatarColor
                        )}>
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-3xl font-extrabold shadow-inner">
                            {member.name.charAt(0)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-accent transition-colors duration-200">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">
                          {member.role}
                        </p>
                        <p className="text-[10px] font-bold text-foreground/50 border-b border-border/80 pb-3 mb-3">
                          {member.department}
                        </p>
                        <p className="text-xs text-foreground/75 dark:text-gray-400 leading-relaxed font-semibold">
                          {member.bio}
                        </p>
                      </div>

                      {/* Social Hover links - LinkedIn Only */}
                      <div className="flex gap-3 mt-5 border-t border-border/60 pt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-foreground/55 hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-bold">
                          <LinkedInIcon size={16} />
                          <span>LinkedIn Profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          )}

        </div>
      </section>

      {/* Team Values */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Ethos
              </span>
              <h2 className="section-title">Our Core Values</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StaggerReveal staggerInterval={100} direction="up">
              <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/5 dark:to-card rounded-2xl p-8 border border-blue-100 dark:border-blue-950/40 relative overflow-hidden">
                <span className="p-3 bg-blue-100 dark:bg-blue-950/55 text-blue-600 dark:text-blue-400 rounded-xl inline-block mb-5">
                  <Award size={20} />
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">Empowerment</h3>
                <p className="text-foreground/80 dark:text-gray-400 leading-relaxed text-sm font-semibold">
                  We commit to giving students direct channels to mentor relationships, hands-on hardware components, and leadership slots.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50/50 to-white dark:from-pink-950/5 dark:to-card rounded-2xl p-8 border border-pink-100 dark:border-pink-950/40 relative overflow-hidden">
                <span className="p-3 bg-pink-100 dark:bg-pink-950/55 text-accent rounded-xl inline-block mb-5">
                  <Users size={20} />
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">Inclusivity</h3>
                <p className="text-foreground/80 dark:text-gray-400 leading-relaxed text-sm font-semibold">
                  We build spaces where all attendees feel equipped to pitch ideas, ask technical questions, and participate in challenges.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-950/5 dark:to-card rounded-2xl p-8 border border-purple-100 dark:border-purple-950/40 relative overflow-hidden">
                <span className="p-3 bg-purple-100 dark:bg-purple-950/55 text-purple-600 dark:text-purple-400 rounded-xl inline-block mb-5">
                  <Heart size={20} />
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-foreground/80 dark:text-gray-400 leading-relaxed text-sm font-semibold">
                  We design high-fidelity challenges and recruit leading engineering directors to critique pitches and mentor hackathons.
                </p>
              </div>
            </StaggerReveal>
          </div>

        </div>
      </section>

      {/* Committee in Action Section */}
      <section className="section-spacing bg-secondary border-t border-border/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Team Action
              </span>
              <h2 className="section-title">Coordinating WIE Summit 2.0</h2>
              <p className="section-subtitle">A glimpse into our organizing committee setting up the conference and managing events.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="right">
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-border/80 shadow-md">
                <Image
                  src="/images/uploaded_summit2_1.jpg"
                  alt="Student Coordinators with ESA-WIE banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 z-20 text-white bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  Banner Coordination Setup
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={150}>
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-border/80 shadow-md">
                <Image
                  src="/images/uploaded_summit2_5.jpg"
                  alt="Recruiters and student representatives"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 z-20 text-white bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  Industry Collaboration Shakes
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-spacing bg-slate-50 dark:bg-[#0b0c10] text-foreground border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">Want to Get Involved?</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
              We look for student volunteers, campus ambassadors, and organizational coordinators to help scale WIE Summit 3.0.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <button
                onClick={() => setShowVolunteerModal(true)}
                className="cta-button w-full sm:w-auto text-center px-8 py-3.5 cursor-pointer font-bold"
              >
                Call for Volunteers
              </button>
              <Link
                href="/contact"
                className="cta-button-secondary w-full sm:w-auto text-center px-8 py-3.5 border-border hover:bg-secondary text-foreground font-bold"
              >
                Get Involved Form
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Volunteer opening soon modal */}
      {showVolunteerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-card border border-border p-8 rounded-2xl max-w-md w-full shadow-2xl relative text-center animate-scale-in">
            <button
              onClick={() => setShowVolunteerModal(false)}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground cursor-pointer text-lg font-bold"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
              <span className="text-2xl font-bold">✨</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Call for Volunteers Opening Soon!</h3>
            <p className="text-sm text-foreground/80 leading-relaxed font-semibold mb-6">
              Thank you for your enthusiasm! The official application call for WIE Summit 3.0 campus ambassadors, logistics team, and session volunteers will launch soon. 
              <br /><br />
              Subscribe to our newsletter at the bottom of the page to get notified immediately when applications go live.
            </p>
            <button
              onClick={() => setShowVolunteerModal(false)}
              className="cta-button w-full py-2.5 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
