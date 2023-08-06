import React from "react";
import FooterColumn from "./FooterColumn";
import "../styles/Footer.css";
import Copyright from "./Copyright";

const Footer = () => {
    const footerColumns = [
        {
            heading: "Abstract",
            links: [
                {
                    linkText: "Start Trial",
                    url: "/",
                    key: 1,
                },
                {
                    linkText: "Pricing",
                    url: "/",
                    key: 2,
                },
                {
                    linkText: "Download",
                    url: "/",
                    key: 3,
                },
            ],
            key: 1,
        },
        {
            heading: "Resources",
            links: [
                {
                    linkText: "Blog",
                    url: "/",
                    key: 1,
                },
                {
                    linkText: "Help Center",
                    url: "/",
                    key: 2,
                },
                {
                    linkText: "Release Notes",
                    url: "/",
                    key: 3,
                },
                {
                    linkText: "Status",
                    url: "/",
                    key: 4,
                },
            ],
            key: 2,
        },
        {
            heading: "Community",
            links: [
                {
                    linkText: "Twitter",
                    url: "/",
                    key: 1,
                },
                {
                    linkText: "LinkedIn",
                    url: "/",
                    key: 2,
                },
                {
                    linkText: "Facebook",
                    url: "/",
                    key: 3,
                },
                {
                    linkText: "Dribble",
                    url: "/",
                    key: 4,
                },
                {
                    linkText: "Podcast",
                    url: "/",
                    key: 5,
                },
            ],
            key: 3,
        },
        {
            heading: "Company",
            links: [
                {
                    linkText: "About Us",
                    url: "/",
                    key: 1,
                },
                {
                    linkText: "Careers",
                    url: "/",
                    key: 2,
                },
                {
                    linkText: "Legal",
                    url: "/",
                    key: 3,
                },
            ],
            key: 4,
        },
        {
            heading: "Contact Us",
            links: [
                {
                    linkText: "testemail@email.com",
                    url: "/",
                    key: 1,
                },
            ],
            key: 5,
        },
    ];
    return (
        <footer>
            <div className="container footer-column-container">
                {footerColumns.map((column) => (
                    <FooterColumn
                        heading={column.heading}
                        links={column.links}
                        key={column.key}
                    />
                ))}
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
