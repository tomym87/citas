import React, {Component} from 'react';

function EstadoAHijo(props){
    return(
        <div>
            <h4>{props.contadorHijo}</h4>
        </div>
    );
}

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state={
            contador: 0,
        };
        /*
            setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            });
        }, 10000);
        */
    }
    render(){
        return(
        <div>
            <h2>El State</h2>
            <p>{this.state.contador}</p>
            <EstadoAHijo contadorHijo={this.state.contador}/>
        </div>
        );
    }
}