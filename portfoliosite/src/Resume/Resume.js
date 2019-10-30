import React from 'react'
import './Resume.css'

const Resume= () => {
    return (
        <div>
            <main className="mainWrapper">
                <section id="resumeSection">
                    <h1>Yes, I was a farmer.
                        <svg className="pt4 pl2" width="25" height="25">
                            <image href="https://image.flaticon.com/icons/svg/1864/1864470.svg" width="25" height="25"/>
                        </svg>
                    </h1>
                        <div>
                            <h2>
                                <strong>Data Scientist/Co-Owner, Open Hearth Farm </strong> 
                                January 2017-September 2019
                            </h2>
                            <ul>
                                <li>Analyzed operational as well as sales data in order to measure and optimize business efficiency</li>
                                <li>Enabled and maintained online sales platform which led to a 45% increase in sales</li>
                                <li>Developed an efficient project management system</li>
                                <li>Resolved client compaints with solution-oriented customer care</li>
                            </ul>
                        </div>
                        <h1 className="pt5">Skills</h1>
                            <ul id="skills">
                                <li> 
                                    <strong>Languages</strong>
                                    <p>Python, C++, SQL, JavaScript</p>
                                </li>
                                <li> 
                                    <strong> Frameworks</strong>
                                    <p>
                                    React, Node, Express
                                    </p>
                                </li>
                                <li> 
                                    <strong> Databases</strong>
                                    <p>
                                    MySQL, PostgreSQL, SQLite
                                    </p>
                                </li>
                                <li> 
                                    <strong> Version Control</strong>
                                    <p>
                                    Git
                                    </p>
                                </li>
                            </ul>

                        <h1 className="pt4">Education</h1>
                        <ul id="skills">
                            <li> 
                                <strong> B.S. Computer Science</strong>
                                <p>
                                Oregon State University, 2018-Present
                                </p>
                            </li>
                            <li> 
                                <strong>B.S. Biology</strong>
                                <p>Lehigh University, 2011-2015</p>
                            </li>
                        </ul>
                </section>
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

export default Resume;