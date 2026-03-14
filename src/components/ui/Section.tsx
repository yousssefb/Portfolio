import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("min-h-screen py-24 flex items-center relative z-20", className)}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="container mx-auto px-6 md:px-12 w-full max-w-7xl"
            >
                {children}
            </motion.div>
        </section>
    );
}
