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
                                I'm a Software Engineer at Maptek.
                            </h2>
                            <p>C++/C</p>
                        </div>
                    </section>

                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148781.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                An advocate for good Archictecture & Design
                            </h2>
                            <p>SOLID, UML, Code Smells</p>
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
                            <p>Mercurial, Git/GitHub</p>
                        </div>
                    </section>

                    <section>
                        <svg className="pt4" width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/256/256959.svg" width="26" height="26"/>
                        </svg>
                        <div>
                            <h2>
                                Continuous improvement
                            </h2>
                            <p>Currently focused on Vulcan maintenance</p>

                        </div>
                    </section>
                </div>
                <footer className="flex justify-center pb2">
                <svg className="pr0" width="25" height="25">
                    <image href="https://image.flaticon.com/icons/svg/149/149060.svg" width="19" height="21"/>
                </svg>
                Westminster, Colorado, United States
            </footer>
            </main>

        </div>
    );
}

export default Body;