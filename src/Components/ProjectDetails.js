import '../App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {

    const [project, setProject] = useState({});
    const { id } = useParams();

    const FetchProject = async () => {
        const fetchProject = await fetch(`https://rory-site-backend.herokuapp.com/projects/${ id }`);
        const project = await fetchProject.json();
        setProject(project)
    }

    useEffect(() => {
        FetchProject();
    }, [])

  return (
    <div className="project-details">
       <h1 className="project-details-title"><u>{project.title}</u></h1>
       <img src={project.img} alt="project-image" className="project-details-image"/>
       <p className="project-details-p">Class: {project.class}</p>
       <p className="project-details-p">Completion Date: {project.date}</p>
       <h2 className="project-details-description">{project.description}</h2>
       <p className="project-details-link-p">Link to project:</p><a href={project.linkToProj} target="_blank" className="project-details-a">{project.linkToProj}</a>
    </div>
  );
}

export default ProjectDetails;
