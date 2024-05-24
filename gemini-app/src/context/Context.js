import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) =>{


const ContextValue = {

}

return (
    <Context.Provider value={ContextValue}>
        {props.childern}
    </Context.Provider>
)
} 

export default ContextProvider