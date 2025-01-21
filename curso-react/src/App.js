import React,{useState} from 'react';
import Carro from './componentes/Carro.js';



export default function App() {
  const[carro, setCarro]=useState(true);
  const mostrarOcultarCarro=()=>{
    setCarro(!carro)
  }
  return (
    <>
    </>    
  );
}

