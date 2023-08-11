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
            iconUrl:
                "https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
        },
        {
            key: 2,
            title: "Manage your account",
            description:
                "Configure your account settings, such as your email, profile details, and password.",
            url: "/",
            iconUrl:
                "https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
        },
        {
            key: 3,
            title: "Manage organizations, teams, and projects",
            description:
                "Use Abstract organizations, teams, and projects to organize your people and your work.",
            url: "/",
            iconUrl:
                "https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
        },
        {
            key: 4,
            title: "Manage billing",
            description: "Change subscriptions and payment details.",
            url: "/",
            iconUrl:
                "https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
        },
        {
            key: 5,
            title: "Authenticate to Abstract",
            description:
                "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
            url: "/",
            iconUrl:
                "https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
        },
        {
            key: 6,
            title: "Abstract support",
            description: "Get in touch with a human.",
            url: "/",
            iconUrl:
                "https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
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
                        iconUrl={feature.iconUrl}
                        key={feature.key}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
