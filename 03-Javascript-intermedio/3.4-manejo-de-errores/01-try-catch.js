try {
    // Código que puede generar un error
    console.log("Ejecutando código...");
    // Simular un error
    throw new Error("Algo salió mal");
    console.log("Esta línea no se ejecutará");
} catch (error) {
    // Manejo del error
    console.log("Error capturado:", error.message);
} finally {
    // Código que siempre se ejecuta
    console.log("Bloque finally siempre se ejecuta");
}

////////////////
// Ejercicio práctico con JSON
function parsearJSON(jsonString) {
    try {
        const objeto = JSON.parse(jsonString);
        console.log("JSON parseado correctamente:", objeto);
        return objeto;
    } catch (error) {
        console.log("Error al parsear JSON:", error.message);
        return null;
    } finally {
        console.log("Operación de parseo completada");
    }
}

// Casos de uso
parsearJSON('{"nombre": "Ana", "edad": 25}'); // Éxito
parsearJSON('{"nombre": "Ana", "edad":}');     // Error de sintaxis

///////////////
// Manejo de operaciones asíncronas
async function obtenerDatos(url) {
    try {
        console.log("Iniciando solicitud...");
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const datos = await response.json();
        console.log("Datos obtenidos:", datos);
        return datos;
    } catch (error) {
        console.log("Error en la solicitud:", error.message);
        return { error: true, mensaje: error.message };
    } finally {
        console.log("Solicitud completada");
    }
}

///////////////
// TRY CATCH ANIDADOS
function procesarDatos(datos) {
    try {
        console.log("Procesando datos principales...");

        // Validación inicial
        if (!datos || typeof datos !== 'object') {
            throw new Error("Datos inválidos");
        }

        // Procesamiento interno que puede fallar
        try {
            const resultado = datos.valores.map(v => v * 2);
            console.log("Resultado:", resultado);
        } catch (error) {
            console.log("Error en procesamiento interno:", error.message);
            // Intentar recuperación
            return { valores: [] };
        }

    } catch (error) {
        console.log("Error general:", error.message);
        return null;
    } finally {
        console.log("Limpieza de recursos");
    }
}

// Pruebas
procesarDatos({ valores: [1, 2, 3, 4] });    // Éxito
procesarDatos({ valores: null });             // Error interno
procesarDatos(null);                          // Error general