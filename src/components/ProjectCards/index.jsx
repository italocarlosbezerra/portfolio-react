import React from "react";
import "./styles.css";

function ProjectCards(props) {
   return (
      <div className="boxes">
         <a href={props.link} target="_blank">
            <img src={props.image} />
         </a>
      </div>
   );
}

export default ProjectCards;
