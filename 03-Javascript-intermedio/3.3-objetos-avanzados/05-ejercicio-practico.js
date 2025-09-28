// Sistema de gestión de productos
class GestorProductos {
    constructor(productos = []) {
        this.productos = productos;
    }

    // Agregar producto con spread
    agregar(nuevoProducto) {
        const producto = {
            id: Date.now(),
            fechaCreacion: new Date(),
            activo: true,
            ...nuevoProducto
        };
        this.productos.push(producto);
        return producto;
    }

    // Actualizar con Object.assign
    actualizar(id, cambios) {
        const indice = this.productos.findIndex(p => p.id === id);
        if (indice !== -1) {
            this.productos[indice] = {
                ...this.productos[indice],
                ...cambios,
                fechaActualizacion: new Date()
            };
        }
    }

    // Estadísticas usando Object methods
    obtenerEstadisticas() {
        const activos = this.productos.filter(p => p.activo);

        // Agrupar por categoría
        const porCategoria = activos.reduce((acc, producto) => {
            const { categoria } = producto;
            acc[categoria] = (acc[categoria] || 0) + 1;
            return acc;
        }, {});

        // Precio promedio
        const precios = Object.values(activos).map(p => p.precio);
        const precioPromedio = precios.reduce((sum, precio) => sum + precio, 0) / precios.length;

        return {
            total: activos.length,
            porCategoria,
            precioPromedio,
            categorias: Object.keys(porCategoria)
        };
    }

    // Búsqueda con destructuring
    buscar({ categoria, precioMin, precioMax, ...otrosFiltros }) {
        return this.productos.filter(producto => {
            const { precio, categoria: cat, activo } = producto;

            if (!activo) return false;
            if (categoria && cat !== categoria) return false;
            if (precioMin && precio < precioMin) return false;
            if (precioMax && precio > precioMax) return false;

            // Aplicar otros filtros dinámicamente
            return Object.entries(otrosFiltros).every(([key, value]) =>
                producto[key] === value
            );
        });
    }
}

// Uso del sistema
const gestor = new GestorProductos();

gestor.agregar({
    nombre: "Laptop Gaming",
    precio: 1500,
    categoria: "Electrónicos",
    marca: "TechBrand"
});

gestor.agregar({
    nombre: "Silla Oficina",
    precio: 300,
    categoria: "Muebles",
    marca: "ComfortPlus"
});

// Búsqueda con destructuring
const resultados = gestor.buscar({
    categoria: "Electrónicos",
    precioMin: 1000,
    marca: "TechBrand"
});

console.log("Productos encontrados:", resultados);
console.log("Estadísticas:", gestor.obtenerEstadisticas());