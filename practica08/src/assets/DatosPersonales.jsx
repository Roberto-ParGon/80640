function DatosPersonales() {
  return (
    <>
      <fieldset>
        <legend>Datos Personales</legend>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="Nombre" />

        <label htmlFor="apellidoP">Apellido Paterno: </label>
        <input type="text" id="Paterno" />

        <label htmlFor="apellidoM">Apellido Materno: </label>
        <input type="text" id="Materno" />

        <label htmlFor="pass">Contraseña: </label>
        <input type="password" id="pass" />
      </fieldset>
    </>
  );
}

export default DatosPersonales;
