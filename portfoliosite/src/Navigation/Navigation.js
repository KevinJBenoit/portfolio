import React from 'react'
import './Navigation.css'

const Navigation= () => {
    return (
        <div className="bar">
            <div className="container bb pt2">
            <a href="" className='f1 link dim black pa2 mr7 pointer name'>Kevin Benoit</a>
                <ul className='links'>
                    <a href="" className='f4 link dim blue ml6 pa2 pointer'>Resume</a>
                    <a href="" className="f4 link dim blue  pa2 pointer">Portfolio</a>
                    <a href="" className="f4 link dim blue  pa2 pointer">Contact</a>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;