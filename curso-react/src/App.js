import React, { useState } from 'react';
import Globais from './componentes/Globais';
import Info from './componentes/Info';



export default function App() {

  const [resumo, setResumo]=useState(Globais.resumo)

  const gravarResumo=()=>{
    Globais.resumo=resumo
  
  }

  const verResumo=()=>{
    alert(Globais.resumo)
  }

  return (
    <>
      <Info />


      <p>{'Canal: ' + Globais.canal}</p>

      <p>{'Curso: ' + Globais.curso}</p>

      <p>{'Ano: ' + Globais.ano}</p>
      <br/>
      <input type='text' value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
      <br/>
      <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
      <br/>
      <button onClick={()=>verResumo()}>Ver Resumo</button>
    </>
  );
}

