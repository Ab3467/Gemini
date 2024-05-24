import React, { createContext } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    const response = await run(prompt);
    console.log("API Response: ", response);
  };

  const ContextValue = {
    onSent,
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
