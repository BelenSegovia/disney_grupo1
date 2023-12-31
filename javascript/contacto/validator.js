"use strict";
export const validateName = (value, campo) => {
  // Minima long del nombre
  if (value.trim().length <= 2) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");

    return false;
  }

  // Maxima long del nombre
  if (value.trim().length >= 25) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

export const validateNumber = (value, campo) => {
  // Cantidad de digitos distinta a 10 caracteres
  // 381 123 4567
  if (value.trim().length !== 10) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  // No tenga caracteres no numericos
  if (isNaN(Number(value))) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

export const validateEmail = (value, campo) => {
  // Cantidad de digitos menor a 4
  if (value.trim().length < 4) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  // Cantidad de digitos mayor a 100
  if (value.trim().length > 50) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};
