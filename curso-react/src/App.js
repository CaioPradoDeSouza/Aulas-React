import React from 'react';
import Header from './componentes/Header';
import Corpo from './componentes/Corpo';
import Dados from './componentes/Dados';


export default function App(){

  const nm = 'caio prado'

  return (
    <>
      <Header />
      <Corpo  />
      <Dados  Nome= {nm} Idade='28 anos' Sexo='masculino'/>
    </>
    
  );
}
