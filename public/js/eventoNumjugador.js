document.getElementById('jugadores').addEventListener('change', function() {
    var selectedOption = parseInt(this.value);
    var containers = document.querySelectorAll('[id^="jugadorContainer"]');
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
        // Remover el atributo 'required' de los campos del jugador que ya no es necesario
        var inputs = containers[i].querySelectorAll('input, select');
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].removeAttribute('required');
            // Limpiar el contenido de los campos
            inputs[j].value = '';
        }
    }
    for (var i = 1; i <= selectedOption; i++) {
        var container = document.getElementById('jugadorContainer' + i);
        if (container) {
            container.style.display = 'block';
            // Habilitar la validación de campos requeridos dentro del contenedor
            var inputs = container.querySelectorAll('input, select');
            for (var j = 0; j < inputs.length; j++) {
                inputs[j].setAttribute('required', 'required');
            }
        }
    }
});