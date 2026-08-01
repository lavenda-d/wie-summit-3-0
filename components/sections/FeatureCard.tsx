import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  color?: 'pink' | 'blue' | 'purple' | 'green';
}

export function FeatureCard({ icon, title, description, color = 'pink' }: FeatureCardProps) {
  const borderColors = {
    pink: 'border-pink-100 dark:border-pink-950/40 hover:border-pink-400 dark:hover:border-pink-500',
    blue: 'border-blue-100 dark:border-blue-950/40 hover:border-blue-400 dark:hover:border-blue-500',
    purple: 'border-purple-100 dark:border-purple-950/40 hover:border-purple-400 dark:hover:border-purple-500',
    green: 'border-emerald-100 dark:border-emerald-950/40 hover:border-emerald-400 dark:hover:border-emerald-500',
  };

  const bgClasses = {
    pink: 'bg-gradient-to-br from-pink-50/50 to-white dark:from-pink-950/10 dark:to-card',
    blue: 'bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/10 dark:to-card',
    purple: 'bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-950/10 dark:to-card',
    green: 'bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-950/10 dark:to-card',
  };

  const iconClasses = {
    pink: 'bg-pink-100 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400',
    green: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
  };

  return (
    <div className={cn(
      "card-hover border p-6 md:p-8 rounded-2xl flex flex-col items-start gap-4 transition-all duration-300 relative group overflow-hidden",
      borderColors[color],
      bgClasses[color]
    )}>
      {/* Decorative subtle ambient card glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

      {icon && (
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          iconClasses[color]
        )}>
          {icon}
        </div>
      )}
      
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm md:text-base text-foreground/75 dark:text-gray-400 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
