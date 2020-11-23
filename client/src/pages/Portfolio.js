import React from "react";
import API from "../utils/API";

function Portfolio() {
  API.getRepos().then(function(response) {
    console.log(response);
  });

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