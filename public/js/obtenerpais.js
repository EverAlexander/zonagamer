$(document).ready(function() {
    $("#nacionalidad").change(function() {
        var selectedOption = $(this).val();
        var paisContainer = $("#paisContainer");
        var paisInput = $("#pais");
        if (selectedOption === "opcion1") {
            paisContainer.hide();
            paisInput.prop('readonly', true); // Bloquear la entrada de texto
        } else if (selectedOption === "Nacional") {
            paisContainer.hide();
            paisInput.val("El Salvador");
            paisInput.prop('readonly', true); // Bloquear la entrada de texto
        } else if (selectedOption === "Extranjero") {
            paisContainer.show();
            paisInput.val("");
            paisInput.prop('readonly', false); // Permitir la entrada de texto
        }
    });
});