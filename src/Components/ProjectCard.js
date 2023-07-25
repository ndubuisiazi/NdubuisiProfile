// ProjectCard.js
import React from 'react';
import '../style/App.css';

function ProjectCard({image, title, summary}) {
  return (
    <div className="project-card">
      <img src={image} alt="Project"/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <button className="download-button">View Project</button>
    </div>
  );
}

export default ProjectCard;
