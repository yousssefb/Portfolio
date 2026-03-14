import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

const skillCategories = [
    {
        title: "Languages & Core",
        skills: ["C", "C++", "Python", "Java", "Go", "PHP", "JavaScript", "HTML/CSS", "SQL", "Bash"]
    },
    {
        title: "Frameworks & Databases",
        skills: ["React", "Laravel", "Tailwind CSS", "Node.js", "MySQL", "PostgreSQL", "Oracle DB", "MongoDB"]
    },
    {
        title: "Tools & Soft Skills",
        skills: ["Git", "Linux/Debian", "UML", "MiniLibX", "Problem Solving", "Adaptability"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const
        }
    }
};

export function Skills() {
    return (
        <Section id="skills" className="bg-[#0f0f16]">
            <div className="flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center w-full mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-mono-display font-bold text-[var(--color-cyber-text)] uppercase tracking-wide inline-block">
                        <span className="text-[var(--color-cyber-accent)]">&lt;</span>
                        Technical_Arsenal
                        <span className="text-[var(--color-cyber-accent)]">/&gt;</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 mb-8 md:grid-cols-3 gap-8 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-[rgba(10,10,15,0.8)] border border-gray-800 rounded-lg p-8 custom-shadow transition-all duration-300 hover:border-[var(--color-cyber-accent)] glow-accent-hover flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl font-mono text-[var(--color-cyber-text)] mb-6 border-b border-gray-700 pb-2 w-full">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 border border-gray-600 rounded-full text-sm font-mono bg-gray-900/50 text-gray-300 hover:text-[var(--color-cyber-bg)] hover:bg-[var(--color-cyber-secondary)] hover:border-[var(--color-cyber-secondary)] transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0)] hover:shadow-[0_0_10px_rgba(57,255,20,0.5)] cursor-default"
                                    >
                                        {skill}
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
