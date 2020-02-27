import React from 'react'
import './Body.css'

const Body= () => {
    return (
        <div>
            <main className="mainWrapper">
                <h1>I've had a passion for computers since Windows 95
                    <svg width="30" height="25">
                                    <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Windows_Logo_1995.svg/692px-Windows_Logo_1995.svg.png" width="30" height="30"/>
                    </svg>
                </h1>
                <div className="bodyContent">
                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148781.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                I'm a Software Developer at Oregon State.
                            </h2>
                            <p>Python, C++/C, SQL</p>
                        </div>
                    </section>

                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148781.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                I've taught myself Full-Stack Web Development
                            </h2>
                            <p>JavaScript, HMTL/CSS, React, Express</p>
                        </div>
                    </section>

                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/2164/2164327.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                Let's talk about algorithms
                            </h2>
                            <p>Who doesn't love a good Quicksort?</p>
                        </div>
                    </section>

                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148836.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                Version Control and bug-free code
                            </h2>
                            <p>Git/GitHub, Unit Testing</p>
                        </div>
                    </section>

                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/256/256959.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                I'm actively growing as a developer
                            </h2>
                            <p>Currently focused on coursework for school <span role="img" aria-label="cap">🎓</span></p>

                        </div>
                    </section>
                </div>
                <footer className="flex justify-center pb2">
                <svg className="pr0" width="25" height="25">
                    <image href="https://image.flaticon.com/icons/svg/149/149060.svg" width="19" height="21"/>
                </svg>
                Arvada, Colorado, United States
            </footer>
            </main>

        </div>
    );
}

export default Body;