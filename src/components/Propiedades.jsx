import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props){

    return(
        <div>
            <h3>{props.porDefecto}</h3>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion)}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}
Propiedades.defaultProps={
    porDefecto: "Las Props",
};

Propiedades.propTypes={
    numero: PropTypes.number,
};