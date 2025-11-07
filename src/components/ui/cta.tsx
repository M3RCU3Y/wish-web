import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps } from "react";

type CTAProps = ComponentProps<typeof Link>;

export function CTA({ className, children, ...props }: CTAProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "btn-cta",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Ghost({ className, children, ...props }: CTAProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "btn-ghost",
        className,
      )}
    >
      {children}
    </Link>
  );
}
