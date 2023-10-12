//Actividad 08 de componente con el framework REACT.
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import MiFieldSet from './MiFieldSet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MiFieldSet title="Información personal" text1="Nombre" text2="Apellido" />
  </React.StrictMode>,
)