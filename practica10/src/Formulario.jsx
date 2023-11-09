import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Formulario(props) {
  //Props es un témino utilizado en react para indicar le paso de parámetros.
  //(Variable, función que me va a permitir modificar la variable).
  const [cargando, setCargando] = useState(false); //useState(false) es el valor inicial de la variable.
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    password: "",
  });

  const hacerPeticion = async () => {
    //async debe llevar un await.
    try {
      const response = await axios.get("http://localhost:4567/json");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const procesarFormulario = async (evento) => {
    evento.preventDefault(); //preventDefault permite que la petición quede en espera.
    console.log("Datos recuperados del formulario:", datosFormulario);
    setCargando(true);

    try {
      const response = await hacerPeticion();
      console.log(response);
      setCargando(false);

      if (datosFormulario.nombre === response.alumno) {
        console.log("El usuario si existe");
      } else {
        console.log("El usuario no existe");
      }
    } catch (error) {
      console.log("Ocurrió un error:", error);
      setCargando(false);
    }
  };

  const cambiosFormulario = (evento) => {
    //console.log(evento.target)
    const { name, value } = evento.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={procesarFormulario}>
        <h1>Inicio de sesión</h1>
        <Box m={5}>
          <TextField
            label="Nombre:"
            variant="outlined"
            fullWidth
            onChange={cambiosFormulario}
            name="nombre"
            value={datosFormulario.nombre}
          ></TextField>
        </Box>

        <Box m={5}>
          <TextField
            label="Contraseña:"
            variant="outlined"
            fullWidth
            onChange={cambiosFormulario}
            name="password"
            value={datosFormulario.password}
          ></TextField>
        </Box>

        <Box m={5}>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            fullWidth
            disabled={cargando}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Formulario;
