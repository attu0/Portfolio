import React from "react";

const fallbackTestimonials = [
    {
        _id: "1",
        name: "Mayur Tambe",
        role: "Helping Founders unlock their true potential with brain based coaching",
        company: "Cognidolph",
        message:
            "Atharv worked at my startup Cognidolph during his internship, and he truly stood out for his drive and growth mindset. Despite being only in his second year, he consistently pushed his limits, quickly picked up new concepts, and applied them effectively to our project. What impressed me most was his willingness to take on challenges head-on. He embraced every opportunity to learn, stayed committed to his responsibilities, and reliably delivered on what he promised. His contributions added real value to the team. I'm confident that with this attitude and work ethic, he will continue to achieve great things ahead.",
        rating: 5,
        linkedinUrl: "https://www.linkedin.com/in/neuromayur/", // Add your LinkedIn profile or recommendation link here
    },
];

function Testimonials() {
    const testimonials = fallbackTestimonials;

    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    const handleRecommendationClick = (linkedinUrl) => {
        if (linkedinUrl) {
            window.open(linkedinUrl, "_blank");
        }
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
                            style={{ animationDelay: `${idx * 0.15}s`, cursor: t.linkedinUrl ? "pointer" : "default" }}
                            onClick={() => handleRecommendationClick(t.linkedinUrl)}
                            title={t.linkedinUrl ? "Click to view on LinkedIn" : ""}
                        >
                            {t.linkedinUrl && (
                                <div className="testimonial-link-badge">
                                    <span>→</span>
                                </div>
                            )}
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
