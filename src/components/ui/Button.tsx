import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, keyof ButtonHTMLAttributes<HTMLButtonElement>> {
    className?: string;
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant = 'primary', ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden group",
                    variant === 'primary' && "bg-transparent border border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] glow-accent hover:bg-[var(--color-cyber-accent)] hover:text-[var(--color-cyber-bg)]",
                    variant === 'outline' && "bg-transparent border border-[var(--color-cyber-text)] text-[var(--color-cyber-text)] hover:border-[var(--color-cyber-accent)] hover:text-[var(--color-cyber-accent)]",
                    variant === 'ghost' && "bg-transparent text-[var(--color-cyber-text)] hover:text-[var(--color-cyber-accent)]",
                    className
                )}
                {...props}
            >
                <span className="relative z-10">{children}</span>
                {variant === 'primary' && (
                    <div className="absolute inset-0 bg-[var(--color-cyber-accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                )}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
