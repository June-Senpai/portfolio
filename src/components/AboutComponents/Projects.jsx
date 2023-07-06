import React from "react";

const Projects = () => {
  const projects = [
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" },
    { name: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: "300px",
            margin: "10px",
          }}
        >
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
