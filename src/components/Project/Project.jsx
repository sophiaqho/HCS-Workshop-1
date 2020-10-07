import React from "react";
import "./Project.css";
import {Link} from 'react-router-dom';

export default function Project(props) {
  return (
    <Link to= {{pathname: props.link}}className="project-background"
    target= "_blank">
    <div className="projects-info"></div>
      <h1> {props.title} </h1>
  </Link>);
}
