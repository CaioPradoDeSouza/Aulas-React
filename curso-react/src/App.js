import React, { useState } from 'react';


export default function App() {

  // const msglogin=()=>{
  //   return 'Usuário logado'
  // }

  // const msglogoff=()=>{
  //   return 'favor logar'
  // }

  // const cumprimento=()=>{
  //   const hora=new Date().getHours();
  //   if(hora>=0 && hora<13){
  //     return <p>Bom Dia!</p>
  //   }else if(hora >= 13 && hora <18){
  //     return <p>Boa Tarde!</p>
  //   }else{
  //     return <p>Boa Noite!</p>
  //   }
  // }

  // const[cor,setCor]=useState(1);

  // const vermelho={color:'#f00'}
  // const verde={color:'#0f0'}
  // const azul={color:'#00f'}

  // const retCor=(c)=>{
  //   if(c==1){
  //     return vermelho
  //   }else if(c==2){
  //     return verde
  //   }else{
  //     return azul
  //   }
  // }

  // const mudaCor=()=>{
  //   setCor(cor+1)
  //   if(cor > 2){
  //     setCor(1)
  //   }
  // }

  // setInterval(mudaCor,1000)

  // const carros = ['HRV', 'GOLF', 'FOCUS', 'CRUZE', 'ARGO']

  const carros = [
    { categoria: "Esporte", preco: "11000.00", modelo: "golf gti" },
    { categoria: "Esporte", preco: "11000.00", modelo: "i30" },
    { categoria: "Esporte", preco: "11000.00", modelo: "civic" },
    { categoria: "Esporte", preco: "11000.00", modelo: "ferrari" },
  ];

  const listaCarros = carros.map(
    (c, i) =>
      <li key={i}> {i} - {c.modelo} - {c.categoria} - R$ {c.preco}</li>

  )

  return (
    <>
      <h1>CFB CURSOS</h1>

      <ul>{listaCarros}</ul>

      {/* <h1 style={retCor(cor)}>CFB CURSOS</h1>
      <button onClick={()=>{mudaCor()}}>Muda Cor</button> */}
    </>
  );
}

