import React from "react";
import Main from "./components/Main/Main";
import Side from "./components/Side/Side";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <Side />
      <Main />
    </ContextProvider>
  );
}

export default App;
