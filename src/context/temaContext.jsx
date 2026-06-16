import {createContext, useState} from 'react';

const TemaContext = createContext();

function TemaProvider({children}){
    const [tema, setTema] = useState('light');

    return (
        <TemaContext.Provider value={{tema, setTema}}>
            {children}
        </TemaContext.Provider>
    );
}

export {TemaProvider, TemaContext};
