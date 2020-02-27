import React from 'react'
import './Portfolio.css'

const Portfolio= () => {
    return (
        <div>
        <main className="portfolioMain">
            <h1>Some projects I have created.</h1>
            <section id="projects">
                <div className="project bb" id="avgrent">
                    <h2>Advent of Code 2019</h2>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/157/157933.svg" width="16" height="16"/>
                    </svg>
                    Series of daily programming challenges designed to test coding knowledge and skills.</p>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/25/25627.svg" width="16" height="16"/>
                    </svg>
                    Python
                    </p>
                    <p>
                        <a className="blue dim link" href="https://github.com/KevinJBenoit/advent_of_code_2019" target="_blank" rel="noopener noreferrer">
                            <svg className="pt2" width="15" height="15">
                                <image href="https://git-scm.com/images/logos/logomark-black@2x.png" width="18" height="18"/>
                            </svg>
                            View on GitHub
                        </a>
                    </p>
                </div>
                <div className="project bb" id="avgrent">
                    <h2>Average Rental Cost</h2>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/157/157933.svg" width="16" height="16"/>
                    </svg>
                    A Python Web Scraper for calculating rental prices based on home type/location</p>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/25/25627.svg" width="16" height="16"/>
                    </svg>
                    Python
                    </p>
                    <p>
                        <a className="blue dim link" href="https://github.com/KevinJBenoit/Average-Rent" target="_blank" rel="noopener noreferrer">
                            <svg className="pt2" width="15" height="15">
                                <image href="https://git-scm.com/images/logos/logomark-black@2x.png" width="18" height="18"/>
                            </svg>
                            View on GitHub
                        </a>
                    </p>
                </div>
                <div className="project bb" id="rxdata">
                    <h2>Rx Database</h2>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/157/157933.svg" width="16" height="16"/>
                    </svg>
                    Another Python Web Scraper for categorizing information on the top drugs in the US</p>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/25/25627.svg" width="16" height="16"/>
                    </svg>
                    Python, SQL
                    </p>
                    <p>
                        <a className="blue dim link" href="https://github.com/KevinJBenoit/Rx_Database" target="_blank" rel="noopener noreferrer">
                            <svg className="pt2" width="15" height="15">
                                <image href="https://git-scm.com/images/logos/logomark-black@2x.png" width="18" height="18"/>
                            </svg>
                        View on GitHub
                        </a>
                    </p>
                </div>
                <div className="project" id="game">
                    <h2>Archaelogy Hunt Game</h2>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/157/157933.svg" width="16" height="16"/>
                    </svg>
                    A simple game. Dig up the ancient artifact and avoid the mummy</p>
                    <p>
                    <svg className="pt2" width="15" height="13">
                            <image href="https://image.flaticon.com/icons/svg/25/25627.svg" width="16" height="16"/>
                    </svg>
                    C++
                    </p>
                    <p>
                        <a className="blue dim link" href="https://github.com/KevinJBenoit/ArchaeologyHunt" target="_blank"  rel="noopener noreferrer">
                            <svg className="pt2" width="15" height="15">
                                <image href="https://git-scm.com/images/logos/logomark-black@2x.png" width="18" height="18"/>
                            </svg>
                            View on GitHub
                        </a>
                    </p>
                </div>
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

export default Portfolio;