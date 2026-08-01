'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('wie-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('wie-theme', 'light');
    }
  };

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Program', href: '/program' },
    { label: 'Sponsorship', href: '/sponsorship' },
    { label: 'Previous Summits', href: '/previous-summits' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300">
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative overflow-hidden rounded-lg border border-border/80 p-0.5 bg-card group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.jpg"
              alt="ESA WIE Logo"
              width={42}
              height={42}
              className="h-10 w-10 md:h-12 md:w-12 rounded-md object-cover"
            />
          </div>
          <span className="hidden sm:inline nav-brand">WIE SUMMIT 3.0</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-semibold transition-all duration-300 py-1.5 px-0.5",
                isActive(item.href)
                  ? "text-accent font-bold"
                  : "text-foreground/80 hover:text-accent"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full shadow-[0_0_8px_var(--color-accent)]" />
              )}
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-muted text-foreground transition-all duration-300 border border-border/60 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
          </button>
          
          <Link href="/registration" className="cta-button text-sm py-2 px-5">
            Register
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-muted text-foreground transition-colors border border-border/50"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/80 bg-background/95 backdrop-blur-md animate-fade-in duration-300">
          <div className="container-custom py-6 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-semibold text-lg py-2.5 px-3 rounded-lg transition-all duration-200",
                  isActive(item.href)
                    ? "bg-accent/10 text-accent"
                    : "text-foreground/80 hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/registration"
              className="cta-button text-sm text-center mt-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

