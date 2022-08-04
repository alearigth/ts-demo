import { ITarea, Niveles } from './interfaces/ITarea';
export class Programar implements ITarea {
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean;
    urgencia?: Niveles | undefined;

    constructor(titulo: string, descripcion: string, completada: boolean, urgencia: Niveles) {
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.completada = completada,
        this.urgencia = urgencia
    }
    resumen = () => {
        return `tarea de programacion ${this.titulo} - ${this.completada}`
    }
}