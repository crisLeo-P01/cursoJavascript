// Métodos de transformación - buscar, reemplazar

const texto = "Me gusta JavaScript";
console.log(texto.replace("JavaScript", "Python")); // "Me gusta Python"

const email = "usuario@gmail.com";
console.log(email.replace("gmail", "hotmail")); // "usuario@hotmail.com"

// Solo reemplaza la primera ocurrencia
const repetido = "casa casa casa";
console.log(repetido.replace("casa", "hogar")); // "hogar casa casa"