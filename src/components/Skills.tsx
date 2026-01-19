import { Section } from './Section';
import { portfolioData } from '../data/portfolio';

export const Skills = () => {
    return (
        <Section id="skills" title="Technical Arsenal" className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {Object.entries(portfolioData.skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 capitalize flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary-600" />
                            {category.replace('_', ' ')}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                            {items.map((skill) => (
                                <div
                                    key={skill}
                                    className="group flex items-center gap-2"
                                >
                                    <span className="text-slate-600 font-medium group-hover:text-primary-600 transition-colors">
                                        {skill}
                                    </span>
                                    {/* Subtle separator */}
                                    <span className="text-slate-300 text-xs">/</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
