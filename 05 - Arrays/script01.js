let articulos = ["Zapatillas", "Camisetas", "Pantalon", "Calcetines"];

document.write ("<p> El primer articulo es <strong>" + articulos [0] + "</strong></p>");

document.write(`<p>El último elemento es <strong>${articulos[articulos.length-1]}</strong></p>`)

//AGREGA ELEMENTO AL PRINCIPIO
articulos.unshift ("Balón");
document.write(`<p>Casi nos olvidamos!!! Agregamos este articulo: <strong>${articulos[0]}</strong></p>`);

document.write ("<p>Agreguemos un elemento más al final: <strong>");
//AGREGA ELEMENTO AL FINAL
articulos.push (prompt ("Introduce el articulo"));
document.write (articulos[articulos.length-1] + "</strong></p>");

document.write(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]} <br> ${articulos[4]} <br> ${articulos[5]}</p>`);

alert("Borraremos el primer elemento");
//El método shift borra el primer elemento
articulos.shift ();
document.write(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]} <br> ${articulos[4]} <br> ${articulos[5]}</p>`);

alert("Ahora borraremos el ultimo elemento");
//El método pop borra el último elemento
articulos.pop ();
document.write(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]}</p>`);