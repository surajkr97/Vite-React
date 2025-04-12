import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";


const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName,password})
    }
    

  return (
    <div className="flex flex-col gap-5">
      <div className="text-4xl flex justify-center">Login</div>
      <input
        onChange={(e)=>setUserName(e.target.value)}
        type="text"
        value={userName}
        placeholder="Username"
        className="p-1 bg-white rounded-md"
      />
      <input
        onChange={(e)=>setPassword(e.target.value)}
        type="password"
        value={password}
        placeholder="Password"
        className="p-1 bg-white rounded-md"
      />
      <button onClick={handleSubmit} className="p-1 bg-blue-500 rounded-md hover:bg-blue-800 hover:text-white">
        Submit
      </button>
    </div>
  );
};

export default Login;
