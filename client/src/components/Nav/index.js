import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Kevin Miller</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/k1te-m" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/kmiller29/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://drive.google.com/file/d/1PJlN82yMOQarqMybW3sqvzhSk-l7f5mk/view"
            target="_blank" rel="noreferrer">Resume</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)
}

export default Nav;