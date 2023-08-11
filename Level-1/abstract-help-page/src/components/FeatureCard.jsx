import React from "react";

const FeatureCard = ({ title, description, url, iconUrl }) => {
    return (
        <section className="feature-card">
            <div className="card-image-container">
                <img src={iconUrl} alt="Card Icon" />
            </div>
            <div className="card-text-container">
                <h3 className="feature-heading">{title}</h3>
                <p className="feature-description">{description}</p>
                <a href={url} className="feature-learn-more">
                    Learn more...
                </a>
            </div>
        </section>
    );
};

export default FeatureCard;
