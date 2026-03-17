import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        await new Promise((resolve) => setTimeout(resolve, 500));
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSending(false);
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact-info">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Let's work together</h2>
                    <p className="section-subtitle">
                        Have a project in mind or just want to say hello? Feel free to reach
                        out — I'd love to hear from you.
                    </p>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">📧</div>
                        <div className="contact-info-text">
                            <h4>Email</h4>
                            <p>atharvmudse@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">📍</div>
                        <div className="contact-info-text">
                            <h4>Location</h4>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">💼</div>
                        <div className="contact-info-text">
                            <h4>Availability</h4>
                            <p>Open to opportunities</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Project Inquiry"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="form-submit"
                        disabled={sending}
                        id="contact-submit"
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <div className="form-status success">
                            ✅ Message submitted locally. Please email me directly for a response.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="form-status error">
                            ❌ Something went wrong. Please try again or email me directly.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;
