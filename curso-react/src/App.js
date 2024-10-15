import React from 'react';
import Logo from './componentes/imgs/logo.avif';



export default function App(){

  const canal1=()=>{
    return 'https://www.youtube.com/c/CFBCursos'
  }

  const canal ='CFB cursos'

  const curso = 'REACT'

  return (
    <>
      <header>
        <h3>CFB CURSOS curso de REACT!</h3>
        
        <p>Canal: {canal}</p>
        
        <p>{'Curso: ' + curso}</p>
        
        <p>{canal1()}</p>
      </header>

      <section>
        <img src={Logo} alt="Logo do cachorro" />
        <img src='/img/cachorro.webp' alt="Imagem do cachorro" />
      </section>
    </>
    
  );
}
