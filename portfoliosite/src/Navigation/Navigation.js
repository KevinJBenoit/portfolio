import React from 'react'
import './Navigation.css'
import { Link } from "react-router-dom";

const Navigation= () => {
    return (
        <div className="bar">
            <div className="container1 bb pt2">
            <Link to="/" className='f1 link dim black pa2 pointer name'>Kevin Benoit</Link>
            </div>
            <div className="container2 bb pt2">
                <ul className='links'>
                    <Link to="/resume" className='f4 link dim blue pa2 pointer'>Resume</Link>
                    <Link to="/portfolio" className='f4 link dim blue pa2 pointer'>Portfolio</Link>
                    <Link to="/contact" className='f4 link dim blue pa2 pointer'>Contact</Link>
                </ul>
                </div>
        </div>
    );
}

export default Navigation;