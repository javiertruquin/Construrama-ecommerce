const formularioForm = document.getElementById('formulario');
const categoriaInput = document.getElementById('inputCategoria');
const articuloInput = document.getElementById('inputArticulo');
const marcaInput = document.getElementById('inputMarca');
const precioInput = document.getElementById('inputPrecio');
const fabricanteInput = document.getElementById('inputFabricante');
const unidadInput = document.getElementById('inputUnidad');
const productosTable = document.getElementById('tabla')
// const editarForm = document.getElementById("formularioEditar");
// const editarTituloInput = document.getElementById("editarTitulo");
// const editarContenidoInput = document.getElementById("editarContenido");
// const editarCategoriaInput = document.getElementById("editarCategoria");
const json = localStorage.getItem('productos'); 
let productos = JSON.parse(json) || []; 
let productoId = "";
function generarID() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const producto = {
        id: generarID(),
        categoria: categoriaInput.value,
        articulo: articuloInput.value,
        marca: marcaInput.value,
        precio: precioInput.value,
        fabricante: fabricanteInput.value,
        unidad: unidadInput.value
    };
    productos.push(producto);
    const json = JSON.stringify(productos); // Convertir datos a un string JSON.
    localStorage.setItem('productos', json); 
    mostrarProductos();
    formularioForm.reset(); // reset limpia los campos del formulario.
};

function mostrarProductos() {

    let filas = [];
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const tr = `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.categoria}</td>
                <td>${producto.articulo}</td>
                <td>${producto.marca}</td>
                <td>${producto.precio}</td>
                <td>${producto.fabricante}</td>
                <td>${producto.unidad}</td>
                <td>
                    <i onclick="mostrarDetalle('${producto.id}')" class="fas fa-search boton-buscar mx-1"
                        data-bs-toggle="modal" data-bs-target="#modalDetalle"></i>
                    <i onclick="cargarModalEditar('${producto.id}')" class="fas fa-edit boton-editar mx-1"
                        data-bs-toggle="modal" data-bs-target="#modalEditar"></i>
                    <i onclick="eliminarProducto('${producto.id}')" class="fas fa-trash-alt boton-borrar mx-1"></i>                           
                </td>
            </tr>
        `;
        filas.push(tr);
    }
    productosTable.innerHTML = filas.join('');
}

mostrarProductos();

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

// function cargarModalEditar(id) {
//     const notaEncontrada = notas.find((nota) => nota.id === id);
//     editarTituloInput.value = notaEncontrada.titulo;
//     editarContenidoInput.value = notaEncontrada.contenido;
//     editarCategoriaInput.value = notaEncontrada.categoria;
//     notaId = notaEncontrada.id;
// }

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