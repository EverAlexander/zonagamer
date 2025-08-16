$(document).ready(function() {
    // Cuando cambia el valor del campo tiempoJuego o inicio
    $("#tiempoJuegos, #inicios").on("change", function() {
        // Obtener los valores actuales
        var tiempoJuego = parseInt($("#tiempoJuegos").val()) || 0;
        var inicio = $("#inicios").val();

        // Validar el formato de la hora de inicio
        if (!moment(inicio, "HH:mm").isValid()) {
            console.log("Hora de inicio no válida");
            return;
        }

        // Crear objetos moment para la hora de inicio
        var inicioMoment = moment(inicio, "HH:mm");

        // Clonar la hora de inicio
        var finalizacionMoment = inicioMoment.clone();

        // Sumar minutos a la hora de inicio
        finalizacionMoment.add(tiempoJuego, 'minutes');

        // Formatear la nueva hora
        var nuevaHora = finalizacionMoment.format("HH:mm");

        // Actualizar el valor de finalización
        $("#finalizacions").val(nuevaHora);
    });
});