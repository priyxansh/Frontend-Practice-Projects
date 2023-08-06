import React from "react";

const FeatureCard = ({ title, description, url }) => {
    return (
        <section className="feature-card">
            <h3 className="feature-heading">{title}</h3>
            <p className="feature-description">{description}</p>
            <a href={url} className="feature-learn-more">
                Learn more...
            </a>
        </section>
    );
};

export default FeatureCard;
