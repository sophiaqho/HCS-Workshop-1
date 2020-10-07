import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Sophia Ho</h1>
        <div className="info-bar">
          <p className="info-item">sho@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
          className="info-link"
          to={{pathname: 'https://www.instagram.com/sophiaqho/'}}
          target="_blank"
          >
            instagram
          </Link>
          <Link 
          className="info-link"
          to={{pathname: 'https://open.spotify.com/user/sophiagho?si=jIGJOZI-QTKqb1VFhR3L6A'}}
          target="_blank"
          >
            spotify
          </Link>
          <Link 
          className="info-link"
          to={{pathname: 'https://www.linkedin.com/in/sophia-ho-34a198156/'}}
          target="_blank"
          >
            linkedin
          </Link>
        </div>
      </div>
      <div className="nav-background">
      <Link className="nav-link" to={{pathname: '/about'}}>
            About
        </Link>
        <Link className="nav-link" to={{pathname: '/experience'}}>
            Experience
        </Link>
        <Link className="nav-link" to={{pathname: '/education'}}>
            Education
        </Link>
        <Link className="nav-link" to={{pathname: '/projects'}}>
            Projects
        </Link>
      </div>
    </>
  );
}
