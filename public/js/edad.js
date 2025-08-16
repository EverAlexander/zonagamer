function validarEdad(input) {
    // Solo se corrige si el valor final es menor a 7 al perder el foco
    if (input.value !== "" && Number(input.value) < 7) {
        input.value = "";  // Vacía el campo si es menor que 7
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const edadInput = document.getElementById('edad1');
    
    // Validar la edad cuando el campo pierde el foco (blur)
    edadInput.addEventListener('blur', function() {
        validarEdad(edadInput);
    });

    // Evitar valores negativos al escribir
    edadInput.addEventListener('input', function() {
        // Permitir solo números y prevenir números negativos
        this.value = this.value.replace(/[^0-9]/g, '');  // Solo permite dígitos
    });
});