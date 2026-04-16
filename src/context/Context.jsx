import React, { createContext, useState } from 'react';

export const FriendContext = createContext()

const Context = ({children}) => {
 
    const [datas, setData]= useState([])
  
    let value = {
        datas,
        setData
    }
    return <FriendContext.Provider value={value}>
        {children}
    </FriendContext.Provider>
   
};

export default Context;