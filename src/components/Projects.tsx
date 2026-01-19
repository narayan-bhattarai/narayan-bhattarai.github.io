import { Section } from './Section';
import { portfolioData } from '../data/portfolio';
import { Folder } from 'lucide-react';

export const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of my work in AI, Distributed Systems, and Full-Stack Development." className="bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="mb-6 inline-flex p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <Folder size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                            {project.description}
                        </p>

                        <div className="mb-6 pt-4 border-t border-slate-100">
                            <p className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">Impact</p>
                            <p className="text-slate-600 text-xs italic">"{project.impact}"</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="px-2 py-1 text-xs font-medium text-slate-500 bg-slate-100 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
