'use strict'

import { User, UserWithoutPassword } from "./User.js"
import { validatePassword, validateUsername } from "./validators.js"

//protegemos ruta para que no puedan ver página admin

const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (estaLogueado) {
  // No deberia poder ver la página
  window.location.href = '../admin.html';
}

//usuario por defecto
const usuarioAdmin = new User('admin', 'admin', 'admin@gmail.com');


const formLogin = document.getElementById('form-login');
const campoUsuario= document.getElementById('input-usuario');
const campoContraseña= document.getElementById('input-contraseña');
const alertCredenciales= document.getElementById('alert-login');

//submit

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();

    const usuario = campoUsuario.value;
    const contraseña= campoContraseña.value;

    // Validando
    if (validateUsername(usuario, campoUsuario) &&  validatePassword(contraseña, campoContraseña)){
        
        campoUsuario.classList.remove('is-invalid');
        campoContraseña.classList.remove('is-invalid');
        
        if(usuario === usuarioAdmin.usuario && contraseña === usuarioAdmin.contraseña){
            // Login correcto

            alertCredenciales.classList.add('d-none');
            const usuarioLogueado= new UserWithoutPassword(usuario, 'admin@gmail.com')

            // 3. Guardamos en session
            sessionStorage.setItem('estaLogueado', true);
            sessionStorage.setItem('usuario', JSON.stringify(usuarioLogueado));

            swal.fire({
                title: 'Bienvenido',
                timer: 2000,
                timerProgressBar: true,
                icon: 'success',
                showConfirmButton: false,
            }).then(()=>{
                window.location.href= "./admin.html"
            });
        } else {
            alertCredenciales.classList.remove('d-none');
        }
    };
}) 