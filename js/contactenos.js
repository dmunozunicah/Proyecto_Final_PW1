document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContacto");
    const respuesta = document.getElementById("respuestaFormulario");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {
            respuesta.textContent = "Por favor, completa todos los campos.";
            respuesta.style.color = "#d14124";
            return;
        }

        respuesta.textContent = "Mensaje enviado correctamente. Pronto nos pondremos en contacto contigo.";
        respuesta.style.color = "#40573e";

        formulario.reset();
    });
});