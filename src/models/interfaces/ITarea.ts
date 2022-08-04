export enum Niveles {
    "Informativa",
    "Urgente",
    "Bloqueante"
}

// interface sirve para definir la firma y los puntos necesarios a implementar por quien la use

export interface ITarea {
    titulo: string,
    descripcion?: string,
    completada: boolean,
    urgencia?: Niveles,
    resumen: () => string
}