import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal as TerminalIcon } from 'lucide-react';
import { Section } from '../ui/Section';

export function Contact() {
    return (
        <Section id="contact" className="min-h-[80vh]">
            <div className="flex flex-col items-center justify-center max-w-3xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center w-full mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-mono-display font-bold text-[var(--color-cyber-text)] uppercase tracking-wide inline-block relative">
                        Initiate_Contact
                        {/* Animated underline */}
                        <motion.div
                            className="absolute -bottom-4 left-0 h-1 bg-[var(--color-cyber-accent)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        />
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="w-full bg-[rgba(10,10,15,0.8)] border border-gray-800 rounded-lg p-6 md:p-10 shadow-[0_0_20px_rgba(0,191,255,0.03)]"
                >
                    <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gray-800">
                        <TerminalIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-mono text-gray-400">~/contact.sh</span>
                    </div>

                    <div className="font-mono text-base md:text-lg space-y-6 text-gray-300">
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <span className="text-[var(--color-cyber-accent)] min-w-[120px]">&gt; email</span>
                            <a href="mailto:Youssefbourbia17@gmail.com" className="hover:text-[var(--color-cyber-secondary)] transition-colors">
                                Youssefbourbia17@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <span className="text-[var(--color-cyber-accent)] min-w-[120px]">&gt; phone</span>
                            <a href="tel:0772941423" className="hover:text-[var(--color-cyber-secondary)] transition-colors">
                                0772941423
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <span className="text-[var(--color-cyber-accent)] min-w-[120px]">&gt; location</span>
                            <span>Salé, Morocco</span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <span className="text-[var(--color-cyber-accent)] min-w-[120px]">&gt; status</span>
                            <span className="text-[var(--color-cyber-secondary)] animate-pulse">Available for freelance & collaborations</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center gap-6">
                        <motion.a
                            href="mailto:Youssefbourbia17@gmail.com"
                            whileHover={{ scale: 1.1, y: -4, backgroundColor: 'rgba(0,191,255,0.1)' }}
                            className="p-4 rounded-full border border-gray-700 text-gray-400 hover:text-[var(--color-cyber-accent)] hover:border-[var(--color-cyber-accent)] transition-colors duration-300 glow-accent-hover"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/yousssefb"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -4, backgroundColor: 'rgba(0,191,255,0.1)' }}
                            className="p-4 rounded-full border border-gray-700 text-gray-400 hover:text-[var(--color-cyber-accent)] hover:border-[var(--color-cyber-accent)] transition-colors duration-300 glow-accent-hover"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/youssef-bourbia-4101b3350/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -4, backgroundColor: 'rgba(0,191,255,0.1)' }}
                            className="p-4 rounded-full border border-gray-700 text-gray-400 hover:text-[var(--color-cyber-accent)] hover:border-[var(--color-cyber-accent)] transition-colors duration-300 glow-accent-hover"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
