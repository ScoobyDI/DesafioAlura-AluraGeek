
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

export const conexionAPI={
    listarProductos,
    anadirProducto
}