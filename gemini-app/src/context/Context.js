import { createContext } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

const onSent = async(prompt)=>{
    await run(prompt)
}

onSent("What is react-js")
const ContextValue = {

}

return (
    <Context.Provider value={ContextValue}>
        {props.childern}
    </Context.Provider>
)
} 

export default ContextProvider