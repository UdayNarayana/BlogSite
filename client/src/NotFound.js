import React from "react";
import './NotFound.css'
import { Link } from "react-router-dom";


const NotFound = () => {

    return (
        <React.Fragment>
            <h1>Error 404 Page Not Found</h1>
            <p className="not-found"><Link to="/"> Back To Home Page</Link></p>
        </React.Fragment>
    )
}

export default NotFound