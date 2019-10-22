import React from 'react'
import './Navigation.css'

const Navigation= () => {
    return (
        <div className="flex center pt3 pb2 bb">
            <a href="" className=' pr7 f1 link dim black pa2 pointer name'>Kevin Benoit</a>
            <a href="" className='pl7 f4 link dim blue  pa2 pointer'>Resume</a>
            <a href="" className="f4 link dim blue  pa2 pointer">Portfolio</a>
            <a href="" className="f4 link dim blue  pa2 pointer">Contact</a>

        </div>
    );
}

export default Navigation;