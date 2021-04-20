import React,{Component} from 'react';

export class EventosES6 extends Component{
constructor(props){
    super(props);
    this.state={
        contador:0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
}

sumar(e){
    console.log("Sumando");
    this.setState({
        contador: this.state.contador+1,
    })
}

restar(e){
    this.state.contador<1? console.log("Ya we"):
    this.setState({
        contador: this.state.contador-1,
    })
}

render(){
    return(
        <div>
           <h3>Eventos en Componentes de clase ES6</h3> 
           <h4>{this.state.contador}</h4>
           <div>
               <button onClick={this.sumar}>+</button>
               <button onClick={this.restar}>-</button>
           </div>
        </div>
    );
}
}

//PROPEERTIES INITIALIZER
export class EventosES7 extends Component{

        state={
            contador:0,
        };
  //Arrow functions
    sumar=(e)=>{
        console.log("Sumando");
        this.setState({
            contador: this.state.contador+1,
        })
    }
    
    restar=(e)=>{
        this.state.contador<1? console.log("Ya we"):
        this.setState({
            contador: this.state.contador-1,
        })
    }
    
    render(){
        return(
            <div>
               <h3>Eventos en Componentes de clase ES7</h3> 
               <h4>{this.state.contador}</h4>
               <div>
                   <button onClick={this.sumar}>+</button>
                   <button onClick={this.restar}>-</button>
               </div>
            </div>
        );
    }
    }

export class MasSobreEventos extends Component{
    handleClick=(e)=>{
        console.log(e);
        console.log(e.nativeEvent);
    } 
    
    render(){
            return(
            <div>
                <h3>Mas Sobre Eventos</h3>
                <button onClick={this.handleClick}>Saludar</button>
            </div>
            )}
}
    