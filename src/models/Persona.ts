export class Persona {

    nombre: string;
    apellidos: string;
    edad: number;

    constructor(nombre: string, apellidos: string, edad:number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`hola me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años `)
    }

}

export class Empleados extends Persona {

    sueldo: number;

    constructor(nombre: string, apellidos: string, edad: number, sueldo: number) {
        super(nombre, apellidos, edad);
        this.sueldo = sueldo
    }
    saludar(): void {
        super.saludar();
        console.log(`mi sueldo es de ${this.sueldo} $`)
    }
}

export class Jefe extends Persona {
    empleados: Empleados[] = [];
    constructor(nombre: string, apellidos: string, edad: number) {
        super(nombre, apellidos, edad)
    }
}