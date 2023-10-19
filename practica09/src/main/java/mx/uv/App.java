package mx.uv;

import static spark.Spark.*;

/**
 * Utilización del framework Spark.
 * Hola, mundo!
 */
public class App {
    public static void main(String[] args) {
        get("/",
                (request, response) -> "<h1>¡Index!</h1>"

        );

        get("/ruta2",
                (request, response) -> "<h1>¡Hola, mundillo!</h1>"

        );

        get("/ruta3",
                (request, response) -> "<h1>¡Adiós, mundillo!</h1>"

        );

        get("/json",
                (request, response) -> "('nombre':'Alumno','Matrícula':'S2000','Carrera':'Estadística')"

        );

    }
}
