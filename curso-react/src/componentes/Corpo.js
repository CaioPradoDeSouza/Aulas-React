import React from "react"
import Dados from "./Dados"

export default function Corpo(){
        const cnl=()=>{
            return 'CFB Cursos'
        }

        const somar=(v1,v2)=>{
            return v1+v2
        }

    return (
        <div>
            <h2>Corpo</h2>
            <Dados 
                Nome={cnl} 
                Idade={20} 
                Sexo='masculino' 
                somar={somar}
            />
            <img src="./img/cachorro.webp"
            />
        </div>
    )

}