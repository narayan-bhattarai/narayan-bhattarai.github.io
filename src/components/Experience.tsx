import { Section } from './Section';
import { portfolioData } from '../data/portfolio';

export const Experience = () => {
    return (
        <Section id="experience" title="Professional Experience" className="bg-white">
            <div className="space-y-12">
                {portfolioData.experience.map((job, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-0">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

                        <div className={`md:flex items-center justify-between gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                            {/* Date (One Side) */}
                            <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <span className="font-mono text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                                    {job.period}
                                </span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-600 md:-translate-x-1/2 mt-1.5 z-10" />

                            {/* Content (Other Side) */}
                            <div className="w-full md:w-1/2 bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="md:hidden mb-4">
                                    <span className="font-mono text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full border border-primary-100">
                                        {job.period}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-1">
                                    {job.role}
                                </h3>
                                <h4 className="text-lg font-medium text-slate-600 mb-4">{job.company}</h4>

                                <ul className="space-y-3 mb-6">
                                    {job.description.map((point, i) => (
                                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                                            <span className="text-primary-500 mr-2 mt-1">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
