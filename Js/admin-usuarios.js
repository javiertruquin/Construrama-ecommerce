const formularioForm = document.getElementById('formulario');
const usuarioInput = document.getElementById('inputUsuario');
const nombreInput = document.getElementById('inputNombre');
const correoInput = document.getElementById('inputCorreo');
const passInput = document.getElementById('inputPass');
const rolInput = document.getElementById('inputRol');
const usuariosTable = document.getElementById('tabla')
// const editarForm = document.getElementById("formularioEditar");
// const editarTituloInput = document.getElementById("editarTitulo");
// const editarContenidoInput = document.getElementById("editarContenido");
// const editarCategoriaInput = document.getElementById("editarCategoria");
const json = localStorage.getItem('usuarios'); 
let usuarios = JSON.parse(json) || []; 
let usuarioId = "";
function generarID() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const usuario = {
        id: generarID(),
        usuario: usuarioInput.value,
        nombre: nombreInput.value,
        correo: correoInput.value,
        pass: passInput.value,
        rol: rolInput.value,
        
    };
    usuarios.push(usuario);
    const json = JSON.stringify(usuarios); // Convertir datos a un string JSON.
    localStorage.setItem('usuarios', json); 
    mostrarUsuarios();
    formularioForm.reset(); // reset limpia los campos del formulario.
};

function mostrarUsuarios() {

    let filas = [];
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const tr = `
            <tr>
                <td>${usuario.usuario}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.correo}</td>
                <td>${usuario.rol}</td>
                <td>
                    <i onclick="mostrarDetalle('${usuario.id}')" class="fas fa-search boton-buscar mx-1"
                        data-bs-toggle="modal" data-bs-target="#modalDetalle"></i>
                    <i onclick="cargarModalEditar('${usuario.id}')" class="fas fa-edit boton-editar mx-1"
                        data-bs-toggle="modal" data-bs-target="#modalEditar"></i>
                    <i onclick="eliminarUsuario('${usuario.id}')" class="fas fa-trash-alt boton-borrar mx-1"></i>
                </td>
            </tr>
        `;
        filas.push(tr);
    }
    usuariosTable.innerHTML = filas.join('');
}

mostrarUsuarios();

function eliminarUsuario(id) {

    let usuariosFiltradas = [];
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const coincideId = usuario.id === id;
        if (!coincideId) {
            usuariosFiltradas.push(usuario);
        }
    }
    const json = JSON.stringify(usuariosFiltradas);
    localStorage.setItem("usuarios", json);
    usuarios = usuariosFiltradas;
    mostrarUsuarios();
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