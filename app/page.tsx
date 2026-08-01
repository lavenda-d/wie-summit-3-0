import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureCard } from '@/components/sections/FeatureCard';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Zap, Users, Lightbulb, Heart, Target, ArrowRight, Award } from 'lucide-react';

export default function Home() {
  const objectives = [
    {
      icon: <Heart size={22} />,
      title: 'Career Resilience',
      description: 'Build confidence and navigational skills for sustainable career growth in engineering.',
      color: 'pink' as const,
    },
    {
      icon: <Zap size={22} />,
      title: 'Capacity Building',
      description: 'Develop technical and leadership skills to excel with future-ready competencies.',
      color: 'blue' as const,
    },
    {
      icon: <Users size={22} />,
      title: 'Life Long Impact',
      description: 'Create networks and lasting professional connections beyond the summit.',
      color: 'purple' as const,
    },
    {
      icon: <Lightbulb size={22} />,
      title: 'Innovation & Problem Solving',
      description: 'Co-develop transformative solutions for real-world challenges.',
      color: 'green' as const,
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Mentorship',
      description: 'Access structured mentorship from industry leaders and experienced professionals.',
      color: 'pink' as const,
    },
    {
      icon: <Target size={22} />,
      title: 'Leadership Development',
      description: 'Shape leaders for impact in every space with strategic mentorship.',
      color: 'blue' as const,
    },
  ];

  const activities = [
    {
      title: 'Keynote Addresses',
      description:
        'Hear from industry leaders and innovators on the future of engineering, sustainability, and digital transformation.',
      image: '/images/activity_keynote.jpg',
      tag: 'Inspiration',
    },
    {
      title: 'Panel Discussions',
      description:
        'Interactive stage panels featuring female engineering veterans sharing insights on tech careers and resilience.',
      image: '/images/activity_panel.jpg',
      tag: 'Discussion',
    },
    {
      title: 'Roundtable Discussions',
      description:
        'Small-group brainstorming sessions facilitating deep peer-to-peer exchange and collaborative problem-solving.',
      image: '/images/uploaded_summit2_15.jpg',
      tag: 'Collaboration',
    },
    {
      title: 'Workshops',
      description:
        'Interactive tech spaces for hands-on software development, hardware configurations, and practical skillset masterclasses.',
      image: '/images/activity_workshop.jpg',
      tag: 'Learn',
    },
    {
      title: 'Hackathons & Presentations',
      description:
        'Intensive team challenges to design green solutions and present operational prototypes to industry panels.',
      image: '/images/activity_hackathon.jpg',
      tag: 'Build & Showcase',
    },
    {
      title: 'Industry Visits',
      description:
        'Educational tours and industrial visits to leading engineering firms, building direct connections with professional tech hubs.',
      image: '/images/atc_industrial_visit.jpg',
      tag: 'Explore',
    },
  ];

  const sponsorshipTiers = [
    {
      name: 'Platinum',
      range: '350k - 500k',
      benefits: ['Premium visibility', 'Speaking slot', 'Sponsor booth', 'Logo placement', 'Team passes'],
      featured: true,
    },
    {
      name: 'Gold',
      range: '250k - 350k',
      benefits: ['Extended visibility', 'Sponsor booth', 'Logo placement', 'Team passes'],
      featured: false,
    },
    {
      name: 'Silver',
      range: '150k - 250k',
      benefits: ['Visibility', 'Logo placement', 'Team passes'],
      featured: false,
    },
    {
      name: 'Bronze',
      range: '50k - 150k',
      benefits: ['Logo placement', 'Recognition'],
      featured: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Women in Engineering Summit 3.0"
        subtitle="A Premier 2-Day Event Shaping a Just, Green, and Digital Future through Impactful Innovation and Leadership"
        backgroundImage="/images/group-photo.jpg"
        primaryCTA={{ text: 'Register Now', href: '/registration' }}
        secondaryCTA={{ text: 'Become a Sponsor', href: '/sponsorship' }}
        showScrollIndicator={true}
      />

      {/* Overview Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Context Details */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <ScrollReveal duration={800} direction="up">
                <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                  Introduction
                </span>
                <h2 className="section-title">About the Summit</h2>
                <p className="text-lg text-foreground/80 font-medium mb-6 leading-relaxed">
                  The Women in Engineering Summit 3.0 is a premier 2-day transformative platform bringing together women engineers,
                  STEM professionals, and visionary industry leaders to drive innovation and collective leadership.
                </p>
                <p className="text-lg text-foreground/80 font-medium mb-8 leading-relaxed">
                  This year&apos;s 2-day summit explores the theme of <strong>&quot;Shaping a Just, Green, and Digital Future&quot;</strong>, focusing on
                  co-developing real-world engineering solutions for sustainability, equitable digital transformation, and professional growth.
                </p>
                <Link href="/about" className="cta-button inline-flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Graphics Overlay Panel */}
            <div className="md:col-span-5 relative w-full h-[550px] rounded-2xl overflow-hidden shadow-xl border border-border bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-2">
              <ScrollReveal duration={1000} direction="left" className="relative w-full h-full">
                <Image
                  src="/images/coming_soon_poster.png"
                  alt="WIE Summit 3.0 Event Poster"
                  fill
                  className="object-contain"
                  priority
                />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Event Objectives */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Target Outcomes
              </span>
              <h2 className="section-title">Event Objectives</h2>
              <p className="section-subtitle">Six key pillars guiding our summit roadmap and student empowerment.</p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerReveal staggerInterval={100} direction="up">
              {objectives.map((obj, index) => (
                <FeatureCard key={index} {...obj} />
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Event Activities */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Experience
              </span>
              <h2 className="section-title">Event Activities</h2>
              <p className="section-subtitle">Six engagement formats designed to inspire, test, and upscale your competencies.</p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerReveal staggerInterval={150} direction="up">
              {activities.map((activity, index) => (
                <div key={index} className="card-hover rounded-2xl overflow-hidden border border-border bg-card group relative flex flex-col h-[380px]">
                  
                  {/* Aspect Image */}
                  <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    <Image 
                      src={activity.image} 
                      alt={activity.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <span className="absolute top-4 left-4 z-20 text-xs font-bold bg-accent text-white px-3 py-1 rounded-full uppercase tracking-wider">
                      {activity.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                        {activity.title}
                      </h3>
                      <p className="text-foreground/80 dark:text-gray-400 text-sm leading-relaxed font-medium">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="section-spacing relative bg-slate-50 dark:bg-[#0b0c10] border-t border-border/50 text-foreground overflow-hidden">
        {/* Abstract background graphics decoration */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(217,70,166,0.05),transparent_100%)] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <span className="text-accent font-extrabold text-sm uppercase tracking-widest mb-3 block">
                Partnerships
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Sponsorship Opportunities</h2>
              <p className="text-lg text-foreground/80 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
                Partner with us and invest in talent acquisition, diversity representation, and impactful local innovation.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StaggerReveal staggerInterval={100} direction="up">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative ${
                    tier.featured
                      ? 'border-accent bg-accent/5 shadow-[0_0_30px_rgba(217,70,166,0.1)] scale-[1.03] lg:scale-[1.05] z-10'
                      : 'border-border bg-white dark:bg-[#12131a] hover:border-accent/30 shadow-sm'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white font-extrabold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase">
                      Featured
                    </span>
                  )}
                  <div>
                    <h3 className={`text-2xl font-bold mb-6 ${tier.featured ? 'text-accent' : 'text-foreground'}`}>
                      {tier.name}
                    </h3>
                    <ul className="space-y-3 text-sm text-foreground/75 dark:text-gray-400 mb-8 font-semibold">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/sponsorship" 
                    className={`w-full text-center py-2.5 rounded-lg font-bold text-sm transition-all ${
                      tier.featured
                        ? 'bg-accent text-white hover:opacity-90 shadow-md shadow-accent/20'
                        : 'bg-secondary hover:bg-muted text-foreground border border-border'
                    }`}
                  >
                    Inquire
                  </Link>
                </div>
              ))}
            </StaggerReveal>
          </div>

          <div className="text-center">
            <ScrollReveal direction="up" delay={300}>
              <Link href="/sponsorship" className="cta-button-secondary border-border text-foreground hover:bg-secondary">
                Explore Sponsorship Packages
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-spacing bg-white border-y border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="text-center border-r last:border-0 border-border/50 px-2 flex flex-col items-center">
              <ScrollReveal direction="up" delay={0}>
                <span className="text-accent flex items-center justify-center mb-2">
                  <Users size={28} />
                </span>
                <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-1 select-none">
                  <AnimatedCounter value="350+" />
                </p>
                <p className="text-sm font-semibold text-foreground/70">Expected Participants</p>
              </ScrollReveal>
            </div>

            <div className="text-center border-r last:border-0 border-border/50 px-2 flex flex-col items-center">
              <ScrollReveal direction="up" delay={100}>
                <span className="text-accent flex items-center justify-center mb-2">
                  <Zap size={28} />
                </span>
                <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-1 select-none">
                  <AnimatedCounter value="50+" />
                </p>
                <p className="text-sm font-semibold text-foreground/70">Industry Speakers</p>
              </ScrollReveal>
            </div>

            <div className="text-center border-r last:border-0 border-border/50 px-2 flex flex-col items-center">
              <ScrollReveal direction="up" delay={200}>
                <span className="text-accent flex items-center justify-center mb-2">
                  <Award size={28} />
                </span>
                <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-1 select-none">
                  <AnimatedCounter value="20+" />
                </p>
                <p className="text-sm font-semibold text-foreground/70">Sponsorship Partners</p>
              </ScrollReveal>
            </div>

            <div className="text-center border-r last:border-0 border-border/50 px-2 flex flex-col items-center">
              <ScrollReveal direction="up" delay={300}>
                <span className="text-accent flex items-center justify-center mb-2">
                  <Heart size={28} />
                </span>
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-1 select-none">
                  <AnimatedCounter value="100%" />
                </p>
                <p className="text-sm font-semibold text-foreground/70">Female-Focused</p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary relative overflow-hidden">
        {/* Soft glowing ambient circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="section-title mb-4">Ready to Join the Movement?</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of the Women in Engineering Summit 3.0 and connect with innovators, leaders, and change-makers shaping a green digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link href="/registration" className="cta-button w-full sm:w-auto text-center px-8 py-3.5">
                Register Now
              </Link>
              <Link href="/sponsorship" className="cta-button-secondary w-full sm:w-auto text-center px-8 py-3.5">
                Become a Sponsor
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
