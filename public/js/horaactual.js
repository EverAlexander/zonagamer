// Función para obtener la hora actual en el formato HH:mm
function obtenerHoraActual() {
    const ahora = new Date();
    const hours = String(ahora.getHours()).padStart(2, '0');
    const minutes = String(ahora.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
}

// Función para actualizar la hora cada segundo
function actualizarHora() {
    document.getElementById('inicios').value = obtenerHoraActual();
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);