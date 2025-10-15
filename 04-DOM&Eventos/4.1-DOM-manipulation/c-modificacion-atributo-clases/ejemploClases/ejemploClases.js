function mostrarTab(tabId) {
    // Ocultar todos los tabs
    const todosLosTabs = document.querySelectorAll(".tab");
    todosLosTabs.forEach((tab) => tab.classList.remove("activo"));

    // Mostrar el tab seleccionado
    const tabActivo = document.querySelector(`#${tabId}`);
    tabActivo.classList.add("activo");

    // Opcional: marcar botón activo
    const botones = document.querySelectorAll(".botones button");
    botones.forEach((btn) => btn.classList.remove("activo"));
    const botonActivo = Array.from(botones).find(
        (btn) => btn.textContent === `Tab ${tabId.replace("tab", "")}`
    );
    if (botonActivo) botonActivo.classList.add("activo");
}

// Toggle de tema oscuro
function mostrarTab(tabId) {
    const todosLosTabs = document.querySelectorAll(".tab");
    todosLosTabs.forEach((tab) => tab.classList.remove("activo"));

    const tabActivo = document.querySelector(`#${tabId}`);
    tabActivo.classList.add("activo");
}

// Modo oscuro
const btnTema = document.querySelector("#toggle-tema");
const body = document.body;
const containerTabs = document.querySelectorAll(".tab");

btnTema.addEventListener("click", () => {
    body.classList.toggle("tema-oscuro");
    containerTabs.forEach((tab) =>
        tab.classList.toggle("tema-oscuro-secondary")
    );

    // Actualizar texto del botón
    if (body.classList.contains("tema-oscuro")) {
        btnTema.textContent = "Tema Claro";
    } else {
        btnTema.textContent = "Tema Oscuro";
    }
});

// Estados de botón
const boton = document.querySelector("#mi-boton");

function habilitarBoton() {
    boton.classList.remove("deshabilitado");
    boton.removeAttribute("disabled");
}

function deshabilitarBoton() {
    boton.classList.add("deshabilitado");
    boton.setAttribute("disabled", "");
}
