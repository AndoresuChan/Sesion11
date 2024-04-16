document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envio del formulario por defecto

    // Sacar datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    // validar
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length > 20) {
        mostrarMensajeError("El nombre debe tener maximo 20 caracteres.");
    } else if (!emailRegex.test(email)) {
        mostrarMensajeError("El correo electrónico no es valido.");
    } else {
        mostrarMensajeExito("Formulario enviado correctamente!");

        // mostrar lista de usuarios
        var listaUsuarios = document.getElementById('listaUsuarios');
        var nuevoUsuario = document.createElement('li');
        nuevoUsuario.textContent = `Nombre: ${nombre}, Correo Electrónico: ${email}, Teléfono: ${telefono}`;
        listaUsuarios.appendChild(nuevoUsuario);

        // limpiar formulario
        document.getElementById('registroForm').reset();
    }
});

function mostrarMensajeError(mensaje) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.color = 'red';
    mensajeDiv.textContent = mensaje;
}

function mostrarMensajeExito(mensaje) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.color = 'green';
    mensajeDiv.textContent = mensaje;
}
