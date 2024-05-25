import React, { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input,setInput] = useState("")
  const [recentPrompt,setRecentPrompt] = useState("")
  const [prevPrompt,setPrevPrompt] = useState([])
  const [showresult,setShowResult] = useState(false)
  const [loading,setloading] = useState(false)
  const [resultData,setResultdata] = useState([])
  

  const onSent = async (prompt) => {
    setResultdata('')
    setloading(true)
    setShowResult(true)

    const response = await run(input);
    setResultdata(response)
    setloading(false)
    setInput("")
  };

  const ContextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showresult,
    input,
    setInput,
    loading,
    resultData
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
