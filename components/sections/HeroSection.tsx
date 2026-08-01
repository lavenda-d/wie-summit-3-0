import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showScrollIndicator?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = false,
}: HeroSectionProps) {
  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden transition-colors duration-300",
        backgroundImage
          ? "min-h-[60vh] md:min-h-[70vh] py-20 md:py-28 bg-[#08090c]"
          : "min-h-[35vh] md:min-h-[42vh] py-14 md:py-18 bg-background border-b border-border/50 text-foreground"
      )}
    >
      {/* Background Grid Pattern - only show on Homepage hero with background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10"
        />
      )}

      {/* Floating Glowing Orbs */}
      <div
        className={cn(
          "absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-10",
          backgroundImage ? "bg-accent/10" : "bg-accent/5 dark:bg-accent/8"
        )}
      />
      <div
        className={cn(
          "absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-10 [animation-delay:3s]",
          backgroundImage ? "bg-primary/20" : "bg-primary/10 dark:bg-primary/15"
        )}
      />

      {/* Background Image (Home only) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover brightness-[0.45] contrast-[1.05]"
            priority
          />
        </div>
      )}

      {/* Dark/Gradient Overlay (Home only) */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent z-10" />
      )}

      {/* Content Container */}
      <div className="relative z-20 container-custom w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Tagline / Summit Branding */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full border font-bold text-[10px] uppercase tracking-widest mb-6 animate-fade-in",
              backgroundImage
                ? "border-accent/30 bg-accent/10 text-accent shadow-[0_0_15px_rgba(217,70,166,0.1)]"
                : "border-accent/20 bg-accent/5 text-accent"
            )}
          >
            <span>WIE Summit 3.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span>Kenyatta University</span>
          </div>

          {/* Heading - light/dark responsive */}
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] animate-slide-in select-none",
              backgroundImage ? "text-white" : "text-foreground"
            )}
          >
            {title.includes("Women in Engineering") ? (
              <>
                Women in{" "}
                <span className="bg-gradient-to-r from-accent via-pink-400 to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(217,70,166,0.2)]">
                  Engineering
                </span>{" "}
                Summit 3.0
              </>
            ) : (
              title
            )}
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-base md:text-lg mb-8 max-w-2xl leading-relaxed text-balance animate-fade-in [animation-delay:200ms]",
              backgroundImage ? "text-gray-300" : "text-foreground/80"
            )}
          >
            {subtitle}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto animate-fade-in [animation-delay:400ms]">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="cta-button w-full sm:w-auto px-8 py-3.5 text-center text-base"
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className={cn(
                    "cta-button-secondary w-full sm:w-auto px-8 py-3.5 text-center text-base",
                    backgroundImage
                      ? "border-white text-white hover:bg-white/10"
                      : "border-accent text-accent hover:bg-accent/10"
                  )}
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown
            size={24}
            className={backgroundImage ? "text-white" : "text-foreground/60"}
          />
        </div>
      )}
    </div>
  );
}
