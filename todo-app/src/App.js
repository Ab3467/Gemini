import React from "react";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/contextapi";


function App() {
  return (
    <>
    <counterContext.Provider value={count}>
    <Navbar/>
    </counterContext.Provider>
    </>
  );
}

export default App;
