"use client";

import { motion } from "framer-motion";
import { FadeReveal } from "@/components/reveal";
import { org } from "@/data/site";
import clsx from "clsx";

export function MissionSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Mission Statement - Left Side */}
                    <FadeReveal>
                        <div className="sticky top-24">
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300 mb-6">
                                Our Mission
                            </h2>
                            <p className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white drop-shadow-lg">
                                {org.mission}
                            </p>
                            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full" />
                        </div>
                    </FadeReveal>

                    {/* Timeline - Right Side */}
                    <div className="relative pl-8 border-l border-white/10 space-y-12">
                        {org.notes.map((note, idx) => (
                            <TimelineItem key={idx} index={idx}>
                                {note}
                            </TimelineItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ children, index }: { children: React.ReactNode; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative"
        >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-slate-950 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

            <div className="prose prose-invert prose-lg">
                <p className="text-lg text-slate-200 leading-relaxed">{children}</p>
            </div>
        </motion.div>
    );
}
