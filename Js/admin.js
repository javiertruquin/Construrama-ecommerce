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
const editarUnidadDeVentaInput = document.getElementById("editarUnidad");
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
            <td class="chico2 colum-pequeña text-center">${producto.codigoDeFabricante}</td>
            <td class="chico2 colum-pequeña text-center">${producto.categoria}</td>
            <td class="chico2 colum-pequeña text-center">${producto.articulo}</td>
            <td class="chico2 colum-pequeña text-center">$${producto.precio}</td>
            <td class="chico2 colum-pequeña text-center">${producto.cantidad}</td>
            <td>
            <i onclick="mostrarDetalle('${producto.id}')" class="fas fa-search boton-buscar mx-1 text-center"
                data-bs-toggle="modal" data-bs-target="#modalDetalle"></i>
            <i onclick="cargarModalEditar('${producto.id}')" class="fas fa-edit boton-editar mx-1 text-center"
                data-bs-toggle="modal" data-bs-target="#modalEditar"></i>
            <i onclick="eliminarProducto('${producto.id}')" class="fas fa-trash-alt boton-borrar mx-1 text-center"></i>                           
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

function mostrarDetalle(id) {
    const productoEncontrado = productos.find((producto) => producto.id === id);
    console.log("mostrarDetalle ~ productoEncontrado", productoEncontrado)
    const detalleDiv = document.getElementById("detalleProducto");
    const detalleProducto = `
    <div class="d-flex">
        <div class="">
            <h5><b>Categoria: </b></h5> <p>${productoEncontrado.categoria}</p>
            <h5><b>Artículo y Apellido:</b></h5> <p>${productoEncontrado.articulo}</p>
            <h5><b>Marca:</b></h5> <p>${productoEncontrado.marca}</p>
            <h5><b>Descripcion:</b></h5> <p>${productoEncontrado.descripcion}</p>
            <h5><b>Precio:</b></h5> <p>$ ${productoEncontrado.precio}</p>
            <h5><b>Cantidad:</b></h5> <p>${productoEncontrado.cantidad}</p>
            <h5><b>Codigo de fabricante:</b></h5> <p>${productoEncontrado.codigoDeFabricante}</p>
            <h5><b>Unidad de venta:</b></h5> <p>${productoEncontrado.unidadDeVenta}</p>
        </div>
        <div class="">
            <h5><b>Imagen: </b></h5>
            <img src="${productoEncontrado.imagen}" class="" alt="...">
        </div>
    </div>

    `;
    detalleDiv.innerHTML = detalleProducto;
}

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
    editarUnidadDeVentaInput.value = productoEncontrado.unidadDeVenta;
    productoId = productoEncontrado.id;
}

editarForm.onsubmit = function (e) {
    e.preventDefault();

    const productosModificados = productos.map((producto) => {
        if (producto.id === productoId) {
            const productosModificados = {
                ...producto,
                categoria: editarCategoriaInput.value,
                articulo: editarArticuloInput.value,
                marca: editarMarcaInput.value,
                descripcion: editarDescripcionInput.value,
                imagen: editarImagenInput.value,
                precio: editarPrecioInput.value,
                cantidad: editarCantidadInput.value,
                codigoDeFabricante: editarCodigoDeFabricanteInput.value,
                unidadDeVenta: editarUnidadDeVentaInput.value,
            };
            return productosModificados;
        } else {
            return producto;
        }
    });

    const json = JSON.stringify(productosModificados);
    localStorage.setItem("productos", json);
    productos = productosModificados;
    mostrarProductos();
    const myModal = document.getElementById('modalEditar')
    const modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();
    formularioForm.reset();
};