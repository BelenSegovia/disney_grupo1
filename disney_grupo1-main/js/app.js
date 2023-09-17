'use strict'
import { validateName, validateEmail, validateNumber } from "./validator.js"
const form = document.getElementById('form-contacto');
const campoNombre = document.getElementById('input-nombre');
const campoNumero = document.getElementById('input-numero');
const campoEmail = document.getElementById('input-email');

const campoNotas = document.getElementById('input-notas');
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

// -----------------------------------------
// 5. Event listener del form
// -----------------------------------------

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Extraemos los valores
  const nombre = campoNombre.value;
  const numero = campoNumero.value;
  const email = campoEmail.value;
  const notas = campoNotas.value;

  // Repetimos validacion por si no se produjo el blur
  if (
    validateName(nombre, campoNombre) &&
    validateNumber(numero, campoNumero) &&
    validateEmail(email, campoEmail) 
  ) {

    // Vaciar campos
    form.reset();

    // Resetear clases
    campoNombre.classList.remove('is-valid', 'is-invalid');
    campoNumero.classList.remove('is-valid', 'is-invalid');
    campoEmail.classList.remove('is-valid', 'is-invalid');
  }
});