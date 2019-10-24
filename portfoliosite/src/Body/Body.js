import React from 'react'
import './Body.css'

const Body= () => {
    return (
        <div>
            <main className="mainWrapper">
                <h1>I wanted to learn to build websites. Like this one, for example.</h1>
                <div className="bodyContent">
                    <section>
                        <h2> 
                            <svg width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148781.svg" width="26" height="26"/>
                            </svg>
                            I'm a Software Developer at Oregon State.
                        </h2>
                        <p>Python, C++, SQL</p>
                    </section>
                    <section>
                        <h2> 
                            <svg width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148781.svg" width="26" height="26"/>
                            </svg>
                            I've taught myself Full-Stack Web Development.
                        </h2>
                        <p>JavaScript, HTML/CSS, React.js</p>
                    </section>
                    <section>
                        <h2> 
                            <svg width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/2164/2164327.svg" width="26" height="26"/>
                            </svg>
                            Let's talk about algorithms
                        </h2>
                        <p>The answer is Quicksort</p>
                    </section>
                    <section>
                        <h2> 
                            <svg width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/148/148836.svg" width="26" height="26"/>
                            </svg>
                            Version Control and bug-free code
                        </h2>
                        <p>Git/GitHub, Unit Testing</p>
                    </section>
                    <section>
                        <h2> 
                            <svg width="25" height="18">
                                <image href="https://image.flaticon.com/icons/svg/256/256959.svg" width="26" height="26"/>
                            </svg>
                            I'm actively growing as a developer.
                        </h2>
                        <p>Currently researching Machine Learning</p>
                    </section>
                </div>
                <footer  className="flex justify-center">
                <svg className="" width="24" height="25">
                    <image href="https://image.flaticon.com/icons/svg/149/149060.svg" width="25" height="25"/>
                </svg>
                Arvada, Colorado, United States
            </footer>
            </main>
            
        </div>
    );
}

export default Body;