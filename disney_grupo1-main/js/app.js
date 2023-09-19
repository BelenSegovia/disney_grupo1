'use strict'
import { validateName, validateEmail, validateNumber } from "./validator.js"
const btn = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.btn_busqueda');
const linkName = document.querySelector('.links-name');
const btnUser = document.querySelector('.profile_content');
const subMenu = document.querySelector('.sub-menu')

btn.onclick = () => {
    sidebar.classList.toggle('active');
}

searchBtn.onclick = () => {
    sidebar.classList.toggle('active');
}

btnUser.onclick = () => {
    subMenu.classList.toggle('active')
}


const forms = document.querySelectorAll('.form-contacto1');

forms.forEach(form => {
  const campoNombre = form.querySelector('.input-nombre1');
  const campoNumero = form.querySelector('.input-numero1');
  const campoEmail = form.querySelector('.input-email1');

  campoNombre.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateName(value, campoNombre);
  });

  campoNumero.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateNumber(value, campoNumero);
  });

  campoEmail.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateEmail(value, campoEmail);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extraemos los valores dentro del formulario actual
    const nombre = campoNombre.value;
    const numero = campoNumero.value;
    const email = campoEmail.value;

    // Repetimos validación por si no se produjo el blur
    if (
      validateName(nombre, campoNombre) &&
      validateNumber(numero, campoNumero) &&
      validateEmail(email, campoEmail)
    ) {
      // Vaciar campos del formulario actual
      form.reset();
      // Resetear clases del formulario actual
      campoNombre.classList.remove('is-valid', 'is-invalid');
      campoNumero.classList.remove('is-valid', 'is-invalid');
      campoEmail.classList.remove('is-valid', 'is-invalid');
      Swal.fire({
        title: '¿Quieres enviar los comentarios?',
        showDenyButton: true,
        confirmButtonText: 'Enviar',
        denyButtonText: `Prefiero no hacerlo`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('¡Gracias por tu comentario! En breve nos pondremos en contacto con vos.', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No hay problema si deseas contactarnos, recorda que siempre estamos dispuestos a ayudarte', '', 'info')
        }
      })
    }
  });
});
