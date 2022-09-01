import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectDetails() {

    const [projects, setProjects] = useState([]);


    const FetchProjects = async () => {
        const fetchProjects = await fetch(`https://rory-site-backend.herokuapp.com/projects`);
        const projects = await fetchProjects.json();
        setProjects(projects)
        
        console.log(projects)
    }

    useEffect(() => {
        FetchProjects();
    }, [])

  return (
    <div>
        <div className="project-page-title">
            <h1><u>Completed Projects</u></h1>
        </div>
       {projects.map((project) => (
        <Link to={project._id} style={{ textDecoration: 'none' }}>
            <div className="project-entries">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-p"><span>Class: </span>{project.class}</p>
                <p><span>Date: </span>{project.date}</p>
            </div>
            </Link>
       ))}
    </div>
  );
}

export default ProjectDetails;
