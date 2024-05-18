import React from "react";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <div className=" bg-violet-100 p-5 rounded-md my-5 mx-auto container">
         <h1 className=" text-xl font-bold">Your Todos</h1>
      </div>
    </>
  );
}

export default App;
