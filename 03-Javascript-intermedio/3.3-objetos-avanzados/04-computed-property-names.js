// Propiedades dinámicas
const propiedad = "color";
const valor = "rojo";

// Sintaxis tradicional
const objeto1 = {};
objeto1[propiedad] = valor;

// Con computed property names
const objeto2 = {
    [propiedad]: valor,
    ["tamaño"]: "grande",
    [`precio_${new Date().getFullYear()}`]: 100
};
console.log(objeto2); // { color: "rojo", tamaño: "grande", precio_2025: 100 }

///////////////
// EJEMPLO PRACTICO
// Crear objeto desde arrays
const claves = ["nombre", "edad", "ciudad"];
const valores = ["Ana", 25, "Madrid"];

const persona = {};
claves.forEach((clave, index) => {
    persona[clave] = valores[index];
});

// Con reduce y computed properties
const personaComputada = claves.reduce((obj, clave, index) => ({
    ...obj,
    [clave]: valores[index]
}), {});

console.log(personaComputada); // { nombre: "Ana", edad: 25, ciudad: "Madrid" }

/////////////////
// FUNCIONES COMO NOMBRES DE PROPIEDADES
function obtenerClave(tipo) {
    return `datos_${tipo}`;
}

const datos = {
    [obtenerClave("usuario")]: { id: 1, nombre: "Luis" },
    [obtenerClave("producto")]: { id: 101, nombre: "Laptop" },
    [`configuracion_${Date.now()}`]: { tema: "oscuro" }
};

console.log(datos);

//////////////////
// TEMPLATE LITERALS EN PROPIEDADES
const prefijo = "api";
const version = "v1";

const endpoints = {
    [`${prefijo}_${version}_users`]: "/api/v1/users",
    [`${prefijo}_${version}_products`]: "/api/v1/products",
    [`${prefijo}_${version}_orders`]: "/api/v1/orders"
};

console.log(endpoints);