document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("botonEvento");
    const mensaje = document.getElementById("mensajeEvento");

    boton.addEventListener("click", function () {
        if (mensaje.classList.contains("oculto")) {
            mensaje.classList.remove("oculto");
            mensaje.textContent = "¡Pronto tendremos más eventos y noches especiales para ti!";
            boton.textContent = "Ocultar mensaje";
        } else {
            mensaje.classList.add("oculto");
            boton.textContent = "Ver aviso";
        }
    });
});