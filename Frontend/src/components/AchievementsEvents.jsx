import React, { useEffect, useRef, useState } from "react";

const fallbackAchievementsAndEvents = [
    {
        _id: "0",
        title: "1st Rank - National Level 24-Hour Hackathon",
        organization: "KE Society's Rajarambapu Institute of Technology",
        date: "2026",
        type: "Achievement",
        image: "/rit_hackathon.png",
        description: "Secured 1st rank in a 24-hour national-level hackathon held at KE Society's Rajarambapu Institute of Technology.",
    },
    {
        _id: "6",
        title: "National Level Hackathon Finalist (Hardware Track)",
        organization: "ADCET, Ashta",
        date: "48+ Hours",
        type: "Achievement",
        image: "/adcet%20finalist.jpg",
        description: "My team and I were finalists in a national-level 48+ hour hackathon in the hardware track at ADCET, Ashta.",
    },
    {
        _id: "7",
        title: "Attended ROSCon Pune",
        organization: "ROS Community Event",
        date: "Pune",
        type: "Event",
        image: "/rosconpune.jpg",
        description: "Participated in ROSCon Pune and explored robotics talks, sessions, and community innovations.",
    },
    {
        _id: "8",
        title: "Qualified Internal Hackathon - SIH 2025",
        organization: "Smart India Hackathon",
        date: "2025",
        type: "Achievement",
        image: "/sih.jpg",
        description: "Qualified the internal hackathon round for Smart India Hackathon 2025.",
    },
];

function AchievementsEvents() {
    const items = fallbackAchievementsAndEvents;
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isPaused) {
            return;
        }

        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 3000);

        return () => clearInterval(timerRef.current);
    }, [isPaused, items.length]);

    const activeItem = items[current];

    return (
        <section className="section achievements-events" id="achievements-events">
            <div className="container">
                <div className="achievements-layout">
                    <div
                        className="achievements-visual animate-in"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="achievements-slideshow">
                            {items.map((item, idx) => (
                                <div
                                    className={`achievements-slide ${idx === current ? "active" : ""}`}
                                    key={item._id || idx}
                                >
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} className="achievements-image" />
                                    ) : (
                                        <div className="achievements-image-fallback">🏆</div>
                                    )}
                                </div>
                            ))}
                            <div className="achievements-slide-dots">
                                {items.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`achievements-dot ${idx === current ? "active" : ""}`}
                                        onClick={() => setCurrent(idx)}
                                        aria-label={`Achievement slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="achievements-text animate-in">
                        <span className="section-label">Highlights</span>
                        <h2 className="section-title">Achievements & Events</h2>
                        <p className="section-subtitle">
                            A quick look at milestones and events from my journey.
                        </p>
                        <div className="achievements-detail-card">
                            <div className="achievements-detail-header">
                                <h3>{activeItem.title}</h3>
                                <span className="achievements-date">{activeItem.date}</span>
                            </div>
                            <p className="achievements-meta">
                                {activeItem.organization}
                                {activeItem.type ? ` · ${activeItem.type}` : ""}
                            </p>
                            <p className="achievements-description">{activeItem.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AchievementsEvents;
