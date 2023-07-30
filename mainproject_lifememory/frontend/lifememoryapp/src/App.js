import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from "./assets/logo.png";


function App() {
  const [cookies] = useCookies(["jwtforlifememory"]);
  const navigate = useNavigate();

  useEffect(()=>{
    if(cookies.jwtforlifememory === undefined){
      setTimeout(()=>{
        navigate("/login");
      },3000);
    }else{
      setTimeout(()=>{
        navigate("/main");
      },3000);
    }
  },[]);


  return (
    <div className="App w-full h-full flex justify-center items-center flex-col">
      <img src={Logo} className="w-2/6 md:w-1/6" alt="logo"/>
    </div>
  );
}

export default App;
