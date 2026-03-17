import React from "react";

const fallbackTestimonials = [
    {
        _id: "1",
        name: "Alex Johnson",
        role: "Project Manager",
        company: "TechCorp",
        message:
            "Atharv delivered an outstanding web application. His attention to detail and ability to translate requirements into elegant code is impressive.",
        rating: 5,
    },
    {
        _id: "2",
        name: "Sarah Williams",
        role: "Startup Founder",
        company: "InnovateLab",
        message:
            "Working with Atharv was a great experience. He built our MVP quickly and the code quality was excellent. Highly recommended!",
        rating: 5,
    },
];

function Testimonials() {
    const testimonials = fallbackTestimonials;

    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <span className="section-label">Feedback</span>
                <h2 className="section-title">Testimonials</h2>
                <p className="section-subtitle">
                    What people say about working with me.
                </p>

                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div
                            className="testimonial-card animate-in"
                            key={t._id || idx}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div className="testimonial-stars">
                                {renderStars(t.rating || 5)}
                            </div>
                            <p className="testimonial-message">"{t.message}"</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    {t.avatar ? (
                                        <img src={t.avatar} alt={t.name} />
                                    ) : (
                                        <span>{t.name.charAt(0)}</span>
                                    )}
                                </div>
                                <div className="testimonial-info">
                                    <h4>{t.name}</h4>
                                    <p>
                                        {t.role}
                                        {t.company ? ` at ${t.company}` : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
