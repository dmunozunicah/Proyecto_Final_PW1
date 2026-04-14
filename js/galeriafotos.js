document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".item-galeria img");
    const visor = document.getElementById("visor");
    const imagenVisor = document.getElementById("imagenVisor");
    const cerrarVisor = document.getElementById("cerrarVisor");

    imagenes.forEach(function (imagen) {
        imagen.addEventListener("click", function () {
            visor.style.display = "flex";
            imagenVisor.src = this.src;
            imagenVisor.alt = this.alt;
        });
    });

    cerrarVisor.addEventListener("click", function () {
        visor.style.display = "none";
    });

    visor.addEventListener("click", function (e) {
        if (e.target === visor) {
            visor.style.display = "none";
        }
    });
});