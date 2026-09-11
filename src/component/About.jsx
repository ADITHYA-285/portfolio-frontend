function About() {
    return (
        <section id="about" className="about">

            <div className="about-container">

                <div className="about-left">

                    <p className="section-label">ABOUT ME</p>

                    <h2>
                        Building ideas into
                        <span> real applications.</span>
                    </h2>

                    <p className="about-text">
                        I am a passionate developer interested in building
                        full-stack web applications and continuously improving
                        my problem-solving and development skills.
                    </p>

                    <p className="about-text">
                        I enjoy turning ideas into functional and user-friendly
                        applications while learning new technologies and
                        improving my development skills.
                    </p>

                </div>


                <div className="about-right">

                    <div className="about-card">
                        <div className="about-icon">⚡</div>

                        <div>
                            <h3>Full-Stack Development</h3>
                            <p>
                                React, Node.js, Express.js and MySQL
                            </p>
                        </div>
                    </div>


                    <div className="about-card">
                        <div className="about-icon">💡</div>

                        <div>
                            <h3>Problem Solving</h3>
                            <p>
                                Java, Python and strong programming fundamentals
                            </p>
                        </div>
                    </div>


                    <div className="about-card">
                        <div className="about-icon">🚀</div>

                        <div>
                            <h3>Always Learning</h3>
                            <p>
                                Exploring new technologies and building projects
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;