// Recorrer un array
let paises = ['argentina', 'brasil', 'estados unidos', 'Inglaterra', 'Portugal'];

for (let i = 0; i < paises.length; i++) {
    console.log(paises[i])
}

// Otra forma de recorrer un array
paises.forEach(function (pais) {
    console.log("Nombre de pais: ", pais)
})

// Forma más moderna de recorrer un array: función flecha
paises.forEach((pais) => {
    console.log("País recorrido: ", pais)
})