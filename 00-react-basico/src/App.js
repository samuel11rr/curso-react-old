import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// componentes
import MiComponente from './components/MiComponente';


function HolaMundo( nombre, edad ) {
  var presentacion = (
    <div>
      <h2> Hola, soy { nombre } </h2>
      <h3> Tengo { edad } años </h3>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = 'Samuel Ramirez';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Estoy aprendiendo cosas basicas </p>

        { HolaMundo( nombre, 28 ) }
        
        
        <section className="componentes">
          <MiComponente></MiComponente>
        </section>

      </header>
    </div>
  );
}

export default App;
