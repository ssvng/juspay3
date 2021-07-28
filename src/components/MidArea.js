import React, { useState,useRef,useEffect } from "react";

export default function MidArea(props) {

  
  const node = useRef(0);

  const [count,setCount] = useState({x:0,y:0});
  const check= useRef(false);
  const rot= useRef(0);

   const caller2 = () =>{
    var walk = Number(document.getElementById("text1").value);
    setCount({x:count.x+walk,y:count.y+0});
    node.current = node.current + walk;
    props.track({x:node.current+walk,y:count.y+0});
    

   }
   const checkClick2 = () =>{
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

   const rotation2 = (type) => {
    var turn = Number(document.getElementById("text2").value);
    var turn2 = Number(document.getElementById("text3").value);

     if(type == "clock")
      rot.current = rot.current +turn2;
     else
      rot.current = rot.current -turn;
     props.rotate(rot.current);
   }

   const show2 = (bool) =>{
    props.show(bool);
  }

  useEffect(()=>{
    console.log("hello->");
    
  },[props.children]);

  function addListeners() {
    let buttons = document.getElementsByClassName("clickButton");
    for(var i=0;i<buttons.length;i++) {

      switch(buttons[i].id) {
        case "but1":
          buttons[i].onclick = function() {
       
            caller2();
         }
         break;

        case "but2":
          buttons[i].onclick = function() {
       
            rotation2("anticlock");
         }
         break;
         case "but3":
          buttons[i].onclick = function() {
       
            rotation2("clock");
         }
         break;
         case "but4":
          buttons[i].onclick = function() {
       
            checkClick2();
         }
         break;
         case "but5":
          buttons[i].onclick = function() {
       
            show2(true);
         }
         break;
         case "but6":
          buttons[i].onclick = function() {
       
            show2(false);
         }
         break;

         default :
         buttons[i].onclick = function() {
       
          alert("hello world");
       }
       break;
      }




      // if (buttons[i]?.id === "but1"){
      //  buttons[i].onclick = function() {
       
      //     alert("step ahead button clicked");
      //  }
      // }
      //     else{
      //     buttons[i].onclick = function() {
       
      //       alert("hola amigo");
      //    }
          
      //  }
       
    }
  }


  // useEffect(()=>{
  //   window.onload = addListeners();


  // },[]);
  

   const clickHandler = (e) =>{
      console.log(e.target.innerHTML);
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
    addListeners();
    //e.target.parentElement.firstChild.appendChild(cln1)
    //e.target.parentElement.lastChild.appendChild(cln2)
    
    // console.log("[vang]");
    var list = document.querySelector("#but1");
    list.onclick(()=> console.log("yoyo"));
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
