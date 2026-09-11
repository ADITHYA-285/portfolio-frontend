import { useEffect, useState } from "react";

function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/skills")
            .then(response => response.json())
            .then(data => {
                setSkills(data);
            })
            .catch(error => {
                console.error("Error fetching skills:", error);
            });

    }, []);

    return (
        <section id="skills" className="skills">

            <h2>My Skills</h2>

            <div className="skills-container">

                {skills.map(skill => (
                    <div className="skill-card" key={skill.id}>

                        <h3>{skill.name}</h3>

                        <p>{skill.category}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Skills;