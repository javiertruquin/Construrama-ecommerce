const altaProducto = document.getElementById('formulario');
const categoriaInput = document.getElementById('inputCategoria');
const articuloInput = document.getElementById('inputArticulo');
const marcaInput = document.getElementById('inputMarca');
const descripcionInput= document.getElementById('inputDescripcion');
const imagenInput = document.getElementById('inputImagen');
const precioInput = document.getElementById('inputPrecio');
const codigoDeFabricanteInput = document.getElementById('inputFabricante');
const unidadDeVentaInput = document.getElementById('inputUnidad');
const tablaProductos = document.getElementById('tabla');
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
            <td>${producto.id}</td>
            <td>${producto.categoria}</td>
            <td>${producto.articulo}</td>
            <td>${producto.marca}</td>
            <td>${producto.descripcion}</td>
            <td><img src="${producto.imagen}" alt=""></td>
            <td>${producto.precio}</td>
            <td>${producto.codigoDeFabricante}</td>
            <td>${producto.unidadDeVenta}</td>
            <td>
            <button  onclick="mostrarProductosEnWeb('${producto.id}') " type="button" id="mostrar" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalDetalle"><i class="fas fa-upload"></i> </button>

            </td>
        </tr>`;
        filas.push(tr);
    }
    tablaProductos.innerHTML = filas.join('');
}


mostrarProductos();
altaProducto.onsubmit = submitFormulario;

