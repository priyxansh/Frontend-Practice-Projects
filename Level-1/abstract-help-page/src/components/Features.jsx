import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
    const features = [
        {
            key: 1,
            title: "Using Abstract",
            description:
                "Abstract lets you manage, version, and document your designs in one place.",
            url: "/",
        },
        {
            key: 2,
            title: "Manage your account",
            description:
                "Configure your account settings, such as your email, profile details, and password.",
            url: "/",
        },
        {
            key: 3,
            title: "Manage organizations, teams, and projects",
            description:
                "Use Abstract organizations, teams, and projects to organize your people and your work.",
            url: "/",
        },
        {
            key: 4,
            title: "Manage billing",
            description: "Change subscriptions and payment details.",
            url: "/",
        },
        {
            key: 5,
            title: "Authenticate to Abstract",
            description:
                "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
            url: "/",
        },
        {
            key: 6,
            title: "Abstract support",
            description: "Get in touch with a human.",
            url: "/",
        },
    ];
    return (
        <section className="features">
            <div className="container">
                {features.map((feature) => (
                    <FeatureCard
                        title={feature.title}
                        description={feature.description}
                        url={feature.url}
                        key={feature.key}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
