import { useEffect, useState } from "react";

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/projects")
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });

    }, []);

    return (
        <section id="projects" className="projects">

            <h2>Projects</h2>

            <div className="project-container">

                {projects.map(project => (
                    <div className="project-card" key={project.id}>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <span>{project.technologies}</span>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;