// Validación para evitar letras en el campo de entrada numérica
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numDocu1').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
    });

    // Validación de letras y espacios en el campo 'nombreUsuario1'
    document.getElementById('nombreUsuario1').addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZñÑ\s]/g, ''); // Elimina todo excepto letras y espacios
    });

    // Validación de letras y espacios en el campo 'paisExtranjero'
    document.getElementById('paisExtranjero').addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZñÑ\s]/g, ''); // Elimina todo excepto letras, "ñ", "Ñ" y espacios
    });

});
