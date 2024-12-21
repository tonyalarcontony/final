document.addEventListener("DOMContentLoaded", () => {
    const carritoItemStorage = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoTableBody = document.getElementById("carrito-items");
    const totalGeneral = document.getElementById("total");
    let total = 0;

    carritoItemStorage.forEach(item => {
        const row = document.createElement("tr");

        // Celda del nombre
        const nombreCelda = document.createElement("td");
        nombreCelda.textContent = item.title;
        row.appendChild(nombreCelda);

        // Celda del precio
        const precioCelda = document.createElement("td");
        precioCelda.textContent = `$${item.price}`;
        row.appendChild(precioCelda);

        // Celda de cantidad (por defecto 1)
        const cantidadCelda = document.createElement("td");
        cantidadCelda.textContent = 1; // Puedes hacerlo dinámico más adelante
        row.appendChild(cantidadCelda);

        // Celda del subtotal
        const subtotal = item.price; // Asume que la cantidad es 1
        const subtotalCelda = document.createElement("td");
        subtotalCelda.textContent = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        // Añadir fila a la tabla
        carritoTableBody.appendChild(row);

        // Sumar al total general
        total += subtotal;
    });

    // Mostrar total general en la página
    totalGeneral.textContent = `$${total.toFixed(2)}`;

});
document.getElementById(`limpiar-carrito`).addEventListener(`click`, () => {
    localStorage.removeItem(`carrito`);
    window.location.href = `index.html`;
})

document.getElementById(`finalizar`).addEventListener(`click`, () => {
    Swal.fire("Gracias por tu Compra");


    localStorage.removeItem(`carrito`);
    setTimeout(() => {
        window.location.href = `index.html`;

    }, 4000);
});







