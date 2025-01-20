
async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function anadirProducto(nombre,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos",{

        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:`S/. ${precio}`,
            imagen:imagen,
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

// Nueva función para eliminar un producto por su ID
async function eliminarProducto(id) {
    try {
        const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE",
        });
        return conexion.ok; // Devuelve true si se eliminó correctamente
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return false; // Devuelve false si ocurre un error
    }
}


export const conexionAPI={
    listarProductos,
    anadirProducto,
    eliminarProducto
}