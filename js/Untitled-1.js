//PROYECTO:

//Capturas nodos DOM:
let libros = document.getElementById("libros")
let guardarLibroBtn = document.getElementById("guardarLibroBtn")
// let verCatalogoBtn = document.getElementById("verCatalogo")
// let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let botonCarrito = document.getElementById("botonCarrito")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
//FUNCTIONS PROYECTO:
function mostrarCatalogo(array){
    libros.innerHTML = ""
    for(let libro of array){
        
        let nuevoLibro = document.createElement("div")
        //classList + add agrego clases al elemento que seleccione
        nuevoLibro.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevoLibro.innerHTML = `
        <div id="${libro.id}" class="card" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
                <div class="card-body">
                            <h4 class="card-title">${libro.titulo}</h4>
                            <p>Autor: ${libro.autor}</p>
                            <p class="${libro.precio <= 2000 && "ofertaLibro"}">Precio: ${libro.precio}</p>
                        <button id="agregarBtn${libro.id}" class="btn btn-outline-success">Agregar al carrito</button>
                </div>
        </div>`
        libros.appendChild(nuevoLibro)

        let btnAgregar = document.getElementById(`agregarBtn${libro.id}`)
        // console.log(btnAgregar)
        btnAgregar.addEventListener("click", ()=>{
            agregarAlCarrito(libro)
            
        })
    }
}

//array de productosComprados
// let productosEnCarrito 
// if(localStorage.getItem("carrito")){
//     productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
// }else{
//     productosEnCarrito = []
// }
//aplicar operador []
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []
console.log(productosEnCarrito)
function agregarAlCarrito(libro){
    // console.log(libro)
    //nivel lógica del array
    console.log(`El libro ${libro.titulo} de ${libro.autor} ha sido agregado. Vale ${libro.precio}`)
    productosEnCarrito.push(libro)
    console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    // cargarProductosCarrito(productosEnCarrito)
}
function cargarLibro(array){
    
    let inputAutor = document.getElementById("autorInput")
    let inputTitulo = document.getElementById("tituloInput")
    let inputPrecio = document.getElementById("precioInput")

    //creamos nuevo objeto 
    const libroNuevo = new Libro(array.length+1, inputAutor.value, inputTitulo.value, inputPrecio.value, "libroNuevo.jpg")
    console.log(libroNuevo)
    //sumarlo a estanteria
    array.push(libroNuevo)
    console.log(array)
    //guardar en localStorage
    localStorage.setItem("estanteria", JSON.stringify(array))
    mostrarCatalogo(array)

    //resetear input    
    inputAutor.value = ""
    inputTitulo.value = ""
    inputPrecio.value = ""
}

function buscarInfo(buscado, array){
    //método filter
    //si quiero que la búsqueda sea por coincidencia estricta ej:
    // (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
    let busquedaArray = array.filter(
        (libro) => libro.autor.toLowerCase().includes(buscado.toLowerCase()) || libro.titulo.toLowerCase().includes(buscado.toLowerCase())
    ) 
    //condicional sino encuentra nada:
    // if(busquedaArray.length == 0){
    //     coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
    //     mostrarCatalogo(busquedaArray)
    // }else{
    //     coincidencia.innerHTML = ""
    //     mostrarCatalogo(busquedaArray)

    // }

    //equivalente con ternario
    busquedaArray.length == 0 ? 
    (coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`, 
    mostrarCatalogo(busquedaArray)) 
    : 
    (coincidencia.innerHTML = "", 
    mostrarCatalogo(busquedaArray))
    //para anidar muuchas condiciones
}

//ordenar:
function ordenarMenorMayor(array){
    //copiamos array original // concat
    const menorMayor = [].concat(array)
    //ordena de menor a mayor
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarCatalogo(menorMayor)
}
function ordenarMayorMenor(arr){
    //ordenar de mayor a menor
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    mostrarCatalogo(mayorMenor)
}
function ordenarAlfabeticamenteTitulo(array){
    const ordenadoAlfabeticamente = [].concat(array)
    ordenadoAlfabeticamente.sort((a,b) => {
        if(a.titulo > b.titulo) {
            return 1
        }
        if (a.titulo < b.titulo) {
            return -1
        }
        // a must be equal to b
        return 0;
    })
    mostrarCatalogo(ordenadoAlfabeticamente)
}

//agregar al modal carrito
function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito) => {

        modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoEnCarrito.id}" style="max-width: 540px;">
                 <img class="card-img-top" height="300px" src="assets/${productoEnCarrito.imagen}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.titulo}</h4>
                    
                         <p class="card-text">$${productoEnCarrito.precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `
    })
}
//EVENTOS:

guardarLibroBtn.addEventListener("click", ()=>{
    cargarLibro(estanteria)
})



buscador.addEventListener("input", ()=>{
    // console.log(buscador.value)
    buscarInfo(buscador.value, estanteria)
}) 

selectOrden.addEventListener("change", ()=>{
    console.log(selectOrden.value)
    if(selectOrden.value == 1){
        ordenarMayorMenor(estanteria)
    }else if(selectOrden.value == 2){
        ordenarMenorMayor(estanteria)
    }else if(selectOrden.value == 3){
        ordenarAlfabeticamenteTitulo(estanteria)
    }else{
        mostrarCatalogo(estanteria)
    }
})
botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})
//código:
mostrarCatalogo(estanteria)

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