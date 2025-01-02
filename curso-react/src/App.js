import React, {useState} from 'react';

import Led from './componentes/Led'

export default function App(){

  const [ligado, setLigado] = useState(true);

  const cancelar=(obj)=>{
    return obj.preventDefault();
  }

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado} />
      <a
        href='http://youtube.com/cfbcursos'
        target='_blank'
        onClick={(e)=>cancelar(e)}      
      >
        CFB CURSOS
      </a>
    </>
  );
}
