"use client"
import { useEffect } from 'react';
// import { renderizador } from './general/functions';
import { montarCena } from './cena';

const inicializar = () => {
   
}

export const CanvasConstructor = () => {
    useEffect(()=>{
        inicializar()
        montarCena()
        
    },[])
return (<>asdf</>)
}
