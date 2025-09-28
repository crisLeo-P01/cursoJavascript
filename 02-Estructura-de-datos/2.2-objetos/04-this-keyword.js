const persona = {
    nombre: "Ana",
    edad: 25,

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
        // 'this' se refiere al objeto 'persona'
    },

    cumpleanos() {
        this.edad++; // Modifica la propiedad del objeto
        console.log(`Ahora tengo ${this.edad} años`);
    }
};

persona.saludar(); // "Hola, soy Ana y tengo 25 años"
persona.cumpleanos(); // "Ahora tengo 26 años"