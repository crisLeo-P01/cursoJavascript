const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nombre.value.trim() === "" || email.value.trim() === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.style.color = "red"
    } else if (!email.value.includes("@") || !email.value.includes(".com")) {
        mensaje.textContent = "El mail no es correcto"
        mensaje.style.color = "red"
    } else {
        mensaje.textContent = `Bienvenido, ${nombre.value}`
        mensaje.style.color = "green"
    }
})