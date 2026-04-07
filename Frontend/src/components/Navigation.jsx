import React, { useState, useEffect } from "react";

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
                <a href="#" className="nav-logo">
                    &lt;Atharv Mudse/&gt;
                </a>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                    <li><a href="#achievements-events" onClick={handleLinkClick}>Achievements</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
                    <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    id="nav-toggle"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navigation;
