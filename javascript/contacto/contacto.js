'use strict'
export class Contacto {
    constructor (nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
        this.codigo = self.crypto.randomUUID();
    };
}; 