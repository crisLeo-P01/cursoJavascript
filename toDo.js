class TodoApp {
    constructor() {
        this.tareas = [];
        this.inicializar();
    }

    inicializar() {
        // Referencias a elementos
        this.form = document.querySelector('#todo-form');
        this.input = document.querySelector('#todo-input');
        this.lista = document.querySelector('#todo-lista');
        this.filtros = document.querySelector('#filtros');

        // Event listeners
        this.configurarEventos();
        this.renderizar();
    }

    configurarEventos() {
        // Submit del formulario
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.agregarTarea();
        });

        // Event delegation para la lista
        this.lista.addEventListener('click', (e) => {
            const tareaId = e.target.closest('li')?.dataset.id;

            // Completar tarea
            if (e.target.classList.contains('btn-completar')) {
                this.toggleCompletada(tareaId);
            }

            // Eliminar tarea
            if (e.target.classList.contains('btn-eliminar')) {
                this.eliminarTarea(tareaId);
            }

            // Editar tarea
            if (e.target.classList.contains('btn-editar')) {
                this.editarTarea(tareaId);
            }
        });

        // Filtros
        this.filtros.addEventListener('click', (e) => {
            if (e.target.classList.contains('filtro')) {
                // Remover clase activa de todos
                document.querySelectorAll('.filtro').forEach(f => {
                    f.classList.remove('activo');
                });

                // Agregar a filtro clickeado
                e.target.classList.add('activo');

                // Aplicar filtro
                this.filtrar(e.target.dataset.filtro);
            }
        });

        // Atajos de teclado
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K para enfocar input
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.input.focus();
            }

            // Escape para limpiar input
            if (e.key === 'Escape' && document.activeElement === this.input) {
                this.input.value = '';
                this.input.blur();
            }
        });

        // Input en tiempo real
        this.input.addEventListener('input', (e) => {
            const contador = document.querySelector('#contador-caracteres');
            if (contador) {
                contador.textContent = `${e.target.value.length}/100`;
            }
        });
    }

    agregarTarea() {
        const texto = this.input.value.trim();

        if (texto === '') {
            this.mostrarError('Por favor ingresa una tarea');
            return;
        }

        const tarea = {
            id: Date.now().toString(),
            texto,
            completada: false,
            fecha: new Date()
        };

        this.tareas.push(tarea);
        this.input.value = '';
        this.renderizar();
    }

    toggleCompletada(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = !tarea.completada;
            this.renderizar();
        }
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.renderizar();
    }

    editarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            const nuevoTexto = prompt('Editar tarea:', tarea.texto);
            if (nuevoTexto && nuevoTexto.trim() !== '') {
                tarea.texto = nuevoTexto.trim();
                this.renderizar();
            }
        }
    }

    filtrar(tipo) {
        let tareasFiltradas;

        switch (tipo) {
            case 'activas':
                tareasFiltradas = this.tareas.filter(t => !t.completada);
                break;
            case 'completadas':
                tareasFiltradas = this.tareas.filter(t => t.completada);
                break;
            default:
                tareasFiltradas = this.tareas;
        }

        this.renderizar(tareasFiltradas);
    }

    renderizar(tareas = this.tareas) {
        if (tareas.length === 0) {
            this.lista.innerHTML = '<li class="vacio">No hay tareas</li>';
            return;
        }

        const tareasHTML = tareas.map(tarea => `
            <li data-id="${tarea.id}" class="${tarea.completada ? 'completada' : ''}">
                <span class="texto">${tarea.texto}</span>
                <div class="botones">
                    <button class="btn-completar" title="Completar">
                        ✓
                    </button>
                    <button class="btn-editar" title="Editar">
                        ✎
                    </button>
                    <button class="btn-eliminar" title="Eliminar">
                        ✕
                    </button>
                </div>
            </li>
        `).join('');

        this.lista.innerHTML = tareasHTML;
    }

    mostrarError(mensaje) {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = mensaje;

        this.form.appendChild(error);

        setTimeout(() => error.remove(), 3000);
    }
}

// Inicializar app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});