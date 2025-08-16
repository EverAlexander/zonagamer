function validarFormulario() {
    var usuario = document.getElementById("nombreUsuario1").value;
    //var  = document.getElementById("resena").value;
    if (usuario == "") {
        alert("Todos los campos son obligatorios.111");
        return false;
    }


    return true;
}