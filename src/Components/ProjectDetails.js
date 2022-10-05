import '../App.css';
import React, { useState, useEffect } from 'react';
import { MDBCarousel,MDBCarouselItem } from 'mdb-react-ui-kit';
import Spinner from 'react-bootstrap/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';

function ProjectDetails() {

  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({});
  const { id } = useParams();

  const FetchProject = async () => {
    const fetchProject = await fetch(`https://rory-site-backend.herokuapp.com/projects/${id}`);
    const project = await fetchProject.json();
    setLoading(true)
    setProject(project)
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
    FetchProject();
  })

  return (
    <div className="project-page-title">
      {loading ? <div className="project-details">
        <h1 className="project-details-title"><u>{project.title}</u></h1>
        <MDBCarousel showControls showIndicators>
      <MDBCarouselItem width={900} height={500}
        className='w-100 d-block'
        itemId={1}
        src={project.img}
        alt=''
      />
      <MDBCarouselItem width={900} height={500}
        className='w-100 d-block'
        itemId={2}
        src={project.img2}
        alt=''
      />
      <MDBCarouselItem width={900} height={500}
        className='w-100 d-block'
        itemId={3}
        src={project.img3}
        alt=''
      />
    </MDBCarousel>
        <p className="project-details-p">Class: {project.class}</p>
        <p className="project-details-p">Completion Date: {project.date}</p>
        <h2 className="project-details-description">{project.description}</h2>
        <p className="project-details-link-p">Link to project:</p><a href={project.linkToProj} target="_blank" rel="noreferrer" className="project-details-a">{project.linkToProj}</a>
      </div> : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
    </div>
  );
}

export default ProjectDetails;
