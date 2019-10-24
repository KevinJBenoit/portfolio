import React from 'react'
import './Navigation.css'

const Navigation= () => {
    return (
        <div className="bar">
            <div className="container1 bb pt2">
            <a href="" className='f1 link dim black pa2 pointer name'>Kevin Benoit</a>
            </div>
            <div className="container2 bb pt2">
                <ul className='links'>
                    <a href="" className='f4 link dim blue pa2 pointer'>Resume</a>
                    <a href="" className="f4 link dim blue  pa2 pointer">Portfolio</a>
                    <a href="" className="f4 link dim blue  pa2 pointer">Contact</a>
                </ul>
                </div>
        </div>
    );
}

export default Navigation;