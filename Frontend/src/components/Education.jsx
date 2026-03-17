import React from "react";

const fallbackEducation = [
    {
        _id: "1",
        degree: "Bachelor of Technology in Mechatronics Engineering (Minor in Computer Science)",
        institution: "KE Society's Rajarambapu Institute of Technology",
        location: "Islampur, Sangli",
        startYear: "2023",
        endYear: "2027",
        description:
            "Studying Computer Science with a focus on software engineering and web technologies.",
        CGPA: "9.4 / 10",
    },
    {
        _id: "2",
        degree: "Higher Secondary Education (Junior College)",
        institution: "Gurukul English Medium School & Junior College, Ichalkaranji",
        location: "India",
        startYear: "2021",
        endYear: "2023",
        description:
            "Completed junior college with a strong focus on science and mathematics.",
        grade: "93.99% in MHTCET",
    },
];

function Education() {
    const education = fallbackEducation;

    return (
        <section className="section education" id="education">
            <div className="container">
                <span className="section-label">Academics</span>
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">
                    My academic background and qualifications.
                </p>

                <div className="timeline">
                    {education.map((edu, idx) => (
                        <div
                            className="timeline-item animate-in"
                            key={edu._id || idx}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{edu.degree}</h3>
                                    <span className="timeline-date">
                                        {edu.startYear} — {edu.endYear}
                                    </span>
                                </div>
                                <p className="timeline-company">
                                    {edu.institution}
                                    {edu.location ? ` · ${edu.location}` : ""}
                                </p>
                                {edu.description && (
                                    <p className="timeline-description">{edu.description}</p>
                                )}
                                {edu.CGPA && (
                                    <p className="timeline-grade">CGPA : {edu.CGPA}</p>
                                )}
                                {edu.grade && (
                                    <p className="timeline-grade">Grade : {edu.grade}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
