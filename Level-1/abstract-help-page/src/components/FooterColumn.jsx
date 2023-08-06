import React from "react";

const FooterColumn = ({ heading, links }) => {
    return (
        <div className="footer-column">
            <h4 className="footer-column-heading">{heading}</h4>
            <div className="footer-link-container">
                {links.map((link) => (
                    <a href={link.url} key={link.key} className="footer-link">
                        {link.linkText}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterColumn;
