import React,{useState} from 'react';

export default class BaseClasse extends React.Component {

    constructor(props) {

        //para permitir uso de PROPS
        super(props)

        //state
        this.state ={
            canal:"CFB cursos",
            curso:"React ",
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status

        //bind
        let ad=this.ativarDesativar.bind(this)
        //instruçôes do construtor
    }

    //metodo para alterar o estado do componente
    ativarDesativar(){
        this.setState(
            state=>({
                ativo:!state.ativo
            })
        )
    }

    componentDidMount(){
        console.log("Componente foi criado")
    }

    componentDidUpdate(){
        console.log("Componente foi atualizado")
    }

    componentWillUnmount(){
        console.log("Componente será desmontado")
    }

    // primeiro metodo do ciclo de vida do componente
    render(){


        return(

            <>
                <h1>Componente de Classe</h1>
                <button onClick={this.ad}>Ativar/Desativar</button>
                <button onClick={()=>this.ativarDesativar}>Ativar/Desativar</button>
            </>

        )
    }

}