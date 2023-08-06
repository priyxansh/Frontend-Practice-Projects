import React from "react";
import "../styles/Input.css"

const Input = (props) => {
    return (
        <div className="input-block">
            <label>
                <input {...props} />
            </label>
        </div>
    );
};

export default Input;
