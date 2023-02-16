// console.log("primera linea en js entre comillas porque ya lo hize con dalto, para tirar algo en la consola tenemos que poner console.log abro parentesis y entre comillas");

// // declaracion de espacios de memorias 
// // FORMA  1 con var para variables:
// //Declarando una variable
// var autor
// //asignando un valor,con el =
// autor = "jorge Luis Borges"
// console.log(autor)
// //En una variable tenemos su nombre y su valor

// // FORMA 2 de guardar espacio en memoria con LET (buena practica)
// //Iniciliza una variable (declarla y asignarle)
// let autora = "Isabel Allende"
// console.log(autora)

// //TERCERA FORMA asignar espacio de meomoria mediante const, sirve para cosas constantes, valores que no cambian
// const libro = "El principito"
// // a una constante no se le puede asignar valor       seria como in ID
// // libro = 3.14
// console.log(libro)
// //  const se declara y se incializo en la misma linea



//       VALORES(tipo de datos)                 lenguaje de tipado debil
// Podemos asociar distintos valores a una variable en JS.

// String o cadena de caracteres con comillas ""
// let nombreProducto = "silla"
// console.log("nombre producto" + nombreProducto + "es del tipo del string")

// // Number se escribe sin comillas
// let precioProducto = 600
// console.log(precioProducto)

// //Bolean es true o false
// let bandera = true
// let mastil = false
// console.log(bandera)
// console.log(mastil)


//         OPERACIONES
// OPERADORES ARIMETRICOS (IMG)
// Los operadores arimetricos toman valores numericos(ya sean literales o variables) como sus operandos y devuelvenm un valor nummerico unico

// Todas las asignaciones:
//     * adicion           x + y
//     * resta             x - y
//     * decrecion         x --   se le resta la cant. de - que pongamos a que se le resta 1 a x
//     * division          x / y 
//     * multiplicacion    x * y
//     * exponencizcison   x**n  n= exponente 
//     * incrementacion    x++    es igual a la decreccion pero con suma     
//     * resto             x%y 
//     * negacion unaria   -x para hacerlo negativo
//     * valor absoluto    +x lo hace positivo


//CONCATENACION
// Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Vamos a probar un ejemplo en nuestra consola.

// EJemplo facil
// saludo = "hola pedro";
// pregunta = "?como estas?;

// frase = saludo + pregunta;

//     Cadena de texto: "" x + y para que no se haga la operacion

//     Concat: es un metodo de cadena de concatenar

//     Bacticks: Resuelve muchos problemas, a fututro
//         ejemplo:
//             nombre = "lucas dalto";
//             frase = `soy ${nombre}
//             y estoy caminando`

//     Escape de comillas simples: tenemos que poner comillas dobles por fuera

//     Escape de comillas dobles: si queremos usar las comillas dobles dentro del texto por fuera tenemos que usar comillas simples




//                             OPERADORES DE COMPARACION
// El operador de comparacion ( == ) comprueba si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta ( === ), es que este convierte y compara operandos que son de diferentes tipos.Te devuelven TRUE O FALSE.
       
//         * Igualdad      (a == b) 
//         * Desigualdad   (a != b) 
//         * Identidad     (a === b) tiene que ser extrictamente igual
//         * No-identidad  (a !== b) NO tiene que ser extrictamente igual
//         * Mayor         (a > b)
//         * Mayor o igual (a <= b)
//         * Menor         (a < b)
//         * Menor o igual (a <= b)            
                        
//                             OPERADORES LOGICOS
// Los operadores lógicos comparan valores booleanos y devuelven respuestas booleanas. Hay dos tipos de operadores lógicos AND y OR. Acepta solo TRUE o FALSE. Te devuelven TRUE O FALSE.

//         *And (afirmacion1 && afirmacion2) tiene que ser las dos true para devolver true, de lo contrario es FALSE
//         *Or (afirmacion1 || afirmacion2) una de las dos tiene que ser true para devolver true, de lo contrario es FALSE


                                //PROMPT
//Se usa para mostrar un cuadro de diálogo con un mensaje que solicita al usuario que ingrese algún texto o información.

// let preguntaMayor = prompt("usted es mayor de edad??? responda con si o no")
// console.log(preguntaMayor)
// // Estructura condicional, con un if 
// // = era para asignar y == para comparar
// if (preguntaMayor == "si"){
//     console.log("Bienvenido a la tiende, usted es mayor de edad")

// } 
// let preguntaEdad = parseInt(prompt("inserte su edad"))
// console.log(preguntaEdad)
// if(preguntaEdad >= 18){
//     console.log(`Suedad es ${preguntaEdad} y puede entrar a la tienda`)
// }
    
// parseInt() para pasar un string a dato numerico

//Operadores Logicos 
//  == es igual
// === es identico
// != es distinto
// !== Es estrictamente distinto
// < menor, <= menor o igual
// && Operador and
// || Operador o 
// ! operador not


// Operador == compara valor,    === compara valor y tipo de dato(si es number o string)

// let numero = 10

// if(numero == "10"){
//     console.log("es igual")

//     if(numero === "10"){
//         console.log("es Estrictamente igual")
//     }
// }


// let numero2 = 30
// if(numero2 == 30){
//     console.log("Es igual")
// }
// if(numero2 === 30){
//     console.log("Es estrictamente igual")
// }

// let color2 = prompt("elige un color")

// if(color2.toLowerCase() == "azul" || color2.toLowerCase() == "amarillo" || color2.toLowerCase() == "rojo"){
//     console.log("este color es primario")
// }
// else{
//     console.log("Este color es secundario o tercario o feo")
// }

// and && "Y"
// let precioLibro = prompt("ingresar precio")
// let editorial = prompt("ingresar editorial")

// if(precioLibro > 400 && editorial.toUpperCase() == "SANTILLANA"){
//     console.log("Este libro vale mas de 400 y es de la editorial Santillana. TRUE")

// }else{
//         console.log("Este libro no vale mas de 400 o no es de la editorial santillana. FALASE")
// }

// Ejercicio preguntar al usuario nombre e ingreso de tres notas 
// A partir de esas tres notas indicar el promedio
// si la nota es < 4 desaprobado
// si la nota es <= a 4 && => a 7 esta aprobado
// si la nota es = a 10 es excelente


//                          ejERCICIO DE NOTAS

let nombreAlumno = prompt(`Ingrese su nombrey apellio alumno`)

let notaMatematicas = parseInt(prompt(`${nombreAlumno} cual fue su nota en matematicas?`))
let notaFisica = parseInt(prompt(`${nombreAlumno} cual fue su nota en fisica?`))
let notaIngles = parseInt(prompt(`${nombreAlumno} cual fue su nota en Ingles??`))
let promedio = (notaFisica + notaIngles + notaMatematicas) / 3

//MATEMATICA
if((notaMatematicas) < 4){
    alert(`Su nota en Matematicas es:${notaMatematicas} y estas desaprobad0`)
}else if(notaMatematicas >= 4 && notaMatematicas <= 7){
    alert(`Su nota en Matematicas es: ${notaMatematicas} y estas aprobado`)
}else if(notaMatematicas >= 7 && notaMatematicas != 10){
    alert(`Su nota en Matematicas es: ${notaMatematicas} y Promoviste`)
}else if(notaMatematicas == 10){
    alert(`Su nota en Matematicas es: ${notaMatematicas} Felicitacion crack puntaje ideal`)
}
// FISICA
if((notaFisica) < 4){
    alert(`Su nota en fisica es:${notaFisica} y estas desaprobado`)
}else if(notaFisica >= 4 && notaFisica <= 7){
    alert(`Su nota en fisica es: ${notaFisica} y estas aprobado`)
}else if(notaFisica >= 7 && notaFisica != 10){
    alert(`Su nota en fisica es: ${notaFisica} y Promoviste`)
}else if(notaFisica == 10){
    alert(`Su nota en fisica es: ${notaFisica} Felicitacion crack puntaje ideal`)
}
// INGLESS
if((notaIngles) < 4){
    alert(`Su nota en Ingles es:${notaIngles} y estas desaprobado`)
}else if(notaIngles >= 4 && notaIngles <= 7){
    alert(`Su nota en Ingles es: ${notaIngles} y estas aprobado`)
}else if(notaIngles >= 7 && notaIngles != 10){
    alert(`Su nota en Ingles es: ${notaIngles} y Promoviste`)
}else if(notaIngles == 10){
    alert(`Su nota en Ingles es: ${notaIngles} Felicitacion crack puntaje ideal`)
}

alert(`Su promedio escolar del siclo 2020 es ${Math.round(promedio)}`)



//como elegir cuantos decimales mostar variable.tofixed(cantidad de decimales)
// otra manera es con el Math.round(variable)
















                //FUNCIONES
// function pedirNumeros(){
//     let numm1 = parseInt(prompt("ingrese el 1er num"))
//     let numm12 = parseInt(prompt("ingrese el 2do num"))
//     // suma(num1,num2)
//     let resultado = suma(num1,num2)
//     mostarResultado(resultado)
// }
// function suma(sumando1, sumando2){
//     return sumando1 + sumando2

// }
// function mostarResultado(x){
//     alert("el resultado es " + x)
// }


//CLASE 12 OPERADORES AVANZADOS

//operador ternario: 
let num = 8
if(num == 4){
    console.log("El num es 4")
}else{
    console.log("El num NO es 4")
}

//condición ? lo que se ejecuta si es true : lo que se ejecuta si es false
num == 4 ? console.log("El num es 4. Con ternario") : console.log("El num NO es 4. Con ternario")

//operador && 
let carrito = ["elemento", "string"]
carrito.length == 0 && console.log("EL carrito está vacío")

// operador OR || undefined, null, "", NaN, 0 y false
//falsy: undefined, null, "", NaN, 0 y false
//nullish undefined y null
//find cuando no encuentra me devuelve undefined
let buscado = estanteria.find((book) => book.titulo == "Andamios") ?? "No tenemos ese libro en stock"
// if(buscado == undefined){

// } 
// console.log(buscado)
// condicion ? true  : false

//acceso condicional:
console.log(libro1.titulo || "No tiene titulo")
let enciclopedia23
//debemos utilizar el ?
console.log(enciclopedia23?.titulo || "No tiene titulo")

//desestructurar un object
//el nombre debe coincidir con el atributo
let {autor, titulo, imagen, id, precio, editorial} = libro5
console.log(autor)
console.log(titulo)

console.log(precio)
console.log(imagen)
console.log(id)
//esto da undefined, ya que no hay atributo con ese nombre
console.log(editorial)

//desestructurar con ALIAS
//primero nombre original del atributo : nombre nuevo
let {autor: author, titulo: title, precio: price}= libro4
console.log(author)
console.log(title)
console.log(price)
// se puede reasignar el valor y no modificar object original
title = "Libro de arena"
// libro4.titulo = "Libro de arena"
console.log(title)
console.log(libro4)
console.log("/////")
//Desestructurar array:
let [ ,a, b, , ,c] = estanteria
console.log(a)
console.log(b)
console.log(c)

//spread
console.log("spread array")
console.log(estanteria)
//... spread
console.log(...estanteria)

let numeros = [25, 19, 7, 1993, 5200, 6, 87,-5]
console.log(numeros)
console.log(...numeros)
// suma(num1, num2 )
console.log(Math.min(...numeros))


//toda la info de libro + editorial
let superLibro1 = {
    ...libro1,
    editorial: "Sudamericana",
    cantPag : 564
}
console.log(superLibro1)

function calcularTotal(...precios){
    console.log(precios)
    //agregar suma cada elemento
    return precios.reduce((acc, numeroSuma) => acc + numeroSuma, 0)
}
console.log(calcularTotal(3, 8, 9, 15))



//CLASE 13 LIBRERIAS:
// sweetAlert usa mucho los estilos de boostrap 
//<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
// prueba
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
   
Swal.fire('Any fool can use a computer')

// para utilizar librería
// primer 
Swal.fire({
    title: "Ha agregado un producto :D",
    text: "El libro ha sido agregado",
    icon: "info",
    confirmButtonText: 'Entendido',
    confirmButtonColor: "green"
})

//segunda librería Toastify
Toastify({
    text: "Esto es una notificación",
    duration: 2500
}).showToast()

Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      color: "black",
    },
    onClick: function(){} // Callback after click
  }).showToast();

//tercer librería Luxon para fechas y hora
const DateTime = luxon.DateTime
console.log(DateTime)
//iso
const cumple = DateTime.fromISO("1993-07-19")
// console.log(cumple)
// console.log(cumple.year)
// console.log(cumple.day)

const fechaHoy = DateTime.now()
console.log(fechaHoy)

// console.log(fechaHoy.year)
// console.log(fechaHoy.second)

// //formatos para mostrar la fecha
console.log(fechaHoy.toLocaleString(DateTime.DATE_SHORT))
console.log(cumple.toLocaleString(DateTime.DATE_SHORT))
console.log(cumple.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))
console.log(fechaHoy.toLocaleString(DateTime.DATE_FULL))

//imprimir en el DOM
let fecha = document.getElementById("fecha")
let fechaMostrar = fechaHoy.toLocaleString(DateTime.DATE_FULL)
fecha.innerHTML = `${fechaMostrar}`
// PROMESAS 
// const eventoFuturo =(valor)=>{
//   return new Promise((resolve, reject)=>{
//     if(valor == true){
//       resolve("La promesa se ha cumplido")
//     }else{
//       reject("la promesa NO se ha cumplido")
//     }

//   })
// }
// console.log(eventoFuturo(false))
// console.log(eventoFuturo(true))

// eventoFuturo(true)
// .then((respuesta)=>{
//   console.log(respuesta)
// })
// .finally(()=>{
//   console.log("fin de la promesa")
// })
// class tutor{
//   constructor(nombre, apellido){
//     this.nombre = nombre,
//     this.apellido = apellido
//   }
// }
// const tutro1 =("Jorge","Mendez")
// const tutro2 =("Walter","Renesa")
// let tutores = [tutro1, tutro2]

// function llamarTutores(resultado){
//   return new Promise ((resolve, rejected)=>{
//     if(resultado){
//       resolve(tutores)
//     }else{
//       rejected("no se pudo cargar a los tutores")
//     }
//   })
// }
// llamarTutores(true)
// .then(()=>{console.log(respuesta)})
// .catch(
//   respuesta => console.log(respuesta)
// )
// .finally(()=>{
//   console.log(" ya se termino el llamado")
// })




  //          Instanciación de objetos -- respetamos orden y cantidad de atributos
  //          Constructor(id, nombre, apellido, img, pais,  global, tipoDeCarta, ritmo, tiro, pase, regate, defensa, fisico)
  // const carta1 = new carta(
  //   1,
  //   "Lionel Messi",
  //   "../images/messi.png",
  //   "argentina",
  //   "psg",
  //   99,
  //   "ED",
  //   "toty",
  //   93,
  //   99,
  //   97,
  //   95,
  //   45,
  //   85,
  //   21500
  // );
  // const carta2 = new carta(
  //   2,
  //   "Ronaldo",
  //   "../images/ronaldo.png",
  //   "portugal",
  //   "manchester united",
  //   92,
  //   "DC",
  //   "totw",
  //   91,
  //   92,
  //   86,
  //   90,
  //   51,
  //   83,
  //   10200
  // );
  // const carta3 = new carta(
  //   3,
  //   "Neymar JR",
  //   "../images/neymar.png",
  //   "brasil",
  //   "psg",
  //   90,
  //   "EI",
  //   "oro",
  //   93,
  //   89,
  //   88,
  //   94,
  //   45,
  //   75,
  //   7500
  // );
  // const carta4 = new carta(
  //   4,
  //   "Killian Mbappe",
  //   "../images/mbappe.png",
  //   "francia",
  //   "psg",
  //   89,
  //   "DC",
  //   "oro",
  //   90,
  //   94,
  //   95,
  //   89,
  //   45,
  //   78, 
  //   7000
  // );
  // const carta5 = new carta(
  //   5,
  //   "Roman Riquelme",
  //   "../images/riquelme.png",
  //   "argentina",
  //   "icono",
  //   88,
  //   "MCO",
  //   "icono",
  //   83,
  //   89,
  //   95,
  //   87,
  //   62,
  //   81,
  //   15000
  // );
  // const carta6 = new carta(
  //   6,
  //   "Martin Palermo",
  //   "../images/palermo.png",
  //   "argentina",
  //   "icono",
  //   87,
  //   "DC",
  //   "icono",
  //   84,
  //   90,
  //   81,
  //   80,
  //   45,
  //   85,
  //   10450
  // );
  // const carta7 = new carta(
  //   7,
  //   "Zeballos",
  //   "../images/zeballos.png",
  //   "argentina",
  //   "boca",
  //   82,
  //   "EI",
  //   "future star",
  //   88,
  //   84,
  //   79,
  //   88,
  //   45,
  //   73,
  //   2000
  // );
  // const carta8 = new carta(
  //   8,
  //   "Dibu Martinez",
  //   "../images/dibu-martinez.png",
  //   "argentina",
  //   "aston villa",
  //   86,
  //   "PQ",
  //   "oro",
  //   84,
  //   90,
  //   81,
  //   80,
  //   45,
  //   85,
  //   4600
  // );
  // const carta9 = new carta(
  //   9,
  //   "Rodrigo De Paul",
  //   "../images/depaul.png",
  //   "argentina",
  //   "atletico de madrid",
  //   87,
  //   "MC",
  //   "oro",
  //   84,
  //   79,
  //   90,
  //   80,
  //   70,
  //   70,
  //   4500
  // );
  // const carta10 = new carta(
  //   10,
  //   "Griezman",
  //   "../images/griezman.png",
  //   "francia",    
  //   "atletico de madrid",
  //   86,
  //   "MCO",
  //   "oro",
  //   84,
  //   89,
  //   83,
  //   81,
  //   45,
  //   75,
  //   4300
  // );
  // const carta11 = new carta(
  //   11,
  //   "Paul Pogba",
  //   "../images/pogba.png",
  //   "francia",
  //   "manchester united",
  //   82,
  //   "MCD",
  //   "oro",
  //   84,
  //   84,
  //   87,
  //   88,
  //   45,
  //   79,
  //   1350
  // );
  // const carta12 = new carta(
  //   12,
  //   "Erling Haland",
  //   "../images/haland.png",
  //   "noruega",
  //   "manchester city",
  //   88,
  //   "DC",
  //   "oro",
  //   87,
  //   90,
  //   75,
  //   75,
  //   45,
  //   85,
  //   7650
  // );
  // const carta13 = new carta(
  //   13,
  //   "Mac Allister",
  //   "../images/mcallister.png",
  //   "argentina",
  //   "brighton",
  //   85,
  //   "MCO",
  //   "totw",
  //   84,
  //   84,
  //   86,
  //   80,
  //   45,
  //   75,
  //   4900
  // );
  // const carta14 = new carta(
  //   14,
  //   "Didier Drogba",
  //   "../images/drogba.png",
  //   "costa de marfil",
  //   "icono",
  //   89,
  //   "DC",
  //   "icono",
  //   83,
  //   90,
  //   80,
  //   82,
  //   45,
  //   85,
  //   8600
  // );
  // const carta15 = new carta(
  //   15,
  //   "Sergio Ramos",
  //   "../images/ramos.png",
  //   "espania",
  //   "psg",
  //   84,
  //   "DFC",
  //   "oro",
  //   77,
  //   75,
  //   81,
  //   65,
  //   86,
  //   85,
  //   2300
  // );
  // const carta16 = new carta(
  //   16,
  //   "Alexander Arnold",
  //   "../images/arnold.png",
  //   "inglaterra",
  //   "liverpool",
  //   86,
  //   "DFD",
  //   "oro",
  //   87,
  //   82,
  //   81,
  //   74,
  //   80,
  //   75,
  //   2500
  // );
  // const carta17 = new carta(
  //   17,
  //   "Alex Garnacho",
  //   "../images/garnacho.png",
  //   "argentina",
  //   "manchester united",
  //   84,
  //   "EI",
  //   "future star",
  //   88,
  //   80,
  //   75,
  //   82,
  //   45,
  //   68,
  //   3000
  // );
  // const carta18 = new carta(
  //   18,
  //   "Gavi",
  //   "../images/gavi.png",
  //   "espania",
  //   "barcelona",
  //   87,
  //   "MC",
  //   "oro",
  //   84,
  //   87,
  //   90,
  //   82,
  //   75,
  //   69,
  //   4000
  // );
  // const carta19 = new carta(
  //   19,
  //   "Sergio Aguero",
  //   "../images/aguero.png",
  //   "argentina",
  //   "icono",
  //   91,
  //   "DC",
  //   "icono",
  //   87,
  //   93,
  //   83,
  //   85,
  //   45,
  //   80,
  //   13000
  // );
  // const carta20 = new carta(
  //   19,
  //   "Benzema",
  //   "../images/benzema.png",
  //   "francia",
  //   "real madrid",
  //   91,
  //   "DC",
  //   "oro",
  //   84,
  //   93,
  //   86,
  //   87,
  //   45,
  //   78,
  //   8000
  // );
  //   const carta0 = new carta(
  //   19,
  //   "Enzo Fernandez",
  //   "../images/fernandez.png",
  //   "argentina",
  //   "chelsea",
  //   87,
  //   "MC",
  //   "oro",
  //   83,
  //   86,
  //   90,
  //   84,
  //   76,
  //   76,
  //   3600
  // );


















