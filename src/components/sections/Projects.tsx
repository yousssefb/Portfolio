import { motion, type Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../ui/Section';
import { projectsData } from '../../data/portfolio';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const
        }
    }
};

export function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" as const }}
                    className="text-center w-full mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-mono-display font-bold text-[var(--color-cyber-text)] uppercase tracking-wide inline-block border-b border-[var(--color-cyber-accent)] pb-2">
                        Selected_Works
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="bg-[rgba(10,10,15,0.6)] backdrop-blur-sm border border-gray-800 rounded-lg p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-[var(--color-cyber-accent)] glow-accent-hover group relative overflow-hidden"
                        >
                            {/* Subtle accent line on top */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-cyber-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-mono-display font-bold text-white group-hover:text-[var(--color-cyber-accent)] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3 text-gray-500">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                            </a>
                                        )}
                                        {project.externalUrl && (
                                            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-800/50">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="text-xs font-mono text-[var(--color-cyber-secondary)] bg-[rgba(57,255,20,0.05)] px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </Section>
    );
}
