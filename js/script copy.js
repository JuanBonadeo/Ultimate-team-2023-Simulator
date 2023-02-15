

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
    cartas.innerHTML= ""
    for(let carta of catalogo){
        let nuevaCarta = document.createElement("div")
        //classList + add agrego clases al elemento que seleccione
        nuevaCarta.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevaCarta.innerHTML = `
        <div id="${carta.id}" class="cartas ${carta.tipoDeCarta === "icono" ? "icono" : carta.tipoDeCarta === "toty" ? "toty" : carta.tipoDeCarta === "oro" ? "oro" : carta.tipoDeCarta === "totw" ? "totw": carta.tipoDeCarta === "future star" ? "future" : ""}">
        <div class="cartas-container">
            <div class="posicion"><h4>${carta.posicion}</h4></div>
            <div class="global"><h4>${carta.global}</h4></div>
            <div class="pais"><img class="img-fluid"  src="images/paises/${carta.pais}.png" alt="${carta.pais}"></div>
            <div class="club"><img class="img-fluid"  src="images/clubes/${carta.club}.png" alt="${carta.club}"></div>
            <div class="img"><img class="img-fluid" src="${carta.id < 20 ? `images/${carta.img}` : carta.id > 20 ? `${carta.img}` : ""}" alt="${carta.nombreApellido}"></div>
            <div class="nombreApellido"><h4>${carta.nombreApellido}</h4></div>
            <div class="card-stats">
            <div class="ritmo"><p>RIT ${carta.ritmo}</p></div>
            <div class="regate"><p>REG ${carta.regate}</p></div>
            <div class="tiro"><p>TIR ${carta.tiro}</p></div>
            <div class="pase"><p>PAS ${carta.pase}</p></div>
            <div class="fisico"><p>FIS ${carta.fisico}</p></div>
            <div class="defensa"><p>DEF ${carta.defensa}</p></div>
          </div>
        </div> 
            
          </div><button type="button" id="comprarJugadorBtn${carta.id}"   class="btnComprarVender btn-outline-success">Comprar Jugador<img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
`
cartas.appendChild(nuevaCarta) 
let comprarJugadorBtn = document.getElementById(`comprarJugadorBtn${carta.id}`)
comprarJugadorBtn.addEventListener("click", ()=>{
  Swal.fire({
    title: 'Jugador Comprado',
    text: `${carta.nombreApellido} ha sido comprado`,
    icon: 'success',
    background: 'black',
    confirmButtonText: 'OK',
    timer: 4100,
    imageUrl: `images/${carta.img}`,
    imageHeight: 100
  })
  agregarAEquipo(carta)})
  
}}


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
    imgIngresado.value,
    paisIngresado.value.toLowerCase(),
    clubIngresado.value.toLowerCase(),
    globalIngresado.value,
    posicionIngresado.value.toUpperCase(),
    tipoDeCartaIngresado.value.toLowerCase(),
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
  Swal.fire({
    title: 'Jugador agregado',
    text: `${jugadorIngresado.value} ha sido correctamente al catalogo`,
    icon: 'success',
    background: 'black',
    confirmButtonText: 'OK',
    timer: 4100,
    mageUrl: `${imgIngresado.value}`,
    imageHeight: 100
  })
  //guardar en localStorage
  localStorage.setItem("catalogo", JSON.stringify(catalogo))
  //resetear los input 
  agregarCartaModal.reset()
}
 
agregarCartaBtn.addEventListener("click", ()=>{
  agregarCarta(catalogo)
  mostrarCatalogo(catalogo)
})

// //             BUSQUEDAD
//busquedad jugador
function buscarJugador(buscado, catalogo){
  let busquedaArray = catalogo.filter(
      (carta) => carta.nombreApellido.toLowerCase().includes(buscado.toLowerCase()) || carta.nombreApellido.toLowerCase().includes(buscado.toLowerCase())
  ) 
  if(busquedaArray.length == 0){
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
      
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray)
  }
}
// busqueda posicion
function buscarPosicion(buscado, catalogo){
  let busquedaArray = catalogo.filter(
      (carta) => carta.posicion.toLowerCase().includes(buscado.toLowerCase()) || carta.posicion.toLowerCase().includes(buscado.toLowerCase())
  ) 
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
  let busquedaArray = catalogo.filter(
      (carta) => carta.pais.toLowerCase().includes(buscado.toLowerCase()) || carta.pais.toLowerCase().includes(buscado.toLowerCase())
  ) 
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
  let busquedaArray = catalogo.filter(
      (carta) => carta.club.toLowerCase().includes(buscado.toLowerCase()) || carta.club.toLowerCase().includes(buscado.toLowerCase())
  ) 
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
  let busquedaArray = catalogo.filter(
      (carta) => carta.tipoDeCarta.toLowerCase().includes(buscado.toLowerCase()) || carta.tipoDeCarta.toLowerCase().includes(buscado.toLowerCase())
  ) 
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
    document.getElementById("buscadorBtn").addEventListener("click", function(event) {
      event.preventDefault();
      buscarJugador(buscador.value, catalogo)
    })
  }else if(selectOrdenBusqueda.value == 2){
    document.getElementById("buscadorBtn").addEventListener("click", function(event) {
      event.preventDefault();
      buscarPosicion(buscador.value, catalogo)
    })
  }else if(selectOrdenBusqueda.value == 3){
    document.getElementById("buscadorBtn").addEventListener("click", function(event) {
          event.preventDefault();
          buscarPais(buscador.value, catalogo)
        })
  }else if(selectOrdenBusqueda.value == 4){
    document.getElementById("buscadorBtn").addEventListener("click", function(event) {
            event.preventDefault();
            buscarClub(buscador.value, catalogo)
          })
  }else if(selectOrdenBusqueda.value == 5){
    document.getElementById("buscadorBtn").addEventListener("click", function(event) {
              event.preventDefault();
              // Your code to process the search here
              buscarCalidad(buscador.value, catalogo)
            })
          }})
  


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

let jugadorComprados = JSON.parse(localStorage.getItem("miEquipo")) || []

function agregarAEquipo(carta) {
  miEquipo.push(carta);
  localStorage.setItem("miEquipo", JSON.stringify(miEquipo))
}

function mostrarEquipo(miEquipo){
  cartas.innerHTML = ""
    for(let carta of miEquipo){
        let nuevaCarta = document.createElement("div")
        //classList + add agrego clases al elemento que seleccione
        nuevaCarta.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevaCarta.innerHTML = `
        <div id="${carta.id}" class="cartas ${carta.tipoDeCarta === "icono" ? "icono" : carta.tipoDeCarta === "toty" ? "toty" : carta.tipoDeCarta === "oro" ? "oro" : carta.tipoDeCarta === "totw" ? "totw": carta.tipoDeCarta === "future star" ? "future" : ""}">
        <div class="cartas-container">
          <div class="posicion"><h4>${carta.posicion}</h4></div>
          <div class="global"><h4>${carta.global}</h4></div>
          <div class="pais"><img class="img-fluid"  src="images/paises/${carta.pais}.png" alt="${carta.pais}"></div>
          <div class="club"><img class="img-fluid"  src="images/clubes/${carta.club}.png" alt="${carta.club}"></div>
          <div class="img"><img class="img-fluid" src="${carta.id < 20 ? `images/${carta.img}` : carta.id > 20 ? `${carta.img}` : ""}" alt="${carta.nombreApellido}"></div>
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
          </div><button type="button" id="venderJugadorBtn${carta.id}"   class="btnComprarVender  btn-outline-success">Vender Jugador<img src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
`
cartas.appendChild(nuevaCarta) 

let venderJugadorBtn = document.getElementById(`venderJugadorBtn${carta.id}`)
venderJugadorBtn.addEventListener("click", ()=>{
  Swal.fire({
      title: 'Jugador vendido',
      text: `${carta.nombreApellido} ha sido vendido`,
      icon: 'success',
      background: 'black',
      confirmButtonText: 'OK',
      timer: 4100
    })
nuevaCarta.innerHTML=""
let cartaIndex = miEquipo.findIndex(c => c.id === carta.id);
    // Remove the card from the array
    miEquipo.splice(cartaIndex, 1);
    mostrarEquipo(miEquipo)})
    localStorage.setItem("miEquipo", JSON.stringify(miEquipo))
}}


mostrarEquipoBtn.addEventListener("click", ()=>{
titulo.innerHTML= "Este es tu Equipo"
mostrarEquipo(miEquipo)
}) 



