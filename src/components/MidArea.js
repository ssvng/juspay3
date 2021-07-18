import React, { useState,useRef,useEffect } from "react";

export default function MidArea(props) {

  const [count,setCount] = useState({x:0,y:0});
  const check= useRef(false);
  const rot= useRef(0);
  const node = useRef();
  useEffect(()=>{
    console.log("hello->");
  },[props.children])
   const caller = () =>{
    setCount({x:count.x+10,y:count.y+0});
    props.track(count);

   }
   const checkClick = () =>{
      if (check.current === false)
      {
        check.current = true;
      }
      else
      check.current = false;

      props.dia(check.current);
   }

   const rotation = (type) => {
     if(type == "clock")
      rot.current = rot.current +15;
     else
      rot.current = rot.current -15;
     props.rotate(rot.current);
   }

  const drop = event =>{
    
    // e.preventDefault();
    const card_id = event.dataTransfer.getData('card_id');
    
    const card =document.getElementById(card_id);
    //card.style.display = 'block';
    //node.current = card;
     var cln1 = card.cloneNode(true);
    // var cln2 = card.cloneNode(true);
    //e.target.nextSibling.appendChild(card);
    //node.current.id= Number(cln1.id)+100;
    cln1.id = Number(cln1.id)+100;
    event.target.appendChild(cln1);
    //e.target.parentElement.firstChild.appendChild(cln1)
    //e.target.parentElement.lastChild.appendChild(cln2)
    
    // console.log("[vang]");
}

const dragOver = e =>{
    e.preventDefault();
    return false;
}

  return (
  
   <div id={props.id}
        className="dropbox"
        onDrop={drop}
        onDragOver={dragOver}
        width="800" height ="800"
        >
            
            
        </div>
         );
}
