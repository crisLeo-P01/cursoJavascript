const tituloTc = document.querySelector('#tituloTc');

// Leer solo el texto
console.log(tituloTc.textContent); // Solo texto, sin etiquetas HTML

// Establecer texto (cualquier HTML será escapado)
tituloTc.textContent = 'Nuevo título sin <strong>HTML</strong>';
// Resultado: "Nuevo título sin <strong>HTML</strong>" (literal)

// Comparación
const elemento = document.querySelector('#ejemplo');
elemento.innerHTML = 'Texto con <strong>negrita</strong>';
console.log(elemento.innerHTML);    // "Texto con <strong>negrita</strong>"
console.log(elemento.textContent);  // "Texto con negrita"

// // Seguridad: textContent previene XSS
// const userInput = '<script>alert("XSS")</script>';
// elemento.textContent = userInput; // Seguro: muestra el texto literal
// elemento.innerHTML = userInput;   // Peligroso: ejecutaría el script