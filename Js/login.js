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
const json = localStorage.getItem('usuarios');
let usuarios = JSON.parse(json) || [];
let usuarioId = "";

function generarID() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

function validarUsuarioSubmit(e) {
    e.preventDefault();
    const usuarioValido = usuarios.find((lUsuario) => lUsuario.usuario === usuario.value && lUsuario.pass === contra.value);
    console.log(usuarioValido);
    if (usuarioValido) {
        alert("Bienvenido " + usuarioValido.nombre);
        let userLog = [];
        if (usuarioValido.rol === 'Administrador') {
            let logUsuario = `
         <a class="nav-link active text-white" aria-current="page" href="./admin-productos.html">Modificar Productos</a>
         <li><a class="nav-link active text-white" aria-current="page" href="#">USUARIO: ${usuarioValido.usuario}</a></li
                    `;
            userLog.push(logUsuario);
        }
        else {
            let logUsuario = `
         <a class="nav-link active text-white" aria-current="page" href="#">USUARIO: ${usuarioValido.usuario}</a>
                    `;
            userLog.push(logUsuario);
        }
        console.log(userLog);
        logInNav.style.display = "none";
        registrarse.style.display = "none";
        navbar.innerHTML = userLog.join('');
        // window.location="index.html";
    }
    else {
        alert("Usuario o contraseña no coinciden");
    }
}

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const usuario = {
        id: generarID(),
        usuario: usuarioInput.value,
        nombre: nombreInput.value,
        correo: correoInput.value,
        pass: passInput.value,
        rol: "usuario",
    };
    usuarios.push(usuario);
    const json = JSON.stringify(usuarios); // Convertir datos a un string JSON.
    localStorage.setItem('usuarios', json);
    const myModal = document.getElementById('formulario')
    const modal = bootstrap.Modal.getInstance(myModal);
     modal.hide();
    formularioForm.reset(); // reset limpia los campos del formulario.
};

login.onsubmit = validarUsuarioSubmit;