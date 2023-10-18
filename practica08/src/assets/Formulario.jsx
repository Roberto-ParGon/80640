//import MiFieldSet from "../MiFieldSet"
import DatosPersonales from "./DatosPersonales";
import DatosEscolares from "./DatosEscolares";

function Formulario() {
  return (
    <>
      <DatosPersonales></DatosPersonales>
      <DatosEscolares></DatosEscolares>
      <button type="submit">Enviar Datos</button>
    </>
  );
}

/*

    <MiFieldSet title="Información personal:" text1="Nombre" text2="Apellido" />
    <MiFieldSet title="Datos escolares:" text1="Carrera" text2="Semestre" />
    <input type="submit" value="Enviar datos"/>

*/

export default Formulario;
