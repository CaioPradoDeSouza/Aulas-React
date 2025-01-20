import React,{useState} from 'react';
import Carro from './componentes/Carro.js';


export default function App() {
  const[carro, setCarro]=useState(true);
  const mostrarOcultarCarro=()=>{
    setCarro(!carro)
  }
  return (
    <>
        <h1>Componentes de Classe</h1>
        {carro?
        <Carro fator={1}/> : ''} 
        <button onClick={()=>mostrarOcultarCarro()}> 
                    Ocultar
        </button>
    </>    
  );
}

