import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-600 selection:bg-primary-100 selection:text-primary-700">
            <Header />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />

                <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
                    <p>© {new Date().getFullYear()} Narayan Bhattarai. All rights reserved.</p>
                    <p className="mt-2 text-slate-600">Built with React, Vite & Tailwind</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
