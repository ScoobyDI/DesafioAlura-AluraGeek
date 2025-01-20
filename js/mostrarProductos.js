import { conexionAPI } from "./conexionAPI.js";
import { configurarEliminarProducto } from "./eliminarProducto.js";  // Asegúrate de importar la función

const lista = document.querySelector("[data-lista]"); // El contenedor donde se mostrarán las tarjetas

// Crear la tarjeta de cada producto
function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.className = "productos__card";
    producto.innerHTML = `
        <img src="${imagen}" class="productos__img" />
        <div class="card-container--info">
            <p class="producto__nombre">${nombre}</p>
            <div class="card-container--value">
                <p class="producto__precio">${precio}</p>
                <img src="./img/trash_icon.png" class="producto__eliminar" />
            </div>
        </div>
    `;

    // Seleccionamos el ícono de eliminar y configuramos el evento
    const eliminarBtn = producto.querySelector(".producto__eliminar");

    // Configuramos el evento de eliminación para esta tarjeta
    configurarEliminarProducto(eliminarBtn, id, nombre, producto);

    return producto;
}

// Listar productos desde la API y agregarlos al DOM
async function listarProductos() {
    const productosAPI = await conexionAPI.listarProductos(); // Obtenemos los productos de la API

    // Limpiar el contenedor antes de agregar nuevos productos
    lista.innerHTML = '';

    // Crear una tarjeta para cada producto y agregarla al contenedor
    productosAPI.forEach(producto => {
        const { nombre, precio, imagen, id } = producto;
        const tarjeta = crearCard(nombre, precio, imagen, id);
        lista.appendChild(tarjeta);  // Agregar la tarjeta al DOM
    });
}

// Llamamos a listarProductos cuando cargue la página
listarProductos();
