// slice(inicio-fin)
const texto = "JavaScript es genial";
console.log(texto.slice(0, 10));    // "JavaScript"
console.log(texto.slice(-6));       // "genial" (desde el final)
console.log(texto.slice(4, 10));    // "Script"
console.log(texto.slice(-6, -2));   // "geni"

// substring(inicio-fin)
const texto2 = "JavaScript";
console.log(texto2.substring(0, 4));   // "Java"
console.log(texto2.substring(4));      // "Script"
console.log(texto2.substring(4, 0));   // "Java" (intercambia automáticamente)
// No acepta índices negativos (los trata como 0)

// charAr(indice)
const texto3 = "Hola Mundo";
console.log(texto3.charAt(0));    // "H"
console.log(texto3.charAt(5));    // "M"
console.log(texto3.charAt(20));   // "" (cadena vacía si está fuera de rango)
console.log(texto3[0]);           // "H" (alternativa moderna)