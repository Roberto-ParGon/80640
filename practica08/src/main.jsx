//Actividad 08 de componente con el framework REACT.
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
//import './index.css'
import MiFieldSet from './MiFieldSet.jsx'
import Formulario from './assets/Formulario.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Formulario></Formulario>
  </React.StrictMode>
);

/*

    <MiFieldSet title="Información personal:" text1="Nombre" text2="Apellido" />
    <MiFieldSet title="Datos escolares:" text1="Carrera" text2="Semestre" />
    <input type="submit" value="Enviar datos"/>

*/