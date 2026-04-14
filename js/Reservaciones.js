document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll("button");

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            let nombreReserva = this.parentElement.querySelector("h2").textContent;
            alert("Has seleccionado: " + nombreReserva + ". Pronto podrás completar tu reservación.");
        });
    });
});