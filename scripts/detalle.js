document.addEventListener("DOMContentLoaded", () => {
    const selectedProductId = localStorage.getItem("selectedProduct");
    if (!selectedProductId) {
        // Si no hay producto seleccionado, redirigir a la página principal
        window.location.href = "index.html";
    } else {
        fetch("productos.json")
            .then(response => response.json())
            .then(data => {
                const selectedProduct = data.find(product => product.id === selectedProductId);

                if (selectedProduct) {
                    const productDetail = document.getElementById("product-detail");
                    const productHTML = `
                        <h2>${selectedProduct.nombre}</h2>
                        <img src="${selectedProduct.imagen}" alt="${selectedProduct.nombre}">
                        <p>${selectedProduct.detalle}</p>
                        <p>Precio: $${selectedProduct.precio}</p>
                        <a href="index.html">Volver a la página principal</a>
                    `;
                    productDetail.innerHTML = productHTML;
                } else {
                    console.error("Producto no encontrado.");
                }
            })
            .catch(error => console.error("Error al cargar el detalle del producto:", error));
    }
});

  