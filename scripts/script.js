document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById("product-list");

            data.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const productHTML = `
                    <h2>${product.nombre}</h2>
                    <p>${product.descripcion}</p>
                    <button onclick="viewProductDetail('${product.id}')">Ver Detalle</button>
                `;

                productDiv.innerHTML = productHTML;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error al cargar los productos:", error));
});

function viewProductDetail(productId) {
    // Almacenar el ID del producto seleccionado en LocalStorage
    localStorage.setItem("selectedProduct", productId);
    // Redirigir a la página de detalle
    window.location.href = "detalle.html";
}


