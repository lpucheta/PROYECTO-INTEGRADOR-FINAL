document.addEventListener("DOMContentLoaded", function(){
    const productList = document.getElementById("product-list");

fetch("productos.json")
.then((response) => response.json())
.then((data) => {
data.forEach((producto) =>{
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    <button onclick="verDetalle ${producto.id}">Ver Detalle</button>
    `;
    productList.appendChild(productDiv);
});
})

.catch((error) => {
    console.error("Error al cargar el archivo JSON", error);
});

});

function verDetalle(id){
    localStorage.setItem("productoSeleccionado", JSON.stringify({id}));
    
    window.location.href = "detalle.html";
}




