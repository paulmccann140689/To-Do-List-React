import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>To Do List</h1>
            <div className="links">
                <Link to="/" style={{color: "white", backgroundColor: 'rgb(0,123,255)', borderRadius: '8px'}}>Incomplete Tasks</Link>
                <Link to="/createtask" style={{color: "white", backgroundColor: 'rgb(0,123,255)', borderRadius: '8px'}}>Add New Task</Link>
            </div>
        </nav>
    );
}
export default Navbar;