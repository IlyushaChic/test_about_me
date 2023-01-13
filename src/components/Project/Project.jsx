import React from "react";
import "./project.css";

const Project = ({ title, technologies, teg }) => {
  return (
    <div className="project__body">
      <div className="project__body-content">
        <div className="project__body-content_description">{title}</div>
        <div className="project__body-content_technologies">Технологии:{technologies}</div>
        <div className="project__body-content_id">#{teg}</div>
      </div>
    </div>
  );
};

export default Project;
 