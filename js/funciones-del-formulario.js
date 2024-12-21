document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function (event) {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !apellido || !email || !mensaje) {
            event.preventDefault();
            alert("Por favor, completa todos los campos antes de enviar.");
        }
    });
});

