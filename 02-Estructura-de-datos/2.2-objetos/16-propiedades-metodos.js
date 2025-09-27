const calculadora = {
    //Propiedades
    marca: 'Casio',
    modelo: 'FX-991',

    // Métodos
    sumar(a, b) {
        return a + b
    },

    restar(a, b) {
        return a - b;
    },

    // Métodos que usa propiedades del objeto
    obtenerInfo() {
        return `Calculado marca ${this.marca}. Modelo: ${this.modelo}`
    }
}

// usar los métodos
console.log(calculadora.sumar(4, 8));
console.log(calculadora.obtenerInfo());

