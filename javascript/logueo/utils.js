'use strict'

export const obtenerContactosDeLS = () => {
    //de string a objeto con JSON.parse()
    //Traemos contactos desde LS. Si es null, tomamos valor por defecto
    return JSON.parse(localStorage.getItem('contactos')) || [];
}

// Ordenar Lista
 
  export const ordenarLista = (lista) => {
    return lista.sort((a, b) => {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
};