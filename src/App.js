import React ,{ useState,useEffect} from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";



export default function App() {
  const[a,b]= useState({x:0,y:0});
  const[c,d]= useState(false);
  const[e,f]= useState(0);
  const[g,h]= useState("");
  const[show,setShow]= useState(true);

  const [dragId, setDragId] = useState();
  
 

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };



  useEffect(()=>{
    console.log("tada");
  },[a,c]);
  
  useEffect(()=>{
    console.log("tadaaa2");
  },[a]);
  

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar 
          track={data => b(data) }
          dia={data => d(data)}
          rotate={data => f(data)}
          disp={data => h(data)}
          show={data =>setShow(data)}
          />
          
</div>
              <MidArea 
              track={data => b(data) }
          dia={data => d(data)}
          rotate={data => f(data)}
          disp={data => h(data)}
          show={data =>setShow(data)} />

              
        

        
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea 
          pos={a}
          dialog={c}
          rot={e}
          disp={g}
          show={show}
          />
        </div>
      </div>
    </div>
  );
}
