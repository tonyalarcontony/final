document.addEventListener("DOMContentLoaded", async () => {
    async function fetchProductos() {
        return fetch("https://dummyjson.com/products?limit=12")
            .then(response => response.json())
            .then(data => data.products)
            .catch(error => {
                console.error("Error en fetchProductos:", error);
                return [];
            });
    }

    function agregarAlCarrito(producto) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const existe = carrito.find(item => item.id === producto.id);
        if (existe) {
            alert(`${producto.title} ya está en el carrito.`);
        } else {
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`${producto.title} ha sido agregado al carrito.`);
        }
    }

    const productos = await fetchProductos();
    const productosContainer = document.querySelector("#productos-conteiner");

    productos.forEach(producto => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "col-md-4";

        cardDiv.innerHTML = `
            <div class="card mt-3">
                <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="card-text fw-bold">Precio: $${producto.price}</p>
                    <button class="btn btn-success mt-auto" id="add-${producto.id}">Agregar</button>
                </div>
            </div>
        `;

        const botonAgregar = cardDiv.querySelector(`#add-${producto.id}`);
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        productosContainer.appendChild(cardDiv);
    });
});
