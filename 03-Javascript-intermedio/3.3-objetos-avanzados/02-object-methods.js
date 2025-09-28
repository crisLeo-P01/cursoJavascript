// OBJECT.KEYS() - obtiene todas las claves
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    color: "Rojo"
};

const claves = Object.keys(coche);
console.log(claves); // ["marca", "modelo", "año", "color"]

// Iterar sobre las claves
Object.keys(coche).forEach(clave => {
    console.log(`${clave}: ${coche[clave]}`);
});

/////////////////////////
// OBJECT.VALUES() - obtiene todos los valores
const valores = Object.values(coche);
console.log(valores); // ["Toyota", "Corolla", 2023, "Rojo"]

// Ejemplo práctico: sumar valores numéricos
const ventas = {
    enero: 1000,
    febrero: 1200,
    marzo: 800,
    abril: 1500
};

const totalVentas = Object.values(ventas).reduce((suma, venta) => suma + venta, 0);
console.log(totalVentas); // 4500

////////////////////////
// OBJECT.ENTRIES() - obtiene pares clave-valor
const entradas = Object.entries(coche);
console.log(entradas);
// [["marca", "Toyota"], ["modelo", "Corolla"], ["año", 2023], ["color", "Rojo"]]

// Iterar con destructuring
Object.entries(coche).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

// Convertir a Map
const mapa = new Map(Object.entries(coche));
console.log(mapa.get("marca")); // "Toyota"

//////////////////////////
// EJEMPLO PRACTICO
const inventario = {
    laptops: 15,
    ratones: 50,
    teclados: 25,
    monitores: 8
};

// Obtener producto con más stock
const productos = Object.keys(inventario);
const stocks = Object.values(inventario);
const maxStock = Math.max(...stocks);
const productoMasStock = Object.entries(inventario)
    .find(([producto, stock]) => stock === maxStock)[0];

console.log(`Producto con más stock: ${productoMasStock} (${maxStock} unidades)`);

// Productos con poco stock (menos de 20)
const pocoStock = Object.entries(inventario)
    .filter(([producto, stock]) => stock < 20)
    .map(([producto, stock]) => ({ producto, stock }));

console.log("Productos con poco stock:", pocoStock);