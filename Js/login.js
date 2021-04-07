const login = document.getElementById('loginUI');
const usuario = document.getElementById('usuarioUI');
const contra = document.getElementById('contraUI');
const navbar = document.getElementById('navbarUI');
const logInNav = document.getElementById('logInNavUI');
const registrarse = document.getElementById('registrarseUI');
// REGISTRO USUARIO 
const formularioForm = document.getElementById('registro');
const usuarioInput = document.getElementById('inputUsuario');
const nombreInput = document.getElementById('inputNombre');
const correoInput = document.getElementById('inputCorreo');
const passInput = document.getElementById('inputPass');
// CONVERSION DE STRING A ARRAY Y AL REVES
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let usuarioId = "";
let sesionIniciada = [];
let userLog = [];
function generarID() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

function validarUsuarioSubmit(e) {
    e.preventDefault();
    const usuarioValido = usuarios.find((lUsuario) => lUsuario.usuario === usuario.value && lUsuario.pass === contra.value);
    if (usuarioValido) {
        alert("Bienvenido " + usuarioValido.nombre);
        if (usuarioValido.rol === 'Administrador') {
            let logUsuario = `
        <li><a class="nav-link active text-white" aria-current="page" href="./admin-productos.html">Modificar Productos</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="./admin-usuarios.html">Modificar Usuarios</a></li>
        <li><a class="nav-link active text-white" aria-current="page" href="#">USUARIO: ${usuarioValido.usuario}</a></li>
        <li><a class="nav-link active text-white" aria-current="page" id="closeUI" href="#">Cerrar sesion</a></li>
                    `;
            userLog.push(logUsuario);
            sesionIniciada.push(usuarioValido);
            sessionStorage.setItem('sesion', JSON.stringify(sesionIniciada));
            sessionStorage.setItem('log', JSON.stringify(userLog));
        }
        else {
            let logUsuario = `
         <a class="nav-link active text-white" aria-current="page" href="#">USUARIO: ${usuarioValido.usuario}</a>
         <li><a class="nav-link active text-white" aria-current="page" id="closeUI" href="#">Cerrar sesion</a></li>
                    `;
            userLog.push(logUsuario);
            sessionStorage.setItem('log', JSON.stringify(userLog));
        }
        logInNav.style.display = "none";
        registrarse.style.display = "none";
        navbar.innerHTML = userLog.join('');
        verificaSesion();
        window.location="index.html";
    }
    else {
        alert("Usuario o contraseña no coinciden");
    }
    closeSesion();
}

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const usuario = {
        id: generarID(),
        usuario: usuarioInput.value,
        nombre: nombreInput.value,
        correo: correoInput.value,
        pass: passInput.value,
        rol: "Usuario",
    };
    usuarios.push(usuario);
    const json = JSON.stringify(usuarios); // Convertir datos a un string JSON.
    localStorage.setItem('usuarios', json);
    const myModal = document.getElementById('formulario')
    const modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();
    formularioForm.reset(); // reset limpia los campos del formulario.
};

function verificaSesion() {
    console.log(sessionStorage.getItem('sesion'));
    if (sessionStorage.getItem('sesion') === null) {  }
    else {
        logInNav.style.display = "none";
        registrarse.style.display = "none";
        let log = JSON.parse(sessionStorage.getItem('log')) || [];
        navbar.innerHTML = log.join('');
    }
   closeSesion();
}
function closeSesion () {
    const close = document.getElementById('closeUI');
    close.addEventListener('click', function () {
        location.href = 'index.html'
        sessionStorage.removeItem('sesion');
    })
}
login.onsubmit = validarUsuarioSubmit;
verificaSesion();