import React,{useState} from 'react';
import './App.css';
import Numero from './componentes/Numero'



export default function App(){

  const[num,setNum] = useState(115);


  return (
    <>
      <p>Valor do STATE: {num}</p>
    
      <Numero num={num} setNum={setNum}/>
    </>
    
  )
}
