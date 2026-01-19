import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
    const { name, title, bio } = portfolioData.personal;

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-50">

            {/* Background Shapes (Subtle) */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6 border border-primary-100">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                        Hello, I'm <br />
                        <span className="text-primary-600">{name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-500 mb-6">
                        {title}
                    </h2>
                    <p className="max-w-lg text-lg text-slate-600 mb-8 leading-relaxed">
                        {bio}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center gap-2"
                        >
                            See My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            download="Narayan_Bhattarai_Resume.pdf"
                            className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:border-primary-600 hover:text-primary-600 transition-all shadow-sm flex items-center gap-2"
                        >
                            Resume <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center md:justify-end"
                >
                    <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                        {/* The Circle Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-slate-100 rounded-full animate-pulse-slow" />

                        {/* The Image */}
                        <img
                            src="/portfolio-new.jpg"
                            alt={name}
                            className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl scale-110 transition-transform duration-500 hover:scale-105"
                        />

                        {/* Floating Badges */}
                        <div className="absolute top-[10%] left-[-10%] z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float">
                            <span className="text-2xl font-bold text-slate-900 block">5+</span>
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Exp.</span>
                        </div>

                        <div className="absolute bottom-[10%] right-[-5%] z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float-delayed">
                            <span className="text-2xl font-bold text-slate-900 block">MS</span>
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">AI Major</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
