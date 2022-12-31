import { useState, useRef, useEffect} from "react";
import { ChromePicker, GithubPicker } from "react-color";
import Box from "./Box";

function App() {
  let temp: number[] = [];
  let temp2: number[] = [];

  const [size, setSize] = useState(18);
  const [isDown, setIsDown] = useState(false);
  const [canvasColor, setCanvasColor] = useState("#fff");
  const [currentColor, setCurrentColor] = useState<string | undefined>("#000");
  const [showPicker, setShowPicker] = useState(false);
  const [showGitPicker, setShowGitPicker] = useState(false);
  const myContainer: any = useRef([]);

  function makeGrid(row: number, col: number) {
    temp = [];
    temp2 = [];
    for (let i = 0; i < row; i++) {
      temp.push(i);
    }
    for (let j = 1; j < col; j++) {
      temp2.push(j);
    }
  }

useEffect(()=>{
console.log(temp)
},[size])

  const clear = () => {
    if(canvasColor === '#fff'){

      setCanvasColor('#ffff')
    }
    else if (canvasColor === '#ffff'){

      setCanvasColor("#fff")
    }
    else if (canvasColor !== "#fff" || "#ffff"){
      setCanvasColor("#fff")
    }
    
  }


  makeGrid(size, size);

  return (
    <div className='App h-screen p-0 m-0  bg-green-100 flex flex-col'>
      <div className='h-1/6 bg-slate-500 text-white flex justify-center items-center text-5xl tracking-widest '>
        Etch-A-Sketch
      </div>

      <div className='flex flex-col justify-center items-center h-screen w-full border '>
        <div className='flex gap-4'>
          <p>{`${size} x ${size} `}</p>
        </div>

        <div
          className='flex  border border-black w-[482px] h-[482px] '
          draggable
          onDragStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseDown={() => setIsDown(true)}
          onMouseUp={() => setIsDown(false)}
        >
          {temp.map((t, i) => {
            return (
              <div>
                <Box
                  size={size}
                  isDown={isDown}
                  canvasColor={canvasColor}
                  currentColor={currentColor}
                  
                />
                {temp2.map((t2, i) => {
                  return (
                    <>
                      <Box
                       
                        size={size}
                        isDown={isDown}
                        canvasColor={canvasColor}
                        currentColor={currentColor}
                      />
                    </>
                  );
                })}
              </div>
            );
          })}
          
          {showPicker ? (
            <div className='flex'>
              <ChromePicker
                color={currentColor}
                onChange={(updatedColor) => setCurrentColor(updatedColor.hex)}
              />
            </div>
          ) : null}
          {showGitPicker ? (
            <GithubPicker
              color={canvasColor}
              onChange={(color) => setCanvasColor(color.hex)}
            />
          ) : null}
        </div>
        <div className='flex gap-12 p-3'>
          <div className=' border p-2 border-black bg-blue-300 text-slate-900 text-2xl'>
            <button onClick={() => setShowPicker((showPicker) => !showPicker)}>
              {" "}
              {showPicker ? " Close" : "Choose Brush Color"}
            </button>
          </div>
          <div className='flex border border-black p-2 justify-center bg-blue-300 text-slate-900 text-2xl'>
            <button onClick={() => setShowGitPicker(!showGitPicker)}>
              {showGitPicker ? "Close" : "Pick Canvas Color"}
            </button>
          </div>
        </div>
          <input
            type='range'
            max={50}
            onChange={(e) => setSize(e.target.valueAsNumber)}
          />
          <button onClick={()=> clear()} className="border p-2 border-black text-2xl bg-yellow-200  tracking-widest">Clear</button>
      </div>
    </div>
  );
}
export default App;
