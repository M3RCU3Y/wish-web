import type { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

type GlassCardProps = ComponentProps<"div"> & {
  children: ReactNode;
};

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl bg-elev1 shadow-soft backdrop-blur-md ring-1 ring-white/10 transition-transform duration-[var(--dur-med)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:ring-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

