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
// let json = localStorage.getItem('productos');
// let productos = JSON.parse(json) || [];
let productoId = '';

let productos = JSON.parse(localStorage.getItem('productos')) || localStorage.setItem('productos',JSON.stringify([
    {
        "id": "_bh9oa792e",
        "categoria": "Griferías",
        "articulo": "Griferia de Baño 3070",
        "marca": "Hildromet",
        "descripcion": "Griferia Baño Hidromet Monocomando De Cocina One 3070",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IpHNSkmbzIsmLt6KlYStQnCEsMJASiH3-As_LI8QZ5PTa2DX7SPwSRb_smsq.webp?x=1600704300",
        "precio": "35000",
        "cantidad": "10",
        "codigoDeFabricante": "CON-116869",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_3nn57urfq",
        "categoria": "Griferías",
        "articulo": "Griferia de Baño 6380",
        "marca": "Hidromet",
        "descripcion": "Griferia De Baño Monocomando Hidromet Jockey Curvo Black",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IpHNSkmbzIsmMjBW3tGjXgBiFEFtJhe08fT_Si9-5B-218eBFrkC_Zy_smsq.webp?x=1600700770",
        "precio": "30000",
        "cantidad": "5",
        "codigoDeFabricante": "CON-139906",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_ztj7tgrv3",
        "categoria": "Griferías",
        "articulo": "Griferia Baño 3702",
        "marca": "Hidromet",
        "descripcion": "Griferia Baño Hidromet Bidet Jet Cromo",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Ir0Aw97TJoSNPElJfeAGe0ImvWkFBSEGenwhL_GZ8LwKndTrdhKOi2h_smsq.webp?x=1607605429",
        "precio": "9000",
        "cantidad": "10",
        "codigoDeFabricante": "CON-125333",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_ztj7tcrr2",
        "categoria": "Griferías",
        "articulo": "Griferia Baño 3032",
        "marca": "Hidromet",
        "descripcion": "Griferia Baño Hidromet Ducha Escocesa Con Duchador Geometry",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IqSWOx8MXUAqIOWhPT7Frhilqdy-QoKxuTejqakT4Ul37d4XHtW9ZH8_smsq.webp?x=1591621912",
        "precio": "140000",
        "cantidad": "10",
        "codigoDeFabricante": "CON-132032",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_tzj7twrx1",
        "categoria": "Porcelanato",
        "articulo": "Porcelanato 30X60",
        "marca": "Ilva",
        "descripcion": "Porcelanato Ilva 30X60 Marmi Mare",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IpnscF5E7UqJeNNGstSaJfjW9ccm8te-D_q_gi2Nvx18zDJM8pe5rQW_smsq.webp?x=1591622005",
        "precio": "1853",
        "cantidad": "1000",
        "codigoDeFabricante": "CON-141013",
        "unidadDeVenta": "Metros lineales"
    },
    {
        "id": "_wzjztw3xz",
        "categoria": "Porcelanatos",
        "articulo": "Porcelanato 60X120",
        "marca": "Tau",
        "descripcion": "Porcelanato Tau 60X120 Fidenza Gray Semilap",
        "imagen": "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iq67GMVINnC4rIi9kNL9OE3J7LMb0ba1Ty7n51Y_N-3Fm3ek8hTJqYK.jpg",
        "precio": "5200",
        "cantidad": "1000",
        "codigoDeFabricante": "CON-135571",
        "unidadDeVenta": "Metros lineales"
    },
    {
        "id": "_wze2twzx1",
        "categoria": "Porcelanatos",
        "articulo": "Porcelanato de 61cm",
        "marca": "Vite",
        "descripcion": "Cerro Negro Porc. Oxido Claro Sin Rectificar Cal 1Ra",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IrF37OOGq9NtPsHNuK22z2ySX-pCLXMHgzrTZWhMhNR0GZeqmS1TyRn.webp?x=1591621809",
        "precio": "3500",
        "cantidad": "1000",
        "codigoDeFabricante": "CON-136166",
        "unidadDeVenta": "Metros lineales"
    },
    {
        "id": "_cxj31w3zz",
        "categoria": "Porcelanatos",
        "articulo": "Porcelanato 60X120",
        "marca": "Vite",
        "descripcion": "Porcelanato Vite 60X120 Emperador Pulido",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqax7nijXsAIiIp6eyqn9Q4wPqTPxrzoBricDWbS2lc7h7czx8OpioE.webp?x=1604063016",
        "precio": "6900",
        "cantidad": "1000",
        "codigoDeFabricante": "CON-134580",
        "unidadDeVenta": "Metros lineales"
    },
    {
        "id": "_zsf31z2zx",
        "categoria": "Sanitarios",
        "articulo": "Bachas Baño Oval",
        "marca": "Ferrum",
        "descripcion": "Bachas Baño Ferrum Armon Oval Blanco Satinado 3 Ag",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Ir9CMsTecITLZxy6KeeQn927wqQKalD1kteGTS_CyoEzA_smsq.webp?x=1600434165",
        "precio": "12700",
        "cantidad": "8",
        "codigoDeFabricante": "CON-74503",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_zsf32232x",
        "categoria": "Sanitarios",
        "articulo": "Andina Inodoro Cortro",
        "marca": "Ferrum",
        "descripcion": "Ferrum Andina Inodoro Cortro Fuerza Aerea",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Ir-iAu2dSTaSZ8EYAl5Ike-1f_KE4oKXRj8w_W6TIK2LQ_smsq.webp?x=1591618687",
        "precio": "7900",
        "cantidad": "8",
        "codigoDeFabricante": "CON-138929",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_zsa2df2zx",
        "categoria": "Sanitarios",
        "articulo": "Ferrum Largo Negro",
        "marca": "Ferrum",
        "descripcion": "Ferrum Marina Inodoro Largo Negro",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IrPZfP9v-aQCAhDMx_2KVoIyFpsJdQiFrhs2GRR_-qoiGpJp6V-a_HP_smsq.webp?x=1592582666",
        "precio": "125000",
        "cantidad": "2",
        "codigoDeFabricante": "CON-137108",
        "unidadDeVenta": "Piezas"
    },
    {
        "id": "_zsf23s2za",
        "categoria": "Sanitarios",
        "articulo": "Ferrum Trento Blanco",
        "marca": "Ferrum",
        "descripcion": "Ferrum Trento Lavatorio 1 Ag Blanco",
        "imagen": "https://foschia.com.ar/static/uploads/products/webp/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Irn1oJ2dQz4kL8LJKClw00US_oJqtXwp-E_jd8VreNnW7o7razvYti0_smsq.webp?x=1615914270",
        "precio": "41000",
        "cantidad": "2",
        "codigoDeFabricante": "CON-133808",
        "unidadDeVenta": "Piezas"
    }
]));

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