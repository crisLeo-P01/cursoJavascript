const nombre = "María";
const edad = 25;
const ciudad = "Madrid";

// Sintaxis tradicional
const mensaje1 = "Hola, soy " + nombre + ", tengo " + edad + " años y vivo en " + ciudad;

// Con template literals
const mensaje2 = `Hola, soy ${nombre}, tengo ${edad} años y vivo en ${ciudad}`;

// Multilínea
const carta = `
    Estimado ${nombre},

    Esperamos que te encuentres bien.
    Tienes ${edad} años y vives en ${ciudad}.

    Saludos cordiales.
`;

// Expresiones dentro de template literals
const precio = 100;
const impuesto = 0.16;
console.log(`Total a pagar: $${precio * (1 + impuesto)}`); // "Total a pagar: $116"