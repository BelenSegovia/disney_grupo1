"use strict";
export class contacto {
  constructor(nombre, numero, email, imagen, notas) {
    this.nombre = nombre;
    this.numero = numero;
    this.email = email;
    this.notas = notas;
    this.codigo = self.crypto.randomUUID();
  }
}
