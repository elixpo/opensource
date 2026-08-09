import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: React.HTMLProps<HTMLDivElement> & { showRadialGradient?: boolean }) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden bg-black">
          <video muted playsInline autoPlay loop preload="auto" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-30 mix-blend-screen">
            <source src="https://elixpo.com/videos/breeze.mp4" type="video/mp4"/>
          </video>
          <div
            className={cn(
              "filter blur-[10px] invert dark:invert-0 after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-color-dodge pointer-events-none absolute -inset-[10px] opacity-40 will-change-transform",
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
            )}
            style={{
              "--white-gradient": "repeating-linear-gradient(100deg,var(--white) 0%,var(--white) 7%,var(--transparent) 10%,var(--transparent) 12%,var(--white) 16%)",
              "--dark-gradient": "repeating-linear-gradient(100deg,var(--black) 0%,var(--black) 7%,var(--transparent) 10%,var(--transparent) 12%,var(--black) 16%)",
              "--aurora": "repeating-linear-gradient(100deg,var(--accent-data) 10%,var(--accent-flag) 15%,var(--accent-edge) 20%,var(--accent-ops) 25%,var(--accent-data) 30%)",
            } as React.CSSProperties}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
