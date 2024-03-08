import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await axios.get('https://api.github.com/users/Temeraire452/repos');
          setProjects(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
  
      fetchProjects();
    }, []); 
  
    return (
      <div>
        <nav>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="cv.html">CV</a></li>
            <li><a href="portfolio.html" className="active">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
  
        <h1>Projects</h1>
  
        <div id="github-projects">
          <h2>My GitHub projects</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  <strong>{project.name}</strong>: {project.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default PortfolioPage;