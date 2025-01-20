import React from "react";


export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='golf'

        this.state={
            ligado:false,
            velAtual:0,

        }
        this.ld=this.ligarDesligar.bind(this)
    }


    ligarDesligar(){
        //this.setState({ligado:!this.state.ligado})

        this.setState(
            (state)=>(
                { ligado: !state.ligado }
            )
        )
    }

    acelerar=()=>{
        this.setState(
            (state,props)=>(

                {velAtual:state.velAtual + props.fator}
            )

        )
    }

    componentDidMount(){
        console.log("Componente Carro renderizado")
    }

    componentDidUpdate(){
        console.log("Componente atualizado")
    }

    componentWillUnmount(){
        console.log("Componente Carro será desmontado")
    }

    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>Vel.atual: {this.state.velAtual}</p>
                <button onClick={this.ld}> 
                    
                    {this.state.ligado ? "Desligar carro" : "Ligar carro"  }

                </button>

                <button onClick={()=>this.acelerar()}> 
                    Acelerar
                </button>
                
            </div>
        )

    }
}

