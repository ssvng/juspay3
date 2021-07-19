import React, { useState,useRef } from "react";
import Icon from "./Icon";

export default function Sidebar(props) {

  const [count,setCount] = useState({x:0,y:0});
  const check= useRef(false);
  const rot= useRef(0);

   const caller = () =>{
    var walk = Number(document.getElementById("text1").value);
    setCount({x:count.x+walk,y:count.y+0});
    props.track(count);
    

   }
   const checkClick = () =>{
      if (check.current === false)
      {
        check.current = true;
      }
      else
      check.current = false;
      var walk = document.getElementById("text4").value;
      props.dia(check.current);
      props.disp(walk)
   }

   const rotation = (type) => {
    var turn = Number(document.getElementById("text2").value);
    var turn2 = Number(document.getElementById("text3").value);

     if(type == "clock")
      rot.current = rot.current +turn2;
     else
      rot.current = rot.current -turn;
     props.rotate(rot.current);
   }

   const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('card_id',target.id);
   
    
    }

    const dragOver = e =>{
        e.stopPropagation();
    }


    const show = (bool) =>{
      props.show(bool);
    }


  
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div  className="font-bold"> {"Events"} </div>
      <div id='10' draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button>When
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        { }</button>
      </div>
      <div id='11' draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button>When this sprite clicked</button>
      </div>
      <div className="font-bold"> {"Motion"} </div>
      
      
      <div id='2' draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button id="but1" onClick ={() =>{
          caller()
          }} >Move steps</button><input id="text1" type="text" placeholder="10" defaultValue = "10"  style={{width:"20px", color:"black"}}></input>
      </div>
      
      
      
      <div id="3" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <button onClick ={ () => {rotation("anticlock")}} > degrees</button><input id="text2" type="text" placeholder="15" defaultValue = "15" style={{width:"20px", color:"black"}}></input>
      </div>
      <div id="4" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <button onClick ={() =>{rotation("clock")}} >degrees</button><input id="text3" type="text" placeholder="15" defaultValue = "15"style={{maxWidth:"50px", color:"black"}}></input> 
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div id="5" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        
        <button onClick ={() =>{checkClick()}} >Say <input id="text4" type="text" placeholder="Hello!" defaultValue="Hello!" style={{maxWidth:"50px", color:"black"}} onClick="none"></input></button>
      </div>
      <div id="6" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        
        <button onClick ={() =>{show(true)}} >Show </button>
      </div>
      <div id="7" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        
        <button onClick ={() =>{show(false)}} >Hide</button>
      </div>
      
      <div className="font-bold"> {"Controls"} </div>
      <div id="8" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        
        <Icon name="redo" size={15} className="text-white mx-2" />
        <button>Wait 1 second</button>
      </div>
      <div id="9" draggable="true" onDragStart={dragStart}
            onDragOver={dragOver} className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        
        <Icon name="redo" size={15} className="text-white mx-2" />
        <button>wait until</button>
      </div>
    </div>
    
  );
}
