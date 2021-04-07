const altaProducto = document.getElementById('formulario');
const categoriaInput = document.getElementById('inputCategoria');
const articuloInput = document.getElementById('inputArticulo');
const marcaInput = document.getElementById('inputMarca');
const descripcionInput= document.getElementById('inputDescripcion');
const imagenInput = document.getElementById('inputImagen');
const precioInput = document.getElementById('inputPrecio');
const cantidadInput = document.getElementById('inputCantidad');
const codigoDeFabricanteInput = document.getElementById('inputFabricante');
const unidadDeVentaInput = document.getElementById('inputUnidad');
const tablaProductos = document.getElementById('tabla');
const editarForm = document.getElementById("formularioEditar");
const editarCategoriaInput = document.getElementById("editarCategoria");
const editarArticuloInput = document.getElementById("editarArticulo");
const editarMarcaInput = document.getElementById("editarMarca");
const editarDescripcionInput = document.getElementById("editarDescripcion");
const editarImagenInput = document.getElementById("editarImagen");
const editarPrecioInput = document.getElementById("editarPrecio");
const editarCantidadInput = document.getElementById("editarCantidad");
const editarCodigoDeFabricanteInput = document.getElementById("editarFabricante");
const editarUnidadInput = document.getElementById("editarUnidad");
let json = localStorage.getItem('productos');
let productos = JSON.parse(json) || [];
let productoId = '';

function generarID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

function submitFormulario(e) {
    e.preventDefault();
    let producto = {
        id: generarID(),
        categoria: categoriaInput.value,
        articulo: articuloInput.value,
        marca: marcaInput.value,
        descripcion: descripcionInput.value,
        imagen: imagenInput.value,
        precio: precioInput.value,
        cantidad:cantidadInput.value,
        codigoDeFabricante: codigoDeFabricanteInput.value,
        unidadDeVenta: unidadDeVentaInput.value,
    };
    productos.push(producto);
    let json = JSON.stringify(productos);
    localStorage.setItem('productos', json);
    mostrarProductos();
    altaProducto.reset();
};


function mostrarProductos() {
    let filas = [];
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let tr =
            `<tr>
            <td >${producto.codigoDeFabricante}</td>
            <td class="colum-pequeña">${producto.categoria}</td>
            <td class="colum-pequeña">${producto.articulo}</td>
            <td class="colum-pequeña">${producto.marca}</td>
            <td>${producto.descripcion}</td>
            <td class="imagen-table"><img class="imagen-table"src="${producto.imagen}" alt=""></td>
            <td class="colum-pequeña">$${producto.precio}</td>
            <td class="colum-pequeña">${producto.cantidad}</td>
            <td class="colum-pequeña">${producto.unidadDeVenta}</td>
            <td>
            <i onclick="mostrarProductosEnWeb('${producto.id}')" class="fas fa-upload boton-subir mx-1"></i>
            <i onclick="mostrarDetalle('${producto.id}')" class="fas fa-search boton-buscar mx-1"
                data-bs-toggle="modal" data-bs-target="#modalDetalle"></i>
            <i onclick="cargarModalEditar('${producto.id}')" class="fas fa-edit boton-editar mx-1"
                data-bs-toggle="modal" data-bs-target="#modalEditar"></i>
            <i onclick="eliminarProducto('${producto.id}')" class="fas fa-trash-alt boton-borrar mx-1"></i>                           
                </td>

        </tr>`;
        filas.push(tr);
    }
    tablaProductos.innerHTML = filas.join('');
}


mostrarProductos();
altaProducto.onsubmit = submitFormulario;

function eliminarProducto(id) {

    let productosFiltradas = [];
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const coincideId = producto.id === id;
        if (!coincideId) {
            productosFiltradas.push(producto);
        }
    }
    const json = JSON.stringify(productosFiltradas);
    localStorage.setItem("productos", json);
    productos = productosFiltradas;
    mostrarProductos();
}

// function mostrarDetalle(id) {
//     const notaEncontrada = notas.find((nota) => nota.id === id);
//     console.log("mostrarDetalle ~ notaEncontrada", notaEncontrada)
//     const detalleDiv = document.getElementById("detalleNota");
//     const detalleNota = `
//     <p>Titulo: ${notaEncontrada.titulo}</p>
//     <p>Detalle: ${notaEncontrada.contenido}</p>
//     <p>Prioridad: ${notaEncontrada.categoria}</p>
//     `;
//     detalleDiv.innerHTML = detalleNota;
// }

function cargarModalEditar(id) {
    const productoEncontrado = productos.find((producto) => producto.id === id);
    editarCategoriaInput.value = productoEncontrado.categoria;
    editarArticuloInput.value = productoEncontrado.articulo;
    editarMarcaInput.value = productoEncontrado.marca;
    editarDescripcionInput.value = productoEncontrado.descripcion;
    editarImagenInput.value = productoEncontrado.imagen;
    editarPrecioInput.value = productoEncontrado.precio;
    editarCantidadInput.value = productoEncontrado.cantidad;
    editarCodigoDeFabricanteInput.value = productoEncontrado.codigoDeFabricante;
    editarUnidadInput.value = productoEncontrado.unidadDeVenta;
    productoId = productoEncontrado.id;
}

// editarForm.onsubmit = function (e) {
//     e.preventDefault();

//     const notasModificadas = notas.map((nota) => {
//         if (nota.id === notaId) {
//             const notasModificadas = {
//                 ...nota,
//                 titulo: editarTituloInput.value,
//                 contenido: editarContenidoInput.value,
//                 categoria: editarCategoriaInput.value,
//             };
//             return notasModificadas;
//         } else {
//             return nota;
//         }
//     });

//     const json = JSON.stringify(notasModificadas);
//     localStorage.setItem("notas", json);
//     notas = notasModificadas;
//     mostrarnotas();
//     const myModal = document.getElementById('modalEditar')
//     const modal = bootstrap.Modal.getInstance(myModal);
//     modal.hide();
//     formularioForm.reset();
// };