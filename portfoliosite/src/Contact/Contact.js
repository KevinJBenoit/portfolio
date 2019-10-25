import React from 'react'
import './Contact.css'

const Contact= () => {
    return (
        <div className="contactDiv">
            <h1>Feel free to contact me about anything</h1>
                <ul id="contactlist" className="pt4">
                    <li>
                    <svg width="35" height="25">
                        <image href="https://image.flaticon.com/icons/svg/281/281786.svg" width="35" height="35"/>
                    </svg>
                    kevin.benoit8@gmail.com
                    </li>
                    <li className="pt4">
                    <svg width="35" height="25">
                        <image href="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" height="35"/>
                    </svg>
                    <a className="link dim dark-blue" href="https://www.linkedin.com/in/kevin-james-benoit/" target="blank">Kevin J Benoit</a>
                    </li>
                </ul>

            <footer className="flex justify-center pb2">
                <svg className="pr0" width="25" height="25">
                    <image href="https://image.flaticon.com/icons/svg/149/149060.svg" width="19" height="21"/>
                </svg>
                Arvada, Colorado, United States
            </footer>
        </div>
    );
}

export default Contact;