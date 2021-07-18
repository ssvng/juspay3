import React , {useEffect, useState,useRef} from "react";
import CatSprite from "./CatSprite";
import Draggable from "react-draggable";
import dialog from "./dialog.css";
import {motion} from "framer-motion";

export default function PreviewArea(props) {
  const [position,setPosition] = useState({x:0,y:0});
  const pos = props.pos;
  const rot = props.rot;
  const hide =false;
  const trackPos =(data) => {
    setPosition({x:data.x,y:data.y});
  };

  const eventControl = (event, info) => {
    console.log('Event name: ', event.type);
    console.log(event, info);
  }

  useEffect(()=>{
   setPosition({x:props.pos.x,y:props.pos.y})
   trackPos(position);
  },[props.pos]);

  const template = ({ rotate, x ,y})=> {
    return `rotate(${rotate}) translateX(${x}) translateY(${y})`
  }

  
  return (
    <Draggable 
    onDrag = {(e,data) => trackPos(data)}
    onStart={eventControl}
    onStop={eventControl}
    defaultPosition={{x: 150, y: 150}}
    >
    <div style={props.show===false ? {visibility:"hidden"}:{visibility:"visible"}}>
    <motion.div
    transformTemplate={template}
    style={{ rotate: 0, x: pos.x ,y: pos.y }}
  >
    {props.dialog === true ? <div className="oval-thought" ><h2 style={{color:'black'}}>{props.disp}</h2></div>: <div className="hide"></div>}
    <motion.div
    transformTemplate={template}
    animate={{position: "fixed"}}
    style={{ rotate: rot, x: pos.x ,y: pos.y }}
    
  >
    
      <CatSprite   />
      {/* <div>
        x:{position.x.toFixed(0)},y:{position.y.toFixed(0)}
      </div> */}
      
      </motion.div>
      </motion.div>
    </div>
    </Draggable>
  );
}
