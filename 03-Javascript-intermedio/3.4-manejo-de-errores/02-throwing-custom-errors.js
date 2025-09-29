// Lanzar errores personalizados

function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Los argumentos deben ser números");
    }

    if (b === 0) {
        throw new Error("División por cero no permitida");
    }

    return a / b;
}

// Uso con manejo de errores
try {
    console.log(dividir(10, 2));    // 5
    console.log(dividir(10, 0));    // Error
} catch (error) {
    console.log("Error:", error.message);
}

//////////////////
// Validación de datos
function crearUsuario(datos) {
    // Validaciones con errores específicos
    if (!datos) {
        throw new Error("Los datos del usuario son requeridos");
    }

    if (!datos.nombre || datos.nombre.trim() === '') {
        throw new Error("El nombre es requerido");
    }

    if (!datos.email || !datos.email.includes('@')) {
        throw new Error("Email inválido");
    }

    if (!datos.edad || datos.edad < 18) {
        throw new Error("El usuario debe ser mayor de edad");
    }

    return {
        id: Date.now(),
        nombre: datos.nombre.trim(),
        email: datos.email.toLowerCase(),
        edad: datos.edad,
        fechaRegistro: new Date()
    };
}

// Función que usa la validación
function registrarUsuario(datos) {
    try {
        const usuario = crearUsuario(datos);
        console.log("Usuario creado:", usuario);
        return { success: true, usuario };
    } catch (error) {
        console.log("Error al crear usuario:", error.message);
        return { success: false, error: error.message };
    }
}

// Pruebas
registrarUsuario({ nombre: "Ana", email: "ana@email.com", edad: 25 });
registrarUsuario({ nombre: "", email: "ana@email.com", edad: 25 });
registrarUsuario({ nombre: "Ana", email: "email_inválido", edad: 25 });

/////////////////
// Errores con información adicional

function procesarPedido(pedido) {
    if (!pedido.productos || pedido.productos.length === 0) {
        const error = new Error("El pedido debe tener al menos un producto");
        error.codigo = 'PEDIDO_VACIO';
        error.detalles = { pedidoId: pedido.id };
        throw error;
    }

    // Verificar stock
    const sinStock = pedido.productos.filter(p => p.stock <= 0);
    if (sinStock.length > 0) {
        const error = new Error("Productos sin stock disponible");
        error.codigo = 'SIN_STOCK';
        error.detalles = { productosSinStock: sinStock.map(p => p.nombre) };
        throw error;
    }

    return { success: true, mensaje: "Pedido procesado correctamente" };
}

try {
    const resultado = procesarPedido({
        id: 123,
        productos: [
            { nombre: "Laptop", stock: 0 },
            { nombre: "Mouse", stock: 5 }
        ]
    });
} catch (error) {
    console.log("Código de error:", error.codigo);
    console.log("Mensaje:", error.message);
    console.log("Detalles:", error.detalles);
}