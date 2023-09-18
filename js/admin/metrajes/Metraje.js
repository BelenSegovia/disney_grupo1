export class Metraje {
    constructor(nombre, descripcion, tipo, categoria,imagen){
        this.nombre = nombre,
        this.id = self.crypto.randomUUID(),
        this.descripcion = descripcion,
        this.tipo = tipo,
        this.categoria = categoria,
        this.imagen = imagen;
    }
}