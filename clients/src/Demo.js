import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
    return (
        <>
            <Link to="/register">
                <button>Click to Register / Login </button>
            </Link>
        </>
    );
}
export default Demo;