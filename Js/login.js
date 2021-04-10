const login = document.getElementById('loginUI');
const usuario = document.getElementById('usuarioUI');
const contra = document.getElementById('contraUI');
const navbar = document.getElementById('navbarUI');
const logInNav = document.getElementById('logInNavUI');
const registrarse = document.getElementById('registrarseUI');
// REGISTRO USUARIO 
const formularioFormLog = document.getElementById('registro');
const usuarioInputUI = document.getElementById('inputUsuario');
const nombreInputUI = document.getElementById('inputNombre');
const correoInputUI = document.getElementById('inputCorreo');
const passInputUI = document.getElementById('inputPass');
const usuarioExLabel = document.getElementById('usuarioExisteUI');
const verificaPass = document.getElementById('inputPass2');
const verificaPassLabel = document.getElementById('contraseñaCoinciden');
// EDITAR PERFIL
const editarFormPerfil = document.getElementById("formularioEditarPerfil");
const editarUsuarioPerfil = document.getElementById("editarUsuarioUI");
const editarNombrePerfil = document.getElementById("editarNombreUI");
const editarCorreoPerfil = document.getElementById("editarCorreoUI");
const editarPassPerfil = document.getElementById("editarPassUI");
// ARREGLOS INICIALIZADOS
let sesionIniciada = [];
let userLog = [];
let usuariosPag = JSON.parse(localStorage.getItem('usuarios')) || []; // CONVERSION DE STRING A ARRAY Y AL REVES

function generarID() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

function validarUsuarioSubmit(e) {
    e.preventDefault();
    const usuarioValido = usuariosPag.find((lUsuario) => lUsuario.usuario === usuario.value && lUsuario.pass === contra.value);
    if (usuarioValido) {
        alert("Bienvenido " + usuarioValido.nombre);
        if (usuarioValido.rol === 'Administrador') {
            let logUsuario = `
        <li><a class="nav-link active text-white" aria-current="page" href="./index.html">Inicio</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="./admin-productos.html">Modificar Productos</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="./admin-usuarios.html">Modificar Usuarios</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="" data-bs-toggle="modal" data-bs-target="#modalEditarPerfil" onclick="cargarModalEditarPerfil('${usuarioValido.id}')">USUARIO: ${usuarioValido.usuario}</a></li>
        <li><a class="nav-link active text-white" aria-current="page" id="closeUI" href="#">Cerrar sesion</a></li>
                    `;
            userLog.push(logUsuario);
            sesionIniciada.push(usuarioValido);
            sessionStorage.setItem('sesion', JSON.stringify(sesionIniciada));
            sessionStorage.setItem('log', JSON.stringify(userLog));
            window.location = "admin-usuarios.html";
        }
        else if (usuarioValido.rol === 'Empleado') {
            let logUsuario = `
        <li><a class="nav-link active text-white" aria-current="page" href="./index.html">Inicio</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="./admin-productos.html">Modificar Productos</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="" data-bs-toggle="modal" data-bs-target="#modalEditarPerfil" onclick="cargarModalEditarPerfil('${usuarioValido.id}')">USUARIO: ${usuarioValido.usuario}</a></li>
        <li><a class="nav-link active text-white" aria-current="page" id="closeUI" href="#">Cerrar sesion</a></li>
                    `;
            userLog.push(logUsuario);
            sesionIniciada.push(usuarioValido);
            sessionStorage.setItem('sesion', JSON.stringify(sesionIniciada));
            sessionStorage.setItem('log', JSON.stringify(userLog));
            window.location = "admin-productos.html"
        }
        else {
            let logUsuario = `
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="./index.html">Inicio</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Productos </a>
              <ul class="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item text-white" href="#sec-griferia">Griferia</a></li>
              <li><a class="dropdown-item text-white" href="#sec-porcelanato">Porcelanato</a></li>
              <li><a class="dropdown-item text-white" href="#sec-sanitarios">Sanitario</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="./index.html#sec-sobrenosotros">Sobre Nosotros</a>
            </li>
            <li><a class="nav-link active text-white" aria-current="page" href="" data-bs-toggle="modal" data-bs-target="#modalEditarPerfil" onclick="cargarModalEditarPerfil('${usuarioValido.id}')">USUARIO: ${usuarioValido.usuario}</a></li>
         <li><a class="nav-link active text-white" aria-current="page" id="closeUI" href="#">Cerrar sesion</a></li>
                    `;
            userLog.push(logUsuario);
            sesionIniciada.push(usuarioValido);
            sessionStorage.setItem('sesion', JSON.stringify(sesionIniciada));
            sessionStorage.setItem('log', JSON.stringify(userLog));
            window.location = "index.html";
        }
        navbar.innerHTML = userLog.join('');
        verificaSesion();

    }
    else {
        alert("Usuario o contraseña no coinciden");
    }
    closeSesion();
}

function enviarFormularioRegistro(e) {
    e.preventDefault();
    const usuario = {
        id: generarID(),
        usuario: usuarioInputUI.value,
        nombre: nombreInputUI.value,
        correo: correoInputUI.value,
        pass: passInputUI.value,
        rol: "Usuario",
    };
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarioExiste = usuarios.find((usuarioEx) => usuarioEx.usuario === usuarioInputUI.value)
    if (usuarioExiste == null || undefined) {
        if (passInputUI.value === verificaPass.value) {
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
            const myModal = document.getElementById('formulario')
            const modal = bootstrap.Modal.getInstance(myModal);
            modal.hide();
            alert("Bienvenido a Construrama " + usuario.nombre + " se registro exitosamente");
        }
        else {
            verificaPassLabel.classList.remove('d-none');
        }
    }
    else {
        usuarioExLabel.classList.remove('d-none');
    }
    formularioFormLog.reset();
};

function verificaSesion() {
    if (sessionStorage.getItem('sesion') === null) { }
    else {
        let log = JSON.parse(sessionStorage.getItem('log')) || [];
        navbar.innerHTML = log.join('');
    }
    closeSesion();
}
function closeSesion() {
    const close = document.getElementById('closeUI');
    close.addEventListener('click', function () {
        location.href = 'index.html'
        sessionStorage.removeItem('sesion');
    })
}

// EDITAR MODAL PERFIL
function cargarModalEditarPerfil(id) {
    let usuarioEncontrado = usuariosPag.find((lUsuario) => lUsuario.id === id);
    editarUsuarioPerfil.value = usuarioEncontrado.usuario;
    editarNombrePerfil.value = usuarioEncontrado.nombre;
    editarCorreoPerfil.value = usuarioEncontrado.correo;
    editarPassPerfil.value = usuarioEncontrado.pass;
    usuarioId = usuarioEncontrado.id;
}
// ENVIAR FORMULARIO
editarFormPerfil.onsubmit = function (e) {
    e.preventDefault();
    const usuariosModificados = usuariosPag.map((lUsuario) => {
        if (lUsuario.id === usuarioId) {
            const usuariosModificados = {
                ...lUsuario,
                id: usuarioId,
                usuario: editarUsuarioPerfil.value,
                nombre: editarNombrePerfil.value,
                correo: editarCorreoPerfil.value,
                pass: editarPassPerfil.value,
                rol: lUsuario.rol,
            };
            return usuariosModificados;

        } else {
            return lUsuario;

        }
    });
    localStorage.setItem("usuarios", JSON.stringify(usuariosModificados));
    usuariosPag = usuariosModificados;
    verificaSesion();
    const myModal = document.getElementById('modalEditarPerfil')
    const modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();
    editarFormPerfil.reset();
};

login.onsubmit = validarUsuarioSubmit;
formularioFormLog.onsubmit = enviarFormularioRegistro;
verificaSesion();