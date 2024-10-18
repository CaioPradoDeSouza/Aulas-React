import React from "react";

export default function Dados(props){

    return (
        <section>
            <h2>Dados</h2>
            <p>Nome: {props.Nome}</p>
            <p>Idade: {props.Idade}</p>
            <p>Sexo: {props.Sexo}</p>
        </section>
    )
}