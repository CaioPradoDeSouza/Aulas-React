import React from "react";

export default function Dados(props){
    let n1 = 10
    let n2 = 5
    return (
        <section>
            <h2>Dados</h2>
            <p>Nome: {props.Nome()}</p>
            <p>Idade: {props.Idade}</p>
            <p>Sexo: {props.Sexo}</p>
            <p>Somar: {props.somar(n1,n2)}</p>
        </section>
    )
}