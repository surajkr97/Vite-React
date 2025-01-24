import { useState } from "react";

// import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={()=>setColor('Red')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: 'red'}}>Red</button>
            <button
            onClick={(()=> setColor('Green'))} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: 'Green'}}>Green</button>
            <button
            onClick={()=> setColor('Blue')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: 'Blue'}}>Blue</button>
            <button
            onClick={()=> setColor('Black')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: 'Black'}}>Black</button>
            <button
             onClick={()=> setColor('Orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: 'Orange'}}>Orange</button>
            <button
             onClick={()=> setColor('Purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: 'Purple'}}>Purple</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
