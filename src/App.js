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
          {/* <div className="changeview">
              <Board id="board-1" className="board">
                <Card id="card-1" draggable="true" AllowDragDropCopy="true" className="card"> <p>card one</p></Card>
              
                <Card id="card-2" draggable="true" className="card"> <p>card two</p></Card>
              </Board>
              <Board id="board-2" className="board">
                <Card id="card-3" draggable="true" className="card"> <p>card 3</p></Card>
              
                <Card id="card-4" draggable="true" className="card"> <p>card 4</p></Card>
              </Board>
              </div> */}

              <MidArea track={data => b(data) }
          dia={data => d(data)}
          rotate={data => f(data)} />

              
        </div>

        
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
