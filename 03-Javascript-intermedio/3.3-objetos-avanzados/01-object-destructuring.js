const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    profesion: "Desarrolladora"
};

// Extraer propiedades
const { nombre, edad } = persona;
console.log(nombre); // "Ana"
console.log(edad);   // 25

// Extraer todas las propiedades
const { nombre: nombreCompleto, edad: edadUsuario, ciudad: city, profesion } = persona;
console.log(nombreCompleto); // "Ana"
console.log(edadUsuario);

/////////////////////
// Renombrar variable
const usuario = {
    name: "Luis",
    age: 30,
    email: "luis@email.com"
};

// Renombrar durante destructuring
const { name: nombre2, age: edad2, email: correo } = usuario;
console.log(nombre2); // "Luis"
console.log(edad2);   // 30
console.log(correo); // "luis@email.com"

//////////////////////
// Valores por defecto
const config = {
    host: "localhost",
    port: 3000
    // timeout no está definido
};

// Asignar valores por defecto
const { host, port, timeout = 5000, debug = false } = config;
console.log(host);    // "localhost"
console.log(port);    // 3000
console.log(timeout); // 5000 (valor por defecto)
console.log(debug);   // false (valor por defecto)

//////////////////////
// Destructuring anidado
const empresa = {
    nombre: "TechCorp",
    direccion: {
        calle: "Calle Principal 123",
        ciudad: "Barcelona",
        pais: "España"
    },
    empleados: {
        desarrolladores: 15,
        diseñadores: 5
    }
};

const {
    nombre: nombreEmpresa,
    direccion: { ciudad, pais },
    empleados: { desarrolladores }
} = empresa;

console.log(nombreEmpresa);   // "TechCorp"
console.log(ciudad);          // "Barcelona"
console.log(desarrolladores); // 15

// Rest operator en objetos
const producto = {
    id: 1,
    nombre3: "Laptop",
    precio: 1000,
    marca: "TechBrand",
    color: "Negro",
    peso: "2kg"
};

// Separar algunas propiedades del resto
const { id, nombre3, ...detalles } = producto;
console.log(id);       // 1
console.log(nombre);   // "Laptop"
console.log(detalles); // { precio: 1000, marca: "TechBrand", color: "Negro", peso: "2kg" }

////////////////////////
// Destructuring en parámetros de función
// Función que recibe objeto como parámetro
function crearPerfil({ nombre, edad, profesion = "No especificada" }) {
    return `${nombre}, ${edad} años, ${profesion}`;
}

const usuario2 = {
    nombre: "María",
    edad: 28,
    ciudad: "Valencia"
};

console.log(crearPerfil(usuario2)); // "María, 28 años, No especificada"

// Con destructuring anidado en parámetros
function mostrarDireccion({ direccion: { calle, ciudad } }) {
    return `${calle}, ${ciudad}`;
}