import React, { useEffect, useState } from "react";
import API from "../utils/API";
import RepoLink from "../components/RepoLink";

function Portfolio() {
  const [repoState, setRepoState] = useState([])
  let repos = [];

  const getRepos = () => {
    API.getRepos().then(function(response) {
      repos = response.data;
      setRepoState(repos);
    })
  }
  useEffect(() => {
    getRepos();
  }, [])


  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col">
            {repoState.map(repo => {
              return (
                <RepoLink value={repo} key={repo._id}/>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;