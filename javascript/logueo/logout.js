'use strict'

// Seleccionar el botón

const botonSalir = document.getElementById('boton-salir');

// Mostrar u ocultar el botón

const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (estaLogueado) {
  botonSalir.classList.remove('d-none');
};

// Acción de boton


botonSalir.addEventListener('click', (e)=> {
    swal.fire({
        title: '¿Estás seguro?',
        text: 'Cerrarás tu sesión',
        confirmButtonText: 'Sí, salir',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
    })
    .then((result)=>{
        if(result.isConfirmed){
            // 1- Limpiar sessionStorage
            sessionStorage.removeItem('estaLogueado');
            sessionStorage.removeItem('usuario');

            // 2- Redireccionar a home (ruta NO protegida)
            window.location.href= '/';
        }
    });
})