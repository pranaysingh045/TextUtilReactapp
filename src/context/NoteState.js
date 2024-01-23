import { useState } from "react";
import Notecontext from "./Notecontext";

const NoteState=(props)=>{

    const s1={
        'name':'pranay',
        'Age':12
    }
    const [change,setChange]=useState(s1)
    const update=()=>{
        setTimeout(() => {
            setChange({'name':'Singh pranay','Age':24})
            
        }, 1000);
    }

    return(
        <Notecontext.Provider value={{update,change}}>
            {props.children}

        </Notecontext.Provider>
    )


}
export default NoteState;