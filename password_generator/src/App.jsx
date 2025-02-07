import React, { useCallback, useState, useEffect,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null)

  const generator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUPWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*(){}[]~`_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyToBoard=useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{generator()},[length,numAllow,charAllow,generator])
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-6 my-8 text-gray-500 bg-gray-800">
        <h1 className="text-4xl text-center  font-bold font-momo text-white pt-4">
          Password Generator
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            value={password}
            className=" online-none w-full py-2 px-3 my-4 mx-auto bg-white rounded-l-lg"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button 
          className=" cursor-pointer outline-none bg-purple-400 text-white px-3 py-2 shrink-0 rounded-r-lg"
          onClick={copyToBoard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 text-white ">
          <div className="flex items-center gap-x-1 my-6">
            <input
              
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className="mr-2">Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={numAllow}
              className="cursor-pointer"
              onChange={()=>{setNumAllow(e=>!e)}}
              id="numbersallowed"
            />
              <label htmlFor="numbersallowed" className="mr-2">Numbers</label>
              <input
              type="checkbox"
              defaultChecked={charAllow}
              className="cursor-pointer"
              onChange={()=>{setCharAllow(e=>!e)}}
              id="charsallowed"
            />
              <label htmlFor="charsallowed" className="mr-2">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
