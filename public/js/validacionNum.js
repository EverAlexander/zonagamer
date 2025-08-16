document.getElementById("tipoDocu").addEventListener("change", function() {
    var selectedValue = this.value;
    
    if (selectedValue === "1" || selectedValue === "2") {
        // Mostrar el campo de número de documento
        document.getElementById("numdocumento1").style.display = "block";
        // Hacer el número de documento obligatorio
        document.getElementById("numDocu1").setAttribute("required", "true");
    } else {
        // Ocultar el campo de número de documento
        document.getElementById("numdocumento1").style.display = "none";
        // Eliminar el valor del campo y el atributo requerido
        document.getElementById("numDocu1").removeAttribute("required");
        document.getElementById("numDocu1").value = "";
    }

    if (selectedValue === "3") {
        // Generar un código aleatorio de 6 dígitos
        var codigoAleatorio = Math.floor(100000 + Math.random() * 900000);
        document.getElementById("numDocu1").value = codigoAleatorio;
    } else {
        document.getElementById("numDocu1").value = "";
    }
});


document.getElementById("nacionalidad1").addEventListener("change", function() {
    var selectedValue = this.value;

    if (selectedValue === "1") {
        // Opción Nacional
        document.getElementById("opcionesNacional").style.display = "block";
        document.getElementById("opcionExtranjero").style.display = "none";

        // Ajustar los valores y visibilidad
        document.getElementById("paisExtranjero").value = "El Salvador";
        document.getElementById("tipoEntidad").value = "";
        document.getElementById("lugar").value = "";

        // Hacer requerido el tipo de entidad y remover required del país extranjero
        document.getElementById("tipoEntidad").setAttribute("required", "true");
        document.getElementById("paisExtranjero").removeAttribute("required");
        document.getElementById("lugar").removeAttribute("required");

    } else if (selectedValue === "2") {
        // Opción Extranjero
        document.getElementById("opcionExtranjero").style.display = "block";
        document.getElementById("opcionesNacional").style.display = "none";
        document.getElementById("lugarVisita").style.display = "none";

        // Ajustar los valores y visibilidad
        document.getElementById("tipoEntidad").value = "1";
        document.getElementById("lugar").value = "";
        document.getElementById("paisExtranjero").value = "";

        // Hacer requerido el país extranjero y remover required del tipo de entidad
        document.getElementById("paisExtranjero").setAttribute("required", "true");
        document.getElementById("tipoEntidad").removeAttribute("required");
        document.getElementById("lugar").removeAttribute("required");
    }
});

document.getElementById("tipoEntidad").addEventListener("change", function() {
    var selectedValue = this.value;

    if (selectedValue === "1") {
        document.getElementById("lugarVisita").style.display = "none";
        document.getElementById("lugar").value = "";
        document.getElementById("lugar").removeAttribute("required");
    } else if (selectedValue === "2" || selectedValue === "3" || selectedValue === "4") {
        document.getElementById("lugarVisita").style.display = "block";
        document.getElementById("lugar").setAttribute("required", "true");
    }
});
