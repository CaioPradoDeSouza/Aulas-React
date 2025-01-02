import React, {useState} from 'react';
import './App.css';

import LedVerde from './componentes/imgss/led_verde.png'
import LedVermelho from './componentes/imgss/led_vermelho.png'

export default function App(){

  const [ligado, setLigado]=useState(true);

  return (
    <>
      <img style={{width:'100px'}} src={ ligado?LedVerde:LedVermelho}/>
      <button onClick={()=>setLigado(!ligado)}>{ ligado?'Desligar':'Ligar' }</button>
    </>
    
  );
}
