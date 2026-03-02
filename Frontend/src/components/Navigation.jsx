import React, { useState, useEffect } from "react";

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
                <a href="#" className="nav-logo">
                    &lt;Atharv /&gt;
                </a>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
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
