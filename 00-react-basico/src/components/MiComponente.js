import React, { Component } from 'react';

class MiComponente extends Component {

  render() {
    let receta = {
      nombre: 'Pizza',
      ingredientes: [ 'queso', 'tomate', 'jamon' ],
      calorias: 400
    };

    return (
        <div className="mi-componente">
            <h1> Soy 'MiComponente' :P </h1>
            <p> Un componente es una <strong> parte logica que controla una seccion de la aplicacion </strong> </p>
            
            <hr/>

            <h1> { 'Receta: ' + receta.nombre } </h1>
            <h2> { 'Calorias' + receta.calorias } </h2>
            
            <ol>
              {
                receta.ingredientes.map( (ingrediente, i) => {
                  return (
                    <li key="{i}"> { ingrediente } </li>
                  )
                })
              }
            </ol>
        </div>
    );

  }

}


export default MiComponente;