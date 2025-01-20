
import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre,precio,imagen){
    const producto = document.createElement("div");
    producto.className="productos__card";
    producto.innerHTML=`
    <img src="${imagen}" class="productos__img" />
        <div class="card-container--info">
            <p class="producto__nombre">${nombre}</p>
            <div class="card-container--value">
                <p class="producto__precio">${precio}</p>
                <img src="./img/trash_icon.png" />
            </div>
        </div>
    `;

    console.log(producto);
    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)));
}

listarProductos();