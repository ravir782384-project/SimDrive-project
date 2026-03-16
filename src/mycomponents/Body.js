import React from "react";

function Body(props) {
  return (
    <div>
      <h2 style={{textAlign:"center",color:""}}>Name: {props.name} Hobby: {props.hobby} Program: {props.program}</h2>

    </div>
  );
}

export default Body;