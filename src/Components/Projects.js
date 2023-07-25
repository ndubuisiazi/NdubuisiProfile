// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="project-bar">
      <div className="project-container">
      <ProjectCard 
        image={`${process.env.PUBLIC_URL}/lock.webp`} 
        title="JavaScript: Password Generator" 
        summary="This project involves creating a random password generator application to help users generate secure passwords based on their selected criteria. "
      />
      <ProjectCard 
        image={`${process.env.PUBLIC_URL}/vendee.png`} 
        title="MERN Stack Application" 
        summary="This application is a React-based web app that implements a multi-step form with a stepper component for a seamless user experience. It allows users to add and manage machine services, select machine types, and enter their address information. The application leverages MongoDB for data storage and is built using modern web development practices."
      />
      
      {/* Add more ProjectCard components here as needed */}
    </div>
    </div>
  );
}

export default Projects;
