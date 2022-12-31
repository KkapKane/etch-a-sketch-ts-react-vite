import {useRef, useState} from 'react'

interface Props  {
size: number;
isDown: boolean;
canvasColor: string;
currentColor: string | undefined;

}


export default function Box({size, isDown, canvasColor, currentColor}: Props){
    let boxSize = `${482 / size}px`
 
   

const myRefs: any = useRef(null)




    return (
      <div
        className={` border border-black text-center `}
        
        ref={myRefs}
        draggable
        onDragStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseEnter={() =>
          isDown ? (myRefs.current.style.backgroundColor = currentColor) : null
        }
        style={{ width: boxSize, height: boxSize, backgroundColor:canvasColor }}
      ></div>
    );
}