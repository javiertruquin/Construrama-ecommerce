
function mostrarProductosEnWeb() {
    let productos = JSON.parse(localStorage.getItem('productos'));
    const productosCard = document.getElementById('griferia');
    const modalCard = document.getElementById('modal');
    const productosMap = productos.map(function (producto) {

        return `
        <div class="col-sm-3 card-col p-2" >
        <div class="card card-sm">
            <img src="${producto.imagen}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">$${producto.precio}</h5>
                <p class="card-text">${producto.categoria}</p>
                <p class="card-text">${producto.articulo} ${producto.marca}</p>
                <button class="btn btn-secondary btn-sm"><i
                        class="fas fa-shopping-cart"></i></button>
                <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#${producto.id}">
                    Ver Más
                </button>

                <div class="modal fade" id="${producto.id}" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Descripción</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>${producto.descripcion}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>     
            
        `;
    });

    productosCard.innerHTML = productosMap.join('');
    modalCard.innerHTML = productosMap.join('');


}


mostrarProductosEnWeb()
tablaProductos.onsubmit = submitFormulario;