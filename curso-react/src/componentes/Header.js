import React from "react"
import Logo from './imgs/logo.avif';


export default function Header(){

    return(

        <header>
            <img src={Logo}/>
            <h1>CFB CURSOS</h1>
        </header>
    )
}