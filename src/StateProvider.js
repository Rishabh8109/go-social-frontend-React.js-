import React , {useState , createContext} from 'react';
export const StateContext = createContext();

export function StateProvider({children}) {
   const [toggle, settoggle] = useState(true);
   const [show , setshow] = useState(false);
    
    return (
        <StateContext.Provider value={{toggle , settoggle , show , setshow}}>
             {children}
        </StateContext.Provider>
    )
}


