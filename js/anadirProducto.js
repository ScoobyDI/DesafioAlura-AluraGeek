
import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function anadirProducto(evento) {

    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.anadirProducto(nombre,precio,imagen);

    window.location.href="./index.html";
}



formulario.addEventListener("submit",evento => anadirProducto(evento))