// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function () {
            listaTareas.removeChild(nuevaTarea);
        };
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}

// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}

// Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        marcarCompletada(event.target);
    }
});

// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);


// DESAFIO

// funcion para las tareas completadas
function mostrar_completadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {

        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}

// funcion para las tarea pendientes
function mostrar_pendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}

// funcion para mostrar todas las tareas
function mostrar_todas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        tarea.style.display = "flex";
    });
}

// Agregar eventos
document.getElementById("mostrar_completadas").addEventListener("click", mostrarCompletadas);
document.getElementById("mostrar_pendientes").addEventListener("click", mostrarPendientes);
document.getElementById("mostrar_todas").addEventListener("click", mostrarTodas);

