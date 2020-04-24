import React, { Component } from "react";
import ErrorPic from "../../Images/Error/404.svg";
import "./error.css";

class Errors extends Component {
    render() {
        return (
            <div id="error-page">
                <img src={ErrorPic} alt="404"></img>
            </div>
        );
    }
}

export default Errors;
