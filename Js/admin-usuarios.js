const formularioForm = document.getElementById('formulario');
const usuarioInput = document.getElementById('inputUsuario');
const nombreInput = document.getElementById('inputNombre');
const correoInput = document.getElementById('inputCorreo');
const passInput = document.getElementById('inputPass');
const rolInput = document.getElementById('inputRol');
const usuariosTable = document.getElementById('tabla')
const editarForm = document.getElementById("formularioEditar");
const editarUsuarioInput = document.getElementById("editarUsuario");
const editarNombreInput = document.getElementById("editarNombre");
const editarCorreoInput = document.getElementById("editarCorreo");
const editarPassInput = document.getElementById("editarPass");
const editarRolInput = document.getElementById("editarRol");
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
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); 
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
//     const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);
//     const detalleDiv = document.getElementById("detalleUsuario");
//     const detalleUsuario = `
//     <p>Usuario: ${usuarioEncontrado.usuario}</p>
//     <p>Correo: ${usuarioEncontrado.correo}</p>
//     <p>Rol: ${usuarioEncontrado.rol}</p>
//     `;
//     detalleDiv.innerHTML = detalleUsuario;
// }

function cargarModalEditar(id) {
    const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);
    console.log("cargarModalEditar ~ usuarioEncontrado", usuarioEncontrado)
    editarUsuarioInput.value = usuarioEncontrado.usuario;
    editarNombreInput.value = usuarioEncontrado.nombre;
    editarCorreoInput.value = usuarioEncontrado.correo;
    editarPassInput.value = usuarioEncontrado.pass;
    editarRolInput.value =usuarioEncontrado.rol;
    usuarioId = usuarioEncontrado.id;
}

editarForm.onsubmit = function (e) {
    e.preventDefault();

    const usuariosModificados = usuarios.map((usuario) => {
        if (usuario.id === usuarioId) {
            const usuariosModificados = {
                ...usuario,
                usuario: editarUsuarioInput.value,
                nombre: editarNombreInput.value,
                coreo: editarCorreoInput.value,
                pass: editarPassInput.value,
                rol: editarRolInput.value,

            };
            return usuariosModificados;
        } else {
            return usuario;
        }
    });
    const json = JSON.stringify(usuariosModificados);
    localStorage.setItem("usuarios", json);
    usuarios = usuariosModificados;
    mostrarUsuarios();
    const myModal = document.getElementById('modalEditar')
    const modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();
    formularioForm.reset();
};
