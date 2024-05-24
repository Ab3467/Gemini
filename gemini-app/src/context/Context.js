import React, { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input,setInput] = useState("")
  const [recentPrompt,setRecentPrompt] = useState("")
  const [prevPrompt,setPrevPrompt] = useState("")
  const [showresult,setShowResult] = useState("")

  const onSent = async (prompt) => {
    const response = await run(prompt);
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
