//comentario en ts

/**
 * another comentario en ts
 * multilinea
 */
console.log("hola alejandro")
console.log("hola ale")

//DECLARACIONDE VARIABLES

//variable global tambien es tipado fuerte
var name: string = "alejandro"
//variable local
let email = "alearigth@gmail.com"
//variable constante
const PI: number = 3.1416

console.log("hola, " + name)
console.log("hola, " + name, "?")
console.log(`que tal, ${name}, ?`)
console.log(`que tal, ${name}, cual es tu email: ${email} ?`)
console.log(`que tal, ${name}, cual es tu email: ${email} el numero pi es: ${PI} ?`)


var apelldos:any = "mogrovejo" //tipado debil o any 
apelldos= 45 //tipado debil o any 

var error: boolean = false // tipado fuerte

var verdad // tipado debil o any
verdad = true // tipado debil o any

console.log(`hay error?: ${error}`)

//INSTANCIACION MULTIPLE DE VARIABLES

let a:string, b:boolean, c:number // instancia 3 variables sin valor inicial 
a = "fabiola"
b = true
c = 26

// BulitIn types: number, string, boolean, void, null, undefined


// TIPOS MAS COMPLEJOS

//listas de cadenas de texto
let listaTareas: string[] = ["tarea1", "tarea2"]

//combinar tipos de texto
let valores: (string | number | boolean)[] = [false, "hola", true, 26]

// enumerados
enum Estados {
    "completado" = "c",
    "imcompleto" = "i",
    "pendiente" = "p"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"

}

let estadoTarea: Estados = Estados.completado
let estadoMaraton: PuestoCarrera = PuestoCarrera.Tercero

//interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    importancia: number
}

// variables que sigan la itnerface tarea

let tarea1: Tarea = {
    nombre: "tarea 1",
    estado: Estados.pendiente,
    importancia: 10
}
console.log(`Tarea: ${tarea1.nombre}`)

// asignacion multiple de varibles

let miTarea = {
    nombre: "Mi tarea",
    estado: Estados.completado,
    importancia: 1
}

// declaracion de 1 a 1

let miNombre = tarea1.nombre
let miEstado = tarea1.estado
let miImportancia = tarea1.importancia

// declaracion con factor de propagacion

let {nombre, estado, importancia} = tarea1

let listaComprasLunes: string[] = ["leche", "papas"]
let listaComprasMartes: string[] = ["caramelo", "chocolate"]
let listaComprasTotal: string[] = [...listaComprasLunes, ...listaComprasMartes]

// En objetos

let estadoApp = {
    usuario: "admin",
    session:3,
    jwt: "alejandroski"
}

// cambiar de valor por propagacion

let nuevoEstado = {
    ...estadoApp,
    session: 4
}

// types de typescript

type Producto = {
    precio: number,
    nombre: string,
    año: number
}

let coche: Producto = {
    nombre: "bmw",
    precio: 45522,
    año: 2010
}

// operadores ternarios

console.log(coche.año < 2010 ? `coche: ${coche.nombre} es viejo`: `coche: ${coche.nombre} es nuevo`)

// if - else

if(error) {
    console.log("hay un error")
} else {
 console.log("no hay error")
}

// else if
if(coche.año < 2010) {
    console.log(`coche: ${coche.nombre} es viejo`)
} else if (coche.año === 2010) {
    console.log(`coche: ${coche.nombre} es es del 2010`)
} else {
    console.log(`coche: ${coche.nombre} es nuevo`)
}


// switch

switch (tarea1.estado) {
    case Estados.completado:
        console.log("la tarea esta completada")
        break;
    case Estados.imcompleto:
        console.log("la tarea no esta completada")
        break;
    case Estados.pendiente:
        console.log("la tarea esta pendiente")
        break;    

    default:
        break;
}

// bucles

let listaTareasNuevas: Tarea[] = [
    {
        nombre: "tarea1",
        estado: Estados.completado,
        importancia:2
    },
    {
        nombre: "tarea2",
        estado: Estados.imcompleto,
        importancia:0
    },
    {
        nombre: "tarea3",
        estado: Estados.pendiente,
        importancia:6
    }
    
]

// for each

listaTareasNuevas.forEach((tarea: Tarea, index:number) => {
    console.log(`${index} - ${tarea.nombre}`)
})

// for clasico

for(let index=0;index<listaTareasNuevas.length;index ++){
    const tarea=listaTareasNuevas[index];
    console.log('${index}-${tarea.nombre)');
}

// bucles while

while (tarea1.estado !== Estados.completado) {
    if(tarea1.importancia == 20) {
        tarea1.estado = Estados.completado
    } else {
        tarea1.importancia ++
    }
}

do {
    tarea1.importancia ++
    tarea1.estado = Estados.completado
} while (tarea1.estado !== Estados.completado)

