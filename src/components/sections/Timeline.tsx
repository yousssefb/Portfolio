import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../ui/Section';
import { timelineData } from '../../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const nodeVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};

const evenNodeVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};

export function Timeline() {
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure the element is mounted before animating
        if (!lineRef.current) return;

        let ctx = gsap.context(() => {
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0 } as any,
                {
                    scaleY: 1,
                    ease: "none",
                    transformOrigin: "top center",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 80%",
                        end: "bottom 40%",
                        scrub: 1,
                    }
                } as any
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section id="timeline" className="bg-[var(--color-cyber-bg)]">
            <div className="flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" as const }}
                    className="text-center w-full mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-mono-display font-bold text-[var(--color-cyber-text)] uppercase tracking-wide">
                        Experience_&_Education
                    </h2>
                    <p className="text-[var(--color-cyber-secondary)] font-mono mt-4 text-sm md:text-base">
                        Loading timeline modules...
                    </p>
                </motion.div>

                <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
                    {/* Center SVG Line (hidden on very small mobile, shown on md up) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-[2px] bg-gray-800">
                        <div
                            ref={lineRef}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-[var(--color-cyber-accent)] origin-top glow-accent"
                            style={{ transform: 'scaleY(0)' }}
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {timelineData.map((item, idx) => {
                            const isEven = idx % 2 !== 0; // Alternating (0-indexed)
                            return (
                                <div key={idx} className="relative w-full flex flex-col md:flex-row items-start md:items-center justify-between">

                                    {/* Glowing Dot indicator */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-cyber-bg)] border-2 border-[var(--color-cyber-secondary)] z-10 shadow-[0_0_10px_rgba(57,255,20,0.8)] mt-1 md:mt-0"
                                    />

                                    {/* Desktop Layout: Left side empty for even items, right side empty for odd items */}
                                    {/* Mobile Layout: Everything aligns left */}

                                    <motion.div
                                        variants={!isEven ? nodeVariants : evenNodeVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        className={`w-full md:w-[45%] pl-12 md:pl-0 ${!isEven ? 'md:text-right' : 'md:text-left md:ml-auto'}`}
                                    >
                                        <div className={`p-6 border border-gray-800 rounded-lg bg-[rgba(255,255,255,0.01)] backdrop-blur-sm transition-colors hover:border-[var(--color-cyber-secondary)] group relative overflow-hidden`}>
                                            <span className="text-[var(--color-cyber-secondary)] font-mono text-sm mb-2 block">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </Section>
    );
}
