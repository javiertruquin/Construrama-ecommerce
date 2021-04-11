const productosCardGriferia = document.getElementById("griferia");
const productosCardPorcelanato = document.getElementById("porcelanato");
const productosCardSanitario = document.getElementById("sanitario");
const modalCard = document.getElementById("modal");
const inerCard1 = [];
const inerCard2 = [];
const inerCard3 = [];
// function mostrarProductosEnWeb() {

function productosIndex() {
    let productos = JSON.parse(localStorage.getItem("productos"));
    let productosEncontrados = productos.map((cat) => {
        if (cat.categoria === "Griferías") {
            let card = `
                <div class="col-sm-3 card-col p-2" >
                <div class="card card-sm">
                    <img src="${cat.imagen}"
                        class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">$${cat.precio}</h5>
                        <p class="card-text">${cat.categoria}</p>
                        <p class="card-text">${cat.articulo} - ${cat.marca}</p>
                        <button class="btn btn-secondary btn-sm"><i
                                class="fas fa-shopping-cart"></i></button>
                                <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                                data-bs-target="#${cat.id}">
                                Ver Más
                        </button>
                        <div class="modal fade" id="${cat.id}" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel"><b>Descripción</b></h5>
                                        </div>
                                        <div class="d-flex">
                                            <div class="m-5">
                                                <h5><b>Categoria: </b></h5> <p>${cat.categoria}</p>
                                                <h5><b>Artículo y Apellido:</b></h5> <p>${cat.articulo}</p>
                                                <h5><b>Marca:</b></h5> <p>${cat.marca}</p>
                                                <h5><b>Descripcion:</b></h5> <p>${cat.descripcion}</p>
                                                <h5><b>Precio:</b></h5> <p>$ ${cat.precio}</p>
                                                <h5><b>Cantidad:</b></h5> <p>${cat.cantidad}</p>
                                                <h5><b>Codigo de fabricante:</b></h5> <p>${cat.codigoDeFabricante}</p>
                                                <h5><b>Unidad de venta:</b></h5> <p>${cat.unidadDeVenta}</p>
                                            </div>
                                            <div class="m-5" style="width:400px">
                                                <h5><b>Imagen: </b></h5>
                                                <img src="${cat.imagen}" class="w-100" alt="...">
                                            </div>
                                        </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                    </div>
                    </div>
                    </div>     
                    
                    `;
            inerCard1.push(card);
            productosCardGriferia.innerHTML = inerCard1.join("");
            modalCard.innerHTML = inerCard1.join("");
        } else if (cat.categoria === "Sanitarios") {
            let card = `
            <div class="col-sm-3 card-col p-2" >
            <div class="card card-sm">
                <img src="${cat.imagen}"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">$${cat.precio}</h5>
                    <p class="card-text">${cat.categoria}</p>
                    <p class="card-text">${cat.articulo} ${cat.marca}</p>
                    <button class="btn btn-secondary btn-sm"><i
                            class="fas fa-shopping-cart"></i></button>
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#${cat.id}">
                            Ver Más
                    </button>
                    <div class="modal fade" id="${cat.id}" data-bs-backdrop="static"
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
                                    <p>${cat.descripcion}</p>
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
            inerCard2.push(card);
            productosCardSanitario.innerHTML = inerCard2.join("");
            modalCard.innerHTML = inerCard2.join("");
        } else {
            let card = `
            <div class="col-sm-3 card-col p-2" >
            <div class="card card-sm">
                <img src="${cat.imagen}"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">$${cat.precio}</h5>
                    <p class="card-text">${cat.categoria}</p>
                    <p class="card-text">${cat.articulo} ${cat.marca}</p>
                    <button class="btn btn-secondary btn-sm"><i
                            class="fas fa-shopping-cart"></i></button>
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#${cat.id}">
                            Ver Más
                    </button>
                    <div class="modal fade" id="${cat.id}" data-bs-backdrop="static"
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
                                    <p>${cat.descripcion}</p>
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
            inerCard3.push(card);
            productosCardPorcelanato.innerHTML = inerCard3.join("");
            modalCard.innerHTML = inerCard3.join("");
        }
    });
}
productosIndex();
