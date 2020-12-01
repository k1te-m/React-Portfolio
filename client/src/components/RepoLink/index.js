import React from "react";



const RepoLink = (props) => {
    return (
        <a href={`https://www.github.com/${props.value.github}/${props.value.name}`} target="_blank" rel="noreferrer" ><img src={props.value.imageURL} alt={props.value.name} className="repoImg mt-3 mb-1 ml-1 mr-1" /></a>
    )
}

export default RepoLink;