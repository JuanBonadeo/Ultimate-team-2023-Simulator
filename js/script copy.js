

//capturas de nodos DOM
let cartas = document.getElementById("cartas")
let titulo = document.getElementById("titulo")
let mostrarCatalogoBtn = document.getElementById("mostarCatalogo")
let buscador = document.getElementById("buscador")
let buscadorBtn = document.getElementById("buscadorBtn")
let selectOrden = document.getElementById("selectOrden")
let selectOrdenBusqueda = document.getElementById("selectOrdenBusqueda")
let mostrarEquipoBtn = document.getElementById("mostrarEquipoBtn")


//                          FUNCIONES DEL PROYECTO
//                       MOSTAR CATALOGO
function mostrarCatalogo(catalogo){
    //titulo.innerHTML = "Este es el Catalogo"
    cartas.innerHTML = ""
    for(let carta of catalogo){
        let nuevaCarta = document.createElement("div")
        //classList + add agrego clases al elemento que seleccione
        nuevaCarta.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevaCarta.innerHTML = `
        <div id="${carta.id}" class="cartas ${carta.tipoDeCarta == "icono" && "icono"}">
          <div class="cartas-container">
            <div class="posicion"><h2>${carta.posicion}</h2></div>
            <div class="global"><h2>${carta.global}</h2></div>
            <div class="pais"><img class="img-fluid"  src="images/../images/${carta.pais}.png" alt="${carta.pais}"></div>
            <div class="club"><img class="img-fluid"  src="images/../images/${carta.club}.png" alt="${carta.club}"></div>
            <div class="img"><img class="" style="height: 170px; width: 180px;" src="images/${carta.img}" alt="${carta.nombreApellido}"></div>
            <div class="nombreApellido"><h4>${carta.nombreApellido}</h4></div>
           <div class="card-stats">
            <div class="ritmo"><p>RIT${carta.ritmo}</p></div>
            <div class="regate"><p>REG ${carta.regate}</p></div>
            <div class="tiro"><p>TIR ${carta.tiro}</p></div>
            <div class="pase"><p>PAS ${carta.pase}</p></div>
            <div class="fisico"><p>FIS ${carta.fisico}</p></div>
            <div class="defensa"><p>DEF ${carta.defensa}</p></div>
          </div>
        </div>     
          </div><button type="button" id="comprarJugadorBtn${carta.id}"   class="btn btn-outline-success">Comprar Jugador</button>
`
cartas.appendChild(nuevaCarta) 
let comprarJugadorBtn = document.getElementById(`comprarJugadorBtn${carta.id}`)
//de forma semantica pasamos evento
comprarJugadorBtn.addEventListener("click", ()=>{
  agregarAEquipo(carta)})
}}


//de forma semantica pasamos evento
mostrarCatalogoBtn.addEventListener("click", ()=>{
  titulo.innerHTML = "Este es el catalogo"
  mostrarCatalogo(catalogo)
}) 

//                      AGREGAR CARTA
function agregarCarta(catalogo) {
  let jugadorIngresado = document.getElementById("jugadorIngresado")
  let imgIngresado = document.getElementById("imgIngresado");
  let paisIngresado = document.getElementById("paisIngresado")
  let clubIngresado = document.getElementById("clubIngresado")
  let globalIngresado = document.getElementById("globalIngresado")
  let posicionIngresado = document.getElementById("posicionIngresado")
  let tipoDeCartaIngresado = document.getElementById("tipoDeCartaIngresado")
  let ritmoIngresado = document.getElementById("ritmoIngresado")
  let tiroIngresado = document.getElementById("tiroIngresado")
  let paseIngresado = document.getElementById("paseIngresado")
  let regateIngresado = document.getElementById("regateIngresado")
  let defensaIngresado = document.getElementById("defensaIngresado")
  let fisicoIngresado = document.getElementById("fisicoIngresado")

  //creamos nuevo objeto
  //para id dinámica usamos propiedad length
  const cartaNueva = new carta(
    catalogo.length + 1,
    jugadorIngresado.value,
    "cartaNueva.png",
    paisIngresado.value,
    clubIngresado.value,
    globalIngresado.value,
    posicionIngresado.value,
    tipoDeCartaIngresado.value,
    ritmoIngresado.value,
    tiroIngresado.value,
    paseIngresado.value,
    regateIngresado.value,
    fisicoIngresado.value,
    defensaIngresado.value
  );
  console.log(cartaNueva);
  catalogo.push(cartaNueva)
  //creamos nuevo objeto 
  
  //guardar en localStorage
  localStorage.setItem("catalogo", JSON.stringify(catalogo))
  mostrarCatalogo(catalogo)
  
  //resetear los input 
  jugadorIngresado.value = ""
  imgIngresado.value = ""
  paisIngresado.value = ""
  clubIngresado.value = ""
  globalIngresado.value = ""
  posicionIngresado.value = ""
  tipoDeCartaIngresado.value = ""
  ritmoIngresado.value = ""
  tiroIngresado.value = ""
  paseIngresado.value = ""
  regateIngresado.value = ""
  fisicoIngresado.value = ""
  defensaIngresado.value = ""
}
 
agregarCartaBtn.addEventListener("click", ()=>{
  agregarCarta(catalogo)
})

//             BUSQUEDAD
//busquedad jugador
function buscarJugador(buscado, catalogo){
  //método filter
  //si quiero que la búsqueda sea por coincidencia estricta ej:
  // (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
  let busquedaArray = catalogo.filter(
      (carta) => carta.nombreApellido.toLowerCase().includes(buscado.toLowerCase()) || carta.nombreApellido.toLowerCase().includes(buscado.toLowerCase())
  ) 
  //condicional sino encuentra nada:
  if(busquedaArray.length == 0){
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
      mostrarCatalogo(busquedaArray)
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray)
  }
}
// busqueda posicion
function buscarPosicion(buscado, catalogo){
  //método filter
  //si quiero que la búsqueda sea por coincidencia estricta ej:
  // (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
  let busquedaArray = catalogo.filter(
      (carta) => carta.posicion.toLowerCase().includes(buscado.toLowerCase()) || carta.posicion.toLowerCase().includes(buscado.toLowerCase())
  ) 
  //condicional sino encuentra nada:
  if(busquedaArray.length == 0){
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
      mostrarCatalogo(busquedaArray)
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray)
  }
}
//busqueda pais
function buscarPais(buscado, catalogo){
  //método filter
  //si quiero que la búsqueda sea por coincidencia estricta ej:
  // (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
  let busquedaArray = catalogo.filter(
      (carta) => carta.pais.toLowerCase().includes(buscado.toLowerCase()) || carta.pais.toLowerCase().includes(buscado.toLowerCase())
  ) 
  //condicional sino encuentra nada:
  if(busquedaArray.length == 0){
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
      mostrarCatalogo(busquedaArray)
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray)
  }
}
//busqueda club
function buscarClub(buscado, catalogo){
  //método filter
  //si quiero que la búsqueda sea por coincidencia estricta ej:
  // (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
  let busquedaArray = catalogo.filter(
      (carta) => carta.club.toLowerCase().includes(buscado.toLowerCase()) || carta.club.toLowerCase().includes(buscado.toLowerCase())
  ) 
  //condicional sino encuentra nada:
  if(busquedaArray.length == 0){
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
      mostrarCatalogo(busquedaArray)
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray)
  }
}
//buesqueda tipo de carta
function buscarCalidad(buscado, catalogo){
  //método filter
  //si quiero que la búsqueda sea por coincidencia estricta ej:
  // (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
  let busquedaArray = catalogo.filter(
      (carta) => carta.tipoDeCarta.toLowerCase().includes(buscado.toLowerCase()) || carta.tipoDeCarta.toLowerCase().includes(buscado.toLowerCase())
  ) 
  //condicional sino encuentra nada:
  if(busquedaArray.length == 0){
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
      mostrarCatalogo(busquedaArray)
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray)
  }
}

selectOrdenBusqueda.addEventListener("change", ()=>{
  console.log(selectOrdenBusqueda.value)
  if(selectOrdenBusqueda.value == 1){
  buscadorBtn.addEventListener("click", ()=>
  {buscarJugador(buscador.value, catalogo)})
  }else if(selectOrdenBusqueda.value == 2){
    buscadorBtn.addEventListener("click", ()=>
    {buscarPosicion(buscador.value, catalogo)})
  }else if(selectOrdenBusqueda.value == 3){
  buscadorBtn.addEventListener("click", ()=>
    {buscarPais(buscador.value, catalogo)})
  }else if(selectOrdenBusqueda.value == 4){
  buscadorBtn.addEventListener("click", ()=>
    {buscarClub(buscador.value, catalogo)})
  }else if(selectOrdenBusqueda.value == 5){
  buscadorBtn.addEventListener("click", ()=>
    {buscarCalidad(buscador.value, catalogo)})
  }else{
  }
})
  
 









//          ORDENAR CATALOGO
//ordernar de menor a mayor catalogo x global
function ordenarMenorMayorGlobal(catalogo) {
  //copiamos array original // concat
  const menorMayor = [].concat(catalogo);
  //ordena de menor a mayor
  menorMayor.sort((a, b) => a.global - b.global);
  mostrarCatalogo(menorMayor);
}
//ordenar de mayor a menor catalogo  x global 
function ordenarMayorMenorGlobal(catalogo) {
  //ordenar de mayor a menor
  const mayorMenor = [].concat(catalogo);
  mayorMenor.sort((b, a) => a.global - b.global);
  mostrarCatalogo(mayorMenor);
}
// ordenar alfabeticamente catalogo
function ordenarAlfabeticamenteNombre(catalogo) {
  const ordenadoAlfabeticamente = [].concat(catalogo);
  ordenadoAlfabeticamente.sort((a, b) => {
    if (a.nombreApellido > b.nombreApellido) {
      return 1;
    }
    if (a.nombreApellido < b.nombreApellido) {
      return -1;
    }
    return 0;
  })
  mostrarCatalogo(ordenadoAlfabeticamente)
}


selectOrden.addEventListener("change", ()=>{
  console.log(selectOrden.value)
  if(selectOrden.value == 1){
    ordenarMayorMenorGlobal(catalogo)
  }else if(selectOrden.value == 2){
    ordenarMenorMayorGlobal(catalogo)
  }else if(selectOrden.value == 3){
      ordenarAlfabeticamenteNombre(catalogo)
  }
})
// funciones de miEquipo


function agregarAEquipo(carta) {
  miEquipo.push(carta);
}

function mostrarEquipo(miEquipo){
  cartas.innerHTML = ""
    for(let carta of miEquipo){
        let nuevaCarta = document.createElement("div")
        //classList + add agrego clases al elemento que seleccione
        nuevaCarta.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevaCarta.innerHTML = `
        <div id="${carta.id}" class="cartas ${carta.tipoDeCarta == "icono" && "icono"}">
          <div class="cartas-container">
            <div class="posicion"><h2>${carta.posicion}</h2></div>
            <div class="global"><h2>${carta.global}</h2></div>
            <div class="pais"><img class="img-fluid"  src="images/../images/${carta.pais}.png" alt="${carta.pais}"></div>
            <div class="club"><img class="img-fluid"  src="images/../images/${carta.club}.png" alt="${carta.club}"></div>
            <div class="img"><img class="" style="height: 170px; width: 180px;" src="images/${carta.img}" alt="${carta.nombreApellido}"></div>
            <div class="nombreApellido"><h4>${carta.nombreApellido}</h4></div>
           <div class="card-stats">
            <div class="ritmo"><p>RIT${carta.ritmo}</p></div>
            <div class="regate"><p>REG ${carta.regate}</p></div>
            <div class="tiro"><p>TIR ${carta.tiro}</p></div>
            <div class="pase"><p>PAS ${carta.pase}</p></div>
            <div class="fisico"><p>FIS ${carta.fisico}</p></div>
            <div class="defensa"><p>DEF ${carta.defensa}</p></div>
          </div>
        </div>     
          </div><button type="button" id="venderJugadorBtn${carta.id}"   class="btn btn-outline-success">Vender Jugador</button>
`
cartas.appendChild(nuevaCarta) 
let venderJugadorBtn = document.getElementById(`venderJugadorBtn${carta.id}`)
//de forma semantica pasamos evento
venderJugadorBtn.addEventListener("click", ()=>{
  venderJugador(carta)})
}}
function venderJugador(carta) {
  mostrarEquipo("")
  miEquipo.map((carta) => carta);
  miEquipo.splice(carta, 1);
  console.log("Asi a quedado tu equipo");
  mostrarEquipo(miEquipo)
}
//de forma semantica pasamos evento
mostrarEquipoBtn.addEventListener("click", ()=>{
titulo.innerHTML= "Este es tu Equipo"
mostrarEquipo(miEquipo)
}) 




