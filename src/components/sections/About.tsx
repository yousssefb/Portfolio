import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { MapPin, Briefcase, GraduationCap, Radio } from 'lucide-react';

export function About() {
    return (
        <Section id="about">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

                {/* Left: About text */}
                <div className="flex-1 w-full text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-mono-display font-bold mb-8 text-[var(--color-cyber-text)] uppercase tracking-wide border-b border-gray-800 pb-4 inline-block">
                            &gt; User Profile
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Passionate developer and autodidact from the world of <span className="text-[var(--color-cyber-secondary)]">1337 Coding School (42 Network)</span>, where I honed my fundamentals through intense peer-to-peer learning and rigorous C programming projects.
                            </p>
                            <p>
                                Currently pursuing my <span className="text-[var(--color-cyber-secondary)]">Software Engineering degree at EMSI</span> while building real-world products as a Full Stack Developer at Tilmicode (SIDRASOLUTION).
                            </p>
                            <p>
                                Bridging the gap between low-level system architecture and modern high-performance web applications. I thrive in environments that challenge limits and demand robust problem-solving.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Terminal Card */}
                <div className="flex-1 w-full max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="rounded-lg overflow-hidden border border-gray-700 bg-[var(--color-cyber-bg)] shadow-[0_0_30px_rgba(0,191,255,0.05)] relative"
                    >
                        {/* Terminal Window Header */}
                        <div className="bg-gray-900 border-b border-gray-700 p-3 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                            <span className="ml-2 text-xs font-mono text-gray-500">youssef@system: ~</span>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm md:text-base space-y-4 overflow-x-auto text-gray-300">
                            <div className="flex gap-4">
                                <span className="text-[var(--color-cyber-accent)] whitespace-nowrap">&gt; whoami</span>
                                <span>youssef_bourbia</span>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-[var(--color-cyber-accent)] flex items-center gap-2 whitespace-nowrap">
                                    <MapPin className="w-4 h-4" /> location
                                </span>
                                <span>Salé, Morocco</span>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-[var(--color-cyber-accent)] flex items-center gap-2 whitespace-nowrap">
                                    <Briefcase className="w-4 h-4" /> role
                                </span>
                                <span className="text-[var(--color-cyber-secondary)]">Full Stack Dev @ Tilmicode</span>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-[var(--color-cyber-accent)] flex items-center gap-2 whitespace-nowrap">
                                    <GraduationCap className="w-4 h-4" /> education
                                </span>
                                <span>EMSI, 3rd year Software Engineering</span>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-[var(--color-cyber-accent)] flex items-center gap-2 whitespace-nowrap">
                                    <Radio className="w-4 h-4" /> status
                                </span>
                                <span className="text-[var(--color-cyber-secondary)] animate-pulse">open to collaborations</span>
                            </div>

                            <div className="pt-4 flex items-center">
                                <span className="text-[var(--color-cyber-secondary)] font-bold mr-2">root@local:~$</span>
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    className="w-2 h-5 bg-gray-400 inline-block"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
}
