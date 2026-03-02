import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <p className="footer-text">
                    © {year} Atharv. Built with ❤️ using React & Express.
                </p>
                <div className="footer-socials">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        id="footer-github"
                    >
                        🐙
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        id="footer-linkedin"
                    >
                        💼
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        id="footer-twitter"
                    >
                        🐦
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
