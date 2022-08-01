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



//Funciones

/**
 * funcion que muestra un saludo por consola
 */

function saludar() {
    let nombre = "Martin"
    console.log(`hola ${nombre}`)
}
// invocacion de la funcion
saludar()

/**
 * funcion que muestra un saludo por consola a una persona
 */

function saludarPersona(nombre: string) {
    console.log(`hola ${nombre}`)
}
// invocacion de la funcion
saludarPersona("alejandro")



function despedirPersona(nombre: string = "alejandro") {
    console.log(`adios ${nombre}`)
}
despedirPersona()

/**
 * 
 * @param nombre (opcional) nombre de la persona a despedir
 */

function despedidaOpcional(nombre?:string) {
    if(nombre) {
        console.log(`adios ${nombre}`)
    } else {
        console.log(`adios`)
    }
}

despedidaOpcional() // recibe solo adios
despedidaOpcional("alejandro") // recibe adios alejandro

function variosParams(nombre: string, apelldos?: string, edad: number=18) {
    if(apelldos){
        console.log(`${nombre} ${apelldos} tiene ${edad} años`)
    } else {
        console.log(`${nombre} tiene ${edad} años`)
    }
}
variosParams("alejandro") // martin tiene 18 años
variosParams("alejandro", "mogrovejo") // alejandro mogrovejo tiene 18 años
variosParams("alejandro", undefined, 30)// alejandro tiene 30 años
variosParams("alejandro","mogrovejo", 30) // alejandro mogrovejo tiene 30 años
variosParams(nombre="alejandro", apelldos= "mogrovejo", 24) //alejandro mogrovejo tiene 24 años

function ejemploVariosTipos(a: string | number) {
   if( typeof(a) === "string") {
    console.log("A es un string")
   } else if( typeof(a) === "number"){
    console.log("A es un number")
   } else {
    console.log("A no es un string")
    throw Error("A no es string ni un number")
   }
}   

ejemploVariosTipos("hola")
ejemploVariosTipos(20)

/**
 * 
 * @param nombre nombre de la persona
 * @param apelldos apellidos de la persona
 * @returns nombre completo de la persona
 */

function ejemploReturn(nombre: string, apelldos: string) :string | number {
    return `${nombre} ${apelldos}`
}

const nombreCompleto = ejemploReturn("alejandro", "mogrovejo")



console.log(nombreCompleto)
console.log(ejemploReturn("alejandro", "mogrovejo"))

/**
 * 
 * @param nombres es una lista de nombre de string
 */

function ejemploMultiParam(...nombres: string[]):void { 
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultiParam("martin")
ejemploMultiParam("alejandro", "martin", "fabiola")

//function lista

const lista = ["alberto", "sandra"]
ejemploParamList(...lista)

function ejemploParamList(...nombres: any[]) { 
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}
ejemploParamList(lista)

//arrow functions

type Empleado = {
    nombre: string,
    apellido: string,
    edad: number
}

let empleadoAlejandro: Empleado = {
    nombre: "alejandro",
    apellido:"mogrovejo",
    edad:23
}

const mostrarEmpleado = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} años`
mostrarEmpleado(empleadoAlejandro)

const datosEmpleado = (empleado: Empleado): string => {
    if(empleado.edad > 78) {
        return `empleado ${empleado.nombre} esta para jubilarse`
    } else {
      return  `empleado ${empleado.nombre} esta para laboral`
    }
}
datosEmpleado(empleadoAlejandro)

const obtenerSalario = (empleado: Empleado, cobrar:()  => "cobrar") => {
    if(empleado.edad > 78) {
        return 
    } else {
      cobrar() // callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra tu salario`)
}

// Async functions

async function ejemeploAsync(): Promise<string> {

    await console.log("tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("tarea completado")
    return "completado"
}
ejemeploAsync().then((respuesta) => {
    console.log("Respues", respuesta)
}).catch((error) => {
    console.log("ha habido un error", error)
}).finally(() => "todo termino")

// Generators

function* ejemploGenerator() {
    
    // yield para emitir valores

    let index = 0;

    while(index < 5) {
        // emitimos un valor incrementado
        yield index++
    }

}

// guardamos la funcion generadora en una variable

let generadora = ejemploGenerator()

// accedemos a los valores emitidos

console.log(generadora.next().value) // primera ves va a ser 0
console.log(generadora.next().value) //  1
console.log(generadora.next().value) //  2
console.log(generadora.next().value) //  3

// Worker

function* watcher(valor: number) {
    yield valor // emitimos el valor inicial
    yield* worker(valor) // llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4 // emitimos el valor final
}

function* worker(valor: number) {
    yield valor + 1
    yield valor + 2
    yield valor + 3
}

let generatorSaga = watcher(0)

console.log(generatorSaga.next().value) // 0 lo hizo el watcher
console.log(generatorSaga.next().value) // 1 lo hizo el worker
console.log(generatorSaga.next().value) // 2 lo hizo el worker
console.log(generatorSaga.next().value) // 3 lo hizo el worker
console.log(generatorSaga.next().value) // 4 lo hizo el watcher