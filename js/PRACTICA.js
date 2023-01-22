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




















