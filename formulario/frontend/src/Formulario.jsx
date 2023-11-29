import React, { useState } from "react";
import axios from "axios";

const MiComponente = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = async (event, metodo) => {
    event.preventDefault();
    try {
      let response;
      switch (metodo) {
        case "create":
          response = await axios.post(
            "http://localhost:4567/crear",
            formulario
          );
          break;
        case "read":
          response = await axios.post("http://localhost:4567/leer", formulario);
          break;
        case "update":
          response = await axios.put(
            "http://localhost:4567/actualizar",
            formulario
          );
          break;
        case "delete":
          response = await axios.delete("http://localhost:4567/eliminar", {
            data: formulario,
          });
          break;
        default:
          console.error("Método no reconocido");
          return;
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error al realizar la operación:", error);
    }
  };

  return (
    <body>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Nombre:
            <input
              style={styles.input}
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Apellido:
            <input
              style={styles.input}
              type="text"
              name="apellido"
              value={formulario.apellido}
              onChange={handleChange}
            />
          </label>
        </div>
        <div style={styles.buttonGroup}>
          <button
            style={styles.button}
            type="button"
            onClick={(e) => handleSubmit(e, "create")}
          >
            Crear
          </button>
          <button
            style={styles.button}
            type="button"
            onClick={(e) => handleSubmit(e, "read")}
          >
            Leer
          </button>
          <button
            style={styles.button}
            type="button"
            onClick={(e) => handleSubmit(e, "update")}
          >
            Actualizar
          </button>
          <button
            style={styles.button}
            type="button"
            onClick={(e) => handleSubmit(e, "delete")}
          >
            Eliminar
          </button>
        </div>
      </form>
    </body>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginTop: "50px",
    backgroundColor: "#212529",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
    color: "white",
  },
  input: {
    width: "95%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "20px", // Puedes ajustar este valor según tus necesidades
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#fd0e35",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default MiComponente;
