import React from "react";
import Input from "./Input";

const SearchBar = () => {
    const inputs = [
        {
            type: "text",
            name: "search-input",
            placeholder: "Search",
            className: "search-input",
            key: 1,
        },
    ];
    return (
        <div className="form-container">
            <form className="searchbar">
                {inputs.map((_, index) => (
                    <Input {...inputs[index]} />
                ))}
            </form>
        </div>
    );
};

export default SearchBar;
