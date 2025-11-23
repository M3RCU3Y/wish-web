import Image from "next/image";
import { TeamMember } from "@/data/site";
import { cn } from "@/lib/utils";

interface TeamCardProps {
    member: TeamMember;
    className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/20 hover:bg-white/10",
                className
            )}
        >
            {/* Glow Effect */}
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine" />

            <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900/50">
                    {member.image ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-16 w-16 opacity-20"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                {/* Content Section */}
                <div className="relative -mt-12 flex flex-1 flex-col px-6 pb-6">
                    <div className="mb-1">
                        <span className="inline-block rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md border border-sky-500/20">
                            {member.role}
                        </span>
                    </div>

                    <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-sky-200 transition-colors">
                        {member.name}
                    </h3>

                    {member.bio && (
                        <p className="text-sm text-slate-300 leading-relaxed opacity-90">
                            {member.bio}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
