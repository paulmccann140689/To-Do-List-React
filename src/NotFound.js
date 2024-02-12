import React from 'react';
import {Link} from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            <Link to='/'>Go back to incomplete tasks page</Link>
        </div>
    );
}

export default NotFound;