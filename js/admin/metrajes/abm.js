import { Metraje } from "./Metraje.js"
import { agregarMetraje } from "./abmUtils.js";

export const añadirMetraje = (nombre, descripcion, tipo, categoria, imagen) => {
    const nuevoMetraje = new Metraje(nombre, descripcion, tipo, categoria, imagen);

    agregarMetraje(nuevoMetraje);

    swal.fire({
        title: "Exito",
        text: "Metraje agregado exitosamente",
        icon: "success"
    })
};