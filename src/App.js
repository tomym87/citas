import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente  from "./components/Componente";
import Propiedades from './components/Propiedades';
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>

          <img src={logo} className="App-logo" alt="logo" />
           <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </section>
        <section>
          <Componente msg="Soy un componente funcional expresado en una prop"/>
          <hr/>
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={19}
            booleano={true} 
            arreglo={[1,2,3]}
            objeto={{nombre: "Tomy", correo: "tomym87@gmail.com"}}
            elementoReact={<i>Elemento de react</i>}
            funcion={(num)=>num*num}
            componenteReact={<Componente msg="Componente pasado como Prop"/>}
            />
            <hr/>
            <Estado/>
            <hr/>
            <RenderizadoCondicional/>
            <hr/>
            <RenderizadoElementos/>
            <hr/>
            <EventosES6/>
            <hr/>
            <EventosES7/>
            <hr/>
            <MasSobreEventos/>
        </section>
      </header>
    </div>
  );
}

export default App;
