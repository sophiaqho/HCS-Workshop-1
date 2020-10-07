import React from "react";
import "./About.css";
import CutePic from "../../assets/me.png";


function DetailItem(props) {
  return(
    <div 
    onClick= {() => {
      props.setActiveFacts(props.description)
    }}
    className="facts-item">
      <h3>{props.title}</h3>
    </div>
  )
}

export default function AboutScreen() {
  const[activeFacts, setActiveFacts] = React.useState();
  return (
    <div className="screen-background">
      <div className="intro-item">
          <h1>Hi! My name is Sophia Ho. Welcome to my website!</h1>
          <h2>CS @ Harvard, 2023</h2>
        </div>
      <div className="intro-background">
        <div className="intro-item">
          <img className="intro-picture" src={CutePic}></img>
        </div>
        <div className= "facts-background">
          <DetailItem className = "facts-item"
            title="Click here to see more fun facts!"
            description= "I am on the women's tennis team at Harvard! I am from Vancouver, Canada."
            setActiveFacts={setActiveFacts}
          ></DetailItem>
          <div className="facts-item">
            {activeFacts}
          </div>
        </div>
      </div>
    </div>
  );
}
