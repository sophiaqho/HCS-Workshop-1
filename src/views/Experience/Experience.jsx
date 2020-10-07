import React from "react";
import "./Experience.css";

function TimeLineItem(props){
  return(
    <div 
    onClick= {() => {
      props.setActiveTitle(props.company)
    }}
    className="timeline-item">
      <h1>{props.title}</h1>
    </div>
  )
}

export default function ExperienceScreen() {
  const[activeTitle, setActiveTitle] = React.useState("Click on a role to see the company!");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem title= "Engineer Fellow" 
          company ="Tang App 2020"
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem title= "Software Engineer"
          company ="Geomoji 2020"
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem title= "Tech Intern"
          company ="Recloseted 2019-2020"
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>          
        </div>
        <div className="highlight-background">
          <h1>
            {activeTitle}
          </h1>
        </div>
      </div>
    </div>
  );
}
