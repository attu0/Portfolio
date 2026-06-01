import React, { useState, useEffect, useMemo } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import AchievementsEvents from "./components/AchievementsEvents";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function Starfield({ count = 80 }) {
    const stars = useMemo(() =>
        Array.from({ length: count }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${(Math.random() * 1.6 + 0.6).toFixed(2)}px`,
            delay: `${(Math.random() * 6).toFixed(2)}s`,
            duration: `${(Math.random() * 4 + 2).toFixed(2)}s`,
            opacity: (Math.random() * 0.7 + 0.3).toFixed(2),
        })),
        [count]
    );

    return (
        <div className="starfield" aria-hidden>
            {stars.map((s, i) => (
                <span
                    key={i}
                    className="star"
                    style={{
                        left: s.left,
                        top: s.top,
                        width: s.size,
                        height: s.size,
                        animationDelay: s.delay,
                        animationDuration: s.duration,
                        opacity: s.opacity,
                    }}
                />
            ))}
        </div>
    );
}

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`app ${isLoaded ? "loaded" : ""}`}>
            {/* Ambient background orbs + starfield */}
            <div className="ambient-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>

                {/* Starfield: positions generated once per app load */}
                <Starfield />
            </div>

            <Navigation />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <AchievementsEvents />
                <Projects />
                <Education />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
