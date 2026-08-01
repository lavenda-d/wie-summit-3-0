import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureCard } from '@/components/sections/FeatureCard';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, Heart, BarChart3, AlertCircle } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="About the Summit"
        subtitle="Empowering women engineers to take charge, innovate, and excel in our 2-day STEM summit"
      />

      {/* Vision & Mission */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <StaggerReveal staggerInterval={100} direction="up">
              <FeatureCard
                icon={<Eye size={22} />}
                title="Our Vision"
                description="Empowering women on campus to take charge and excel in engineering and STEM fields, fostering an inclusive future."
                color="blue"
              />
              <FeatureCard
                icon={<Target size={22} />}
                title="Our Mission"
                description="Create an engaging, skills-focused experience that equips participants with technical knowledge and leadership confidence."
                color="pink"
              />
              <FeatureCard
                icon={<Heart size={22} />}
                title="Our Values"
                description="Diversity, Excellence, and Inclusion. We celebrate different perspectives and empower all women engineers."
                color="purple"
              />
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Theme */}
      <section className="section-spacing bg-secondary relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up">
            <h2 className="section-title text-center mb-4">Summit Theme</h2>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-extrabold text-primary dark:text-accent text-center italic mb-8 leading-normal text-balance">
                &quot;Shaping a Just, Green, and Digital Future through Impactful Innovation and Leadership&quot;
              </blockquote>
              <div className="space-y-6 text-foreground/80 dark:text-gray-300 font-medium leading-relaxed text-lg">
                <p>
                  This year&apos;s theme underscores the duty of engineers and STEM professionals to design equitable, sustainable solutions for
                  real-world challenges. It calls for innovations that advance industry while bridging social gaps, easing environmental strain, and
                  serving diverse communities fairly.
                </p>
                <p>
                  WIE Summit highlights the value of diverse perspectives. Ultimately, the summit aims to empower women engineers to think big,
                  strengthen leadership, and shape future technologies and systems.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Target Audience & Metrics */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Audience & Purpose
              </span>
              <h2 className="section-title">Who This Summit Is For</h2>
            </ScrollReveal>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
            
            {/* Context Cards */}
            <div className="md:col-span-7 space-y-6">
              <ScrollReveal direction="right">
                <p className="text-lg text-foreground/80 font-medium leading-relaxed">
                  This summit is designed for <strong>university and technical institute students in Kenya</strong> pursuing engineering,
                  computer science, ICT, and related STEM disciplines.
                </p>
                <p className="text-lg text-foreground/80 font-medium leading-relaxed">
                  We focus on creating opportunities for women engineering students, viewing underrepresentation as an
                  opportunity to foster talent, build support communities, and drive innovation.
                </p>
                
                <div className="bg-secondary border border-border rounded-xl p-6">
                  <h3 className="font-extrabold text-primary dark:text-accent mb-4 text-base uppercase tracking-wider">Key Focus Areas:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm font-semibold">Technical Institute Students</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm font-semibold">Engineering & Computer Science</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm font-semibold">Underrepresented STEM groups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm font-semibold">Aspiring Innovators & Leaders</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Infographic block & participating photo */}
            <div className="md:col-span-5 space-y-6">
              <ScrollReveal direction="left" delay={150}>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100/90 dark:from-[#0d1017] dark:to-[#08090d] text-foreground p-8 rounded-2xl shadow-xl border border-border/85 relative overflow-hidden flex flex-col items-center">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                  
                  <span className="p-3 bg-accent/5 border border-accent/10 rounded-full text-accent mb-4 block">
                    <BarChart3 size={32} />
                  </span>

                  <div className="text-6xl font-extrabold text-foreground mb-2 tracking-tight">10.6%</div>
                  <p className="text-sm font-extrabold text-center text-foreground/80 mb-6 uppercase tracking-wider">
                    Registered Women Engineers in Kenya
                  </p>

                  {/* Graphical Progress Fill */}
                  <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-3 mb-6 overflow-hidden">
                    <div className="bg-accent h-full rounded-full animate-pulse shadow-[0_0_10px_var(--color-accent)]" style={{ width: '10.6%' }} />
                  </div>

                  <div className="flex items-start gap-2.5 bg-white dark:bg-white/5 p-4 rounded-xl border border-border/50 dark:border-white/5 text-xs text-foreground/75 leading-relaxed font-semibold">
                    <AlertCircle size={18} className="text-accent flex-shrink-0" />
                    <p className="leading-relaxed">
                      We aim to bridge this representation gap by equipping students with the critical technical resources and mentorship networks required for long-term career growth.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-border/80 shadow-md">
                  <Image
                    src="/images/uploaded_summit2_8.jpg"
                    alt="Auditorium Q&A Session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 z-20 text-white bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    Active Student Q&A
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* About ESA-WIE */}
      <section className="section-spacing bg-slate-50 dark:bg-[#0b0c10] text-foreground border-y border-border/50 relative overflow-hidden">
        {/* Soft glowing ambient circle */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Context */}
            <div className="lg:col-span-7 text-left">
              <ScrollReveal direction="right">
                <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                  Association
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">About ESA-WIE</h2>
                <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80 font-medium">
                  <p>
                    <strong>ESA WIE KU</strong> stands for <strong>Engineering Students Association Women in Engineering</strong> at Kenyatta
                    University. We are a student-led organization dedicated to championing the interests and advancement of women engineers.
                  </p>
                  <p>
                    Our mission is to cultivate a supportive community that promotes women&apos;s advancement in engineering, equality, and diversity
                    within STEM. Through our initiatives and programs, we work to empower women engineers to excel and lead in their careers.
                  </p>
                  <p>
                    The Women in Engineering Summit is our flagship initiative, bringing together students, professionals, and industry leaders to
                    share knowledge, build networks, and inspire the next generation of women engineers.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Pink T-Shirts photo */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={150}>
                <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-border shadow-lg group">
                  <Image
                    src="/images/team_pink_tshirts.jpg"
                    alt="ESA-WIE Kenyatta University Committee in Pink T-Shirts"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white bg-black/70 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                    ESA-WIE KU Team
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <ScrollReveal direction="up">
            <h2 className="section-title mb-6">Join Us at WIE Summit 3.0</h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-medium">
              Be part of this transformative experience. Register now or explore sponsorship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto">
              <Link href="/registration" className="cta-button w-full sm:w-auto text-center px-8 py-3.5">
                Register
              </Link>
              <Link href="/sponsorship" className="cta-button-secondary w-full sm:w-auto text-center px-8 py-3.5">
                Sponsor
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
