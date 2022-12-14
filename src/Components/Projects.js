import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from 'react-bootstrap/Spinner';

function ProjectDetails() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const FetchProjects = async () => {
        const fetchProjects = await fetch(`https://rory-site-backend.herokuapp.com/projects`);
        const projects = await fetchProjects.json();
        setProjects(projects)
        setLoading(true)
    }

    function FukHeroku() {
        setTimeout(function(){document.getElementById('heroku').innerHTML = "If you see this message, I have ran out of time on Heroku. Student life."}, 6000)
    }

    useEffect(() => {
        AOS.init({duration: 2000});
        FetchProjects();
    }, [])

  return (
    <div className="project-page-title">
        <div className="project-page-title" >
            <h1><u>Completed Projects</u></h1>
        </div>
       {loading ? projects.map((project) => (
        <Link to={project._id} key={project._id} style={{ textDecoration: 'none' }} data-aos="fade-up">
            <div className="project-entries">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-p"><span>Class: </span>{project.class}</p>
                <p><span>Date: </span>{project.date}</p>
            </div>
            </Link>
       )) : (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>)}
    </div>
  );
}

export default ProjectDetails;
