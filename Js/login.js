const login = document.getElementById('loginUI');
const usuario = document.getElementById('usuarioUI');
const contra = document.getElementById('contraUI');
const navbar = document.getElementById('navbarUI');
const logInNav = document.getElementById('logInNavUI');
const json = localStorage.getItem('usuarios'); 
let usuarios = JSON.parse(json) || []; 


function validarUsuarioSubmit(e){
    e.preventDefault();
    const usuarioValido = usuarios.find((lUsuario) => lUsuario.usuario === usuario.value && lUsuario.pass === contra.value);
    console.log(usuarioValido);
        if (usuarioValido){
        alert("Bienvenido " + usuarioValido.nombre );
        let userLog = []
         const logUsuario = `<a class="nav-link active text-white" aria-current="page" href="#">${usuarioValido.usuario}</a>
            `;
        userLog.push(logUsuario);
        console.log(userLog);
        logInNav.style.display = "none";
        navbar.innerHTML = userLog.join('');
        window.location="index.html";

            }
    else {
          alert("Usuario o contraseña no coinciden");
         }
         
   }


login.onsubmit = validarUsuarioSubmit;