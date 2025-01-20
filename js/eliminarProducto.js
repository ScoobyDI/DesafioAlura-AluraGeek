import { conexionAPI } from "./conexionAPI.js";

export function configurarEliminarProducto(elemento, id, nombre, contenedor) {
    // Añadir un listener de clic al botón de eliminar
    elemento.addEventListener("click", async () => {
        // Confirmación antes de eliminar
        const confirmado = confirm(`¿Deseas eliminar el producto "${nombre}"?`);
        if (confirmado) {
            // Llamar a la función eliminarProducto de conexionAPI
            const eliminado = await conexionAPI.eliminarProducto(id);
            if (eliminado) {
                // Si la eliminación fue exitosa, eliminar del DOM
                contenedor.remove();
                alert("Producto eliminado correctamente.");
            } else {
                alert("Hubo un problema al eliminar el producto.");
            }
        }
    });
}
