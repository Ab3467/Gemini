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



  const delayPara = (index,nextWord) =>{
   setTimeout(function() {
    setResultdata(prev=>prev+nextWord);
   }, 75*index);
  }

  const newChat = ()=>{
    setloading(false)
    setShowResult(false)
  }
  

  const onSent = async (prompt) => {
    setResultdata('')
    setloading(true)
    setShowResult(true)
    let response;
    if(prompt !== undefined){
      response = await run(prompt)
      setRecentPrompt(prompt)
    } 
    else{
      setPrevPrompt(prev=>[...prev,input])
      setRecentPrompt(input)
      response = await run(input)
    }
    let responseArray = response.split("**")
    let newResponse = "";
    for(let i=0; i< responseArray.length;i++){
      if(i === 0 || i%2 !== 1){
        newResponse += responseArray[i];
      }
      else{
        newResponse += "<b>" + responseArray[i] + "</b>"
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let  newresponseArray = newResponse2.split(" ");
    for(let i=0;i<newresponseArray.length;i++){
      const nextWord = newresponseArray[i];
      delayPara(i,nextWord+ " ")
    }
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
    resultData,
    newChat
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
