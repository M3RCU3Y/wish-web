"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type StaggerContainerProps = ComponentProps<typeof motion.div> & {
    children: ReactNode;
    delay?: number;
    staggerDelay?: number;
};

export function StaggerContainer({
    children,
    delay = 0,
    staggerDelay = 0.1,
    ...props
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

type StaggerItemProps = ComponentProps<typeof motion.div> & {
    children: ReactNode;
};

export function StaggerItem({ children, ...props }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
