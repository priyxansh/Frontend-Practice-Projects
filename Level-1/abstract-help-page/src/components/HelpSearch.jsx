import React from "react";
import "../styles/Help.css";
import SearchBar from "./SearchBar";

const HelpSearch = () => {
    return (
        <section className="help-search">
            <div className="container">
                <h1 className="help-heading">How can we help?</h1>
                <SearchBar />
            </div>
        </section>
    );
};

export default HelpSearch;
