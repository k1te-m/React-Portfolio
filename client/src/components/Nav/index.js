import React from "react";

const Nav = () => {

return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Kevin Miller</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/k1te-m" target="_blank">GitHub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.linkedin.com/in/kmiller29/" target="_blank">LinkedIn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://drive.google.com/file/d/1PJlN82yMOQarqMybW3sqvzhSk-l7f5mk/view"
            target="_blank">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
      </ul>
    </div>
  </nav>
)
}

export default Nav;