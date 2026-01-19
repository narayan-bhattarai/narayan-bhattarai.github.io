import React, { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children: ReactNode;
    className?: string;
    subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-28 ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                {title && (
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                        {subtitle && (
                            <p className="text-slate-500 text-lg leading-relaxed">{subtitle}</p>
                        )}
                        <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-6 rounded-full" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};
