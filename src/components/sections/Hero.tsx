import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import InfiniteGallery from '../ui/3d-gallery-photography';

gsap.registerPlugin(TextPlugin);

const roles = [
    "Full Stack Developer",
    "EMSI Engineer",
    "Problem Solver",
    "Open Source Enthusiast"
];

const icons = [
    "C_Logo.png", "ISO_C++_Logo.svg.png", "Python-logo-notext.svg.png",
    "JavaScript-logo.png", "html logo.png", "CSS3_logo_and_wordmark.svg.png",
    "react-1-logo.png", "Tailwind_CSS_Logo.svg.png", "PHP-logo.svg.png",
    "Laravel.svg.png", "Java_Logo.svg.png", "Go_(programming_language)-Logo.wine.png",
    "MySQL-Logo.wine.png", "Postgresql_logo.png", "oracle databse logo.png",
    "mongodb_original_wordmark_logo_icon_146425.png", "Debian_logo.png", "UML_logo.svg.png"
];

export function Hero() {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });
            roles.forEach((role) => {
                tl.to(textRef.current, {
                    duration: 1.5,
                    text: {
                        value: role,
                        delimiter: "",
                    },
                    ease: "none",
                })
                    .to({}, { duration: 1.5 }) // Hold
                    .to(textRef.current, {
                        duration: 0.5,
                        text: {
                            value: "",
                        },
                        ease: "none",
                    });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-64 h-64 border border-[var(--color-cyber-accent)] rounded-full mix-blend-screen blur-[2px] animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-[60%] right-[15%] w-96 h-96 border border-[var(--color-cyber-secondary)] mix-blend-screen blur-[2px] animate-[spin_30s_reverse_linear_infinite] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            </div>

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 md:opacity-60">
                <div className="w-[120vw] h-[120vh] md:w-full md:h-full mt-[-10%] md:mt-0 pointer-events-auto">
                    <InfiniteGallery
                        images={icons.map(icon => ({ src: `/images/${icon}`, alt: icon }))}
                        speed={1.5}
                        visibleCount={12}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 pb-24 relative z-10 w-full max-w-4xl pointer-events-none">
                <div className="flex flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        <h2 className="text-[var(--color-cyber-secondary)] font-mono mb-4 text-sm md:text-base tracking-widest pl-1">
                            &gt; Hello, World. I am
                        </h2>
                        <h1 className="text-5xl sm:text-7xl font-mono-display font-bold mb-6 tracking-tight leading-tight uppercase relative">
                            <span className="relative z-10 text-transparent bg-clip-text bg-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                                Youssef
                            </span>
                            <br />
                            <span className="text-[var(--color-cyber-accent)] drop-shadow-[0_0_10px_rgba(0,191,255,0.5)]">
                                Bourbia
                            </span>
                        </h1>

                        <div className="h-8 md:h-10 mb-6 flex justify-center items-center w-full">
                            <span className="text-xl md:text-2xl font-mono text-gray-300">
                                <span className="text-[var(--color-cyber-secondary)] mr-2">&gt;</span>
                                <span ref={textRef} className="inline-block min-w-[20px] text-left border-r-2 border-[var(--color-cyber-accent)] pr-1 animate-pulse"></span>
                            </span>
                        </div>

                        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base md:text-lg">
                            Building performant web solutions @ Tilmicode · EMSI Software Engineering '27 · Based in Salé, Morocco
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pointer-events-auto">
                            <a href="#projects">
                                <Button variant="primary">View Projects</Button>
                            </a>
                            <a href="#contact">
                                <Button variant="outline">Contact Me</Button>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
            >
                <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-cyber-accent)]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
