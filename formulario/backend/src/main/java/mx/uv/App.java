package mx.uv;

import static spark.Spark.*;

import javax.swing.text.html.parser.Parser;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * Utilización del framework Spark.
 * Hola, mundo!
 */
public class App {
        private static JsonParser jsonParser;

        public static void main(String[] args) {
                // fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
                options("/*", (request, response) -> {
                        String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
                        if (accessControlRequestHeaders != null) {
                                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
                        }

                        String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
                        if (accessControlRequestMethod != null) {
                                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
                        }
                        return "OK";
                });
                before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

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
                                (request, response) -> "{\"alumno\":\"John\",\"matricula\":\"S2000\",\"carrera\":\"TC\"}"

                );

                get("/gson", (request, response) -> {
                        String parametro = request.queryParams("nombre");
                        JsonObject respuesta = new JsonObject();
                        System.out.println("El tipo de parámetro es: " + request.contentType());
                        respuesta.addProperty("nombre", parametro);
                        response.type("application/json");
                        return respuesta;
                });


                post("/gson", (request, response) -> {

                        String parametro = request.body();
                        JsonObject respuesta = new JsonObject();

                        JsonParser parser = new JsonParser();
                        JsonElement arbol = parser.parse(parametro);

                        System.out.println("El tipo de parámetro es: " + request.contentType());
                        System.out.println("El payload tiene: " + parametro);
                        respuesta.addProperty("nombre", arbol.getAsJsonObject().get("nombre").getAsString());
                        response.type("application/json");
                        return respuesta;
                });



                post("/crear", (request, response) -> {
                        String parametro = request.body();
                        JsonObject respuesta = new JsonObject();

                        JsonParser parser = new JsonParser();
                        JsonElement arbol = parser.parse(parametro);

                        String nombre = arbol.getAsJsonObject().get("nombre").getAsString();
                        String apellido = arbol.getAsJsonObject().get("apellido").getAsString();

                        System.out.println("Método: Crear / POST");
                        System.out.println("Nombre: " + nombre);
                        System.out.println("Apellido: " + apellido);
                        System.out.println("Hola, "+ nombre + " " + apellido );
                        System.out.println("<------------------------------>");
                        
                        respuesta.addProperty("mensaje", "Registro creado con éxito");
                        response.type("application/json");
                        return respuesta;
                });

                post("/leer", (request, response) -> {
                        String parametro = request.body();
                        JsonObject respuesta = new JsonObject();

                        JsonParser parser = new JsonParser();
                        JsonElement arbol = parser.parse(parametro);

                        String nombre = arbol.getAsJsonObject().get("nombre").getAsString();
                        String apellido = arbol.getAsJsonObject().get("apellido").getAsString();

                        System.out.println("Método: Leer / POST");
                        System.out.println("Nombre: " + nombre);
                        System.out.println("Apellido: " + apellido);
                        System.out.println("Hola, "+ nombre + " " + apellido );
                        System.out.println("<------------------------------>");
                        
                        respuesta.addProperty("mensaje", "Registro leído con éxito");
                        response.type("application/json");
                        return respuesta;
                });

                put("/actualizar", (request, response) -> {
                        String parametro = request.body();
                        JsonObject respuesta = new JsonObject();

                        JsonParser parser = new JsonParser();
                        JsonElement arbol = parser.parse(parametro);

                        String nombre = arbol.getAsJsonObject().get("nombre").getAsString();
                        String apellido = arbol.getAsJsonObject().get("apellido").getAsString();

                        System.out.println("Método: Actualizar / PUT");
                        System.out.println("Nombre: " + nombre);
                        System.out.println("Apellido: " + apellido);
                        System.out.println("Hola, "+ nombre + " " + apellido );
                        System.out.println("<------------------------------>");

                        respuesta.addProperty("mensaje", "Registro actualizado con éxito");
                        response.type("application/json");
                        return respuesta;
                });

                delete("/eliminar", (request, response) -> {
                        String parametro = request.body();
                        JsonObject respuesta = new JsonObject();

                        JsonParser parser = new JsonParser();
                        JsonElement arbol = parser.parse(parametro);

                        String nombre = arbol.getAsJsonObject().get("nombre").getAsString();
                        String apellido = arbol.getAsJsonObject().get("apellido").getAsString();

                        System.out.println("Método: Eliminar / DELETE");
                        System.out.println("Nombre: " + nombre);
                        System.out.println("Apellido: " + apellido);
                        System.out.println("Hola, "+ nombre + " " + apellido );
                        System.out.println("<------------------------------>");

                        respuesta.addProperty("mensaje", "Registro eliminado con éxito");
                        response.type("application/json");
                        return respuesta;
                });

                /*
                get("/params", (request, response) -> {
                        String parametro = request.queryParams("nombre");
                        return "Adiós mundo: " + parametro;
                });
                 */

        }
}
