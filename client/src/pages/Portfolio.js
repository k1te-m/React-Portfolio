import React, { useEffect } from "react";
import API from "../utils/API";

function Portfolio() {

  const getRepos = () => {
    API.getRepos().then(function(response) {
      console.log(response);
    })
  }
  useEffect(() => {
    getRepos();
  })

  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col">
            {}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;