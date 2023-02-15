

//capturas de nodos DOM
let cartas = document.getElementById("cartas")
let titulo = document.getElementById("titulo")
let mostrarCatalogoBtn = document.getElementById("mostarCatalogo")
let buscador = document.getElementById("buscador")
let buscadorBtn = document.getElementById("buscadorBtn")
let selectOrden = document.getElementById("selectOrden")
let selectOrdenBusqueda = document.getElementById("selectOrdenBusqueda")
let mostrarEquipoBtn = document.getElementById("mostrarEquipoBtn")
let loader = document.getElementById("loader")

// mostrar loader
setTimeout(()=>{
  loader.remove()
  titulo.innerHTML = "Este es el catalogo"
mostrarCatalogo(catalogo, "comprar")  
}, 2500)



//                          FUNCIONES DEL PROYECTO


//                       MOSTAR CATALOGO
function mostrarCatalogo(catalogo, botonLabel){
    cartas.innerHTML= ""
    for(let carta of catalogo){
        let nuevaCarta = document.createElement("div")
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
`
cartas.appendChild(nuevaCarta) 

const btnComprarVender = document.createElement("button");
btnComprarVender.textContent = botonLabel;
btnComprarVender.innerHTML+= `<img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;">`
btnComprarVender.classList.add("btnComprarVender", "btnComprarVender");
btnComprarVender.addEventListener("click", () => {
  if (botonLabel === "comprar") {
    agregarAEquipo(carta)
    Swal.fire({
      title: 'Jugador Comprado',
      text: `${carta.nombreApellido} ha sido comprado`,
      image: `${carta.img}`,
      imageHeight: 200,
      icon: 'success',
      background: 'black',
      confirmButtonText: 'OK',
      timer: 4100
    });
    
  } else{
    venderDeEquipo(carta)
  Swal.fire({
      title: 'Jugador vendido',
      text: `${carta.nombreApellido} ha sido vendido`,
      icon: 'success',
      background: 'black',
      confirmButtonText: 'OK',
      timer: 4100
    })}});
  nuevaCarta.appendChild(btnComprarVender);
  cartas.appendChild(nuevaCarta);
}}



mostrarCatalogoBtn.addEventListener("click", ()=>{
    
   titulo.innerHTML = "Este es el catalogo"
  mostrarCatalogo(catalogo, "comprar")
  
  
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
  })
  //guardar en localStorage
  localStorage.setItem("catalogo", JSON.stringify(catalogo))
  //resetear los input 
  agregarCartaModal.reset()
}
 
agregarCartaBtn.addEventListener("click", ()=>{
  agregarCarta(catalogo)
  mostrarCatalogo(catalogo, "comprar")
})

// //             BUSQUEDAD
function buscarCatalogo(buscado, catalogo, campo){
  let busquedaArray = catalogo.filter(
      (carta) => carta[campo].toLowerCase().includes(buscado.toLowerCase())
  ) 
  if(busquedaArray.length == 0){
      mostrarCatalogo("")
      coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
  }else{
      coincidencia.innerHTML = ""
      mostrarCatalogo(busquedaArray, "comprar")
  }
}
selectOrdenBusqueda.addEventListener("change", ()=>{
  console.log(selectOrdenBusqueda.value)
  document.getElementById("buscadorBtn").addEventListener("click", function(event) {
    event.preventDefault();
    let campo = "";
    switch(selectOrdenBusqueda.value) {
      case "1":
        campo = "nombreApellido";
        break;
      case "2":
        campo = "posicion";
        break;
      case "3":
        campo = "pais";
        break;
      case "4":
        campo = "club";
        break;
      case "5":
        campo = "tipoDeCarta";
        break;
      default:
        break;
    }
    buscarCatalogo(buscador.value, catalogo, campo);
  });
});



//          ORDENAR CATALOGO
//ordernar de menor a mayor catalogo x global
function ordenarCatalogo(catalogo, orden) {
  let sortedCatalogo = [].concat(catalogo);
  switch (orden) {
    case 1: // ordenar de mayor a menor catalogo  x global
      sortedCatalogo.sort((a, b) => b.global - a.global);
      break;
    case 2: // ordenar de menor a mayor catalogo  x global
      sortedCatalogo.sort((a, b) => a.global - b.global);
      break;
    case 3: // ordenar alfabeticamente catalogo
      sortedCatalogo.sort((a, b) => a.nombreApellido.localeCompare(b.nombreApellido));
      break;
    default:
      break;
  }
  mostrarCatalogo(sortedCatalogo, "comprar");
}

selectOrden.addEventListener("change", () => {
  console.log(selectOrden.value);
  ordenarCatalogo(catalogo, parseInt(selectOrden.value));
});

// funciones de miEquipo

let jugadorComprados = JSON.parse(localStorage.getItem("miEquipo")) || []

function agregarAEquipo(carta) {
  miEquipo.push(carta);
  localStorage.setItem("miEquipo", JSON.stringify(miEquipo))
}
function venderDeEquipo(carta){
  let cartaIndex = miEquipo.findIndex(c => c.id === carta.id);
    // Remove the card from the array
    miEquipo.splice(cartaIndex, 1);
    mostrarCatalogo(miEquipo, "vender")
    localStorage.setItem("miEquipo", JSON.stringify(miEquipo))
}

mostrarEquipoBtn.addEventListener("click", ()=>{
titulo.innerHTML= "Este es tu Equipo"
mostrarCatalogo(miEquipo, "vender")
}) 

// PROMESAS 
const eventoFuturo =(valor)=>{
  return new Promise((resolve, reject)=>{
    if(valor == true){
      resolve("La promesa se ha cumplido")
    }else{
      reject("la promesa NO se ha cumplido")
    }

  })
}
console.log(eventoFuturo(false))
console.log(eventoFuturo(true))


