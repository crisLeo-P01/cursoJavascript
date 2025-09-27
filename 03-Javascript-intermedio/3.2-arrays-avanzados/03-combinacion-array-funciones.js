const productos = [
    { nombre: 'Teclado', precio: 25 },
    { nombre: 'Mouse', precio: 15 },
    { nombre: 'Monitor', precio: 120 },
    { nombre: 'Auriculares', precio: 75 }
]

// Buscar un producto
const monitor = productos.find(n => n.nombre === 'Monitor')
console.log(`Producto encontrado. ${monitor.nombre} a un precio de ${monitor.precio}`)

// Ordenar productos por precio
const produtosOrdenados = productos.sort((a, b) => a.precio - b.precio)
console.log(produtosOrdenados)

// Verificar si todos los precios valen mas de 20
console.log(productos.every(e => e.precio > 20))