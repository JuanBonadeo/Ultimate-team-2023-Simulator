//CAPTURAS DE DOM
let cartas = document.getElementById("cartas");
let titulo = document.getElementById("titulo");
let mostrarCatalogoBtn = document.getElementById("mostarCatalogo");
let buscador = document.getElementById("buscador");
let buscadorBtn = document.getElementById("buscadorBtn");
let selectOrden = document.getElementById("selectOrden");
let selectOrdenBusqueda = document.getElementById("selectOrdenBusqueda");
let mostrarEquipoBtn = document.getElementById("mostrarEquipoBtn");
let loader = document.getElementById("loader");
let billetera = document.getElementById("billetera");
let valorBilletera = parseInt(billetera.textContent);
let billeteraContainer = document.getElementById("billeteraContainer");
let mostrarTiendaBtn = document.getElementById("mostrarTiendaBtn");
let main = document.getElementsByTagName("main");

//                                           FUNCIONES DEL PROYECTO
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        MOSTRAR LOADER
setTimeout(() => {
  loader.remove();
  titulo.innerHTML = "Este es el catalogo";
  mostrarCatalogo(catalogo, "comprar");
}, 4000);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                       MOSTAR CATALOGO
function mostrarCatalogo(catalogo, botonLabel) {
  cartas.innerHTML = "";
  for (let carta of catalogo) {
    let nuevaCarta = document.createElement("div");
    nuevaCarta.classList.add("col-12", "col-md-6", "col-lg-4", "my-3");
    nuevaCarta.innerHTML = `
        <div id="${carta.id}" class="cartas ${
      carta.tipoDeCarta === "icono"
        ? "icono"
        : carta.tipoDeCarta === "toty"
        ? "toty"
        : carta.tipoDeCarta === "oro"
        ? "oro"
        : carta.tipoDeCarta === "totw"
        ? "totw"
        : carta.tipoDeCarta === "future"
        ? "future"
        : carta.tipoDeCarta === "ucl"
        ? "ucl"
        : carta.tipoDeCarta === "hero"
        ? "hero"
        : carta.tipoDeCarta === "fut"
        ? "futchamps"
        : carta.tipoDeCarta === "otw"
        ? "otw"
        : ""
    }">
        <div class="cartas-container">
            <div class="posicion"><h4>${carta.posicion}</h4></div>
            <div class="global"><h4>${carta.global}</h4></div>
            <div class="pais"><img class="img-fluid"  src="images/paises/${
              carta.pais
            }.png" alt="${carta.pais}"></div>
            <div class="club"><img class="img-fluid"  src="images/clubes/${
              carta.club
            }.png" alt="${carta.club}"></div>
            <div class="img"><img class="img-fluid" src="${
              carta.id < 20
                ? `images/${carta.img}`
                : carta.id > 20
                ? `${carta.img}`
                : ""
            }" alt="${carta.nombreApellido}"></div>
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
`;
    cartas.appendChild(nuevaCarta);
    const btnComprarVender = document.createElement("button");
    btnComprarVender.textContent = botonLabel.toLocaleString();
    btnComprarVender.innerHTML += `  ${carta.precio}<img class="coins img-fluid"src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;">`;
    btnComprarVender.classList.add("btnComprarVender", "btnComprarVender");
    btnComprarVender.addEventListener("click", () => {
      if (botonLabel === "comprar") {
        agregarAEquipo(carta, `${carta.precio}`);
      } else {
        venderDeEquipo(carta, `${carta.precio}`);
      }
    });
    nuevaCarta.appendChild(btnComprarVender);
    cartas.appendChild(nuevaCarta);
  }
}
mostrarCatalogoBtn.addEventListener("click", () => {
  titulo.innerHTML = "Este es el catalogo";
  mostrarCatalogo(catalogo, "comprar");
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        AGREGAR CARTA
function agregarCarta(catalogo) {
  let jugadorIngresado = document.getElementById("jugadorIngresado");
  let imgIngresado = document.getElementById("imgIngresado");
  let paisIngresado = document.getElementById("paisIngresado");
  let clubIngresado = document.getElementById("clubIngresado");
  let globalIngresado = document.getElementById("globalIngresado");
  let posicionIngresado = document.getElementById("posicionIngresado");
  let tipoDeCartaIngresado = document.getElementById("tipoDeCartaIngresado");
  let ritmoIngresado = document.getElementById("ritmoIngresado");
  let tiroIngresado = document.getElementById("tiroIngresado");
  let paseIngresado = document.getElementById("paseIngresado");
  let regateIngresado = document.getElementById("regateIngresado");
  let defensaIngresado = document.getElementById("defensaIngresado");
  let fisicoIngresado = document.getElementById("fisicoIngresado");

  const cartaNueva = new Carta(
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
    defensaIngresado.value,
    precioIngresado.value
  );
  console.log(cartaNueva);
  catalogo.push(cartaNueva);

  Swal.fire({
    title: "Jugador agregado",
    text: `${jugadorIngresado.value} ha sido correctamente al catalogo`,
    icon: "success",
    background: "black",
    confirmButtonText: "OK",
    timer: 3100,
    imageUrl: `${cartaNueva.img}`,
    imageHeight: 100,
  });
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
  //resetear los input
  agregarCartaModal.reset();
}
agregarCartaBtn.addEventListener("click", () => {
  agregarCarta(catalogo);
  mostrarCatalogo(catalogo, "comprar");
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        BUSQUEDAD
function buscarCatalogo(buscado, catalogo, campo) {
  let busquedaArray = catalogo.filter((carta) =>
    carta[campo].toLowerCase().includes(buscado.toLowerCase())
  );
  if (busquedaArray.length == 0) {
    mostrarCatalogo("");
    coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`;
  } else {
    coincidencia.innerHTML = "";
    mostrarCatalogo(busquedaArray, "comprar");
    titulo.innerHTML = "Este el catalogo";
  }
}
selectOrdenBusqueda.addEventListener("change", () => {
  console.log(selectOrdenBusqueda.value);
  document
    .getElementById("buscadorBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let campo = "";
      switch (selectOrdenBusqueda.value) {
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
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        ORDENAR CATALOGO
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
      sortedCatalogo.sort((a, b) =>
        a.nombreApellido.localeCompare(b.nombreApellido)
      );
      break;
    case 4: // ordenar de mayor a menor catalogo  x precio
      sortedCatalogo.sort((a, b) => b.precio - a.precio);
      break;
    case 5: // ordenar de menor a mayor catalogo  x precio
      sortedCatalogo.sort((a, b) => a.precio - b.precio);
      break;
    default:
      break;
  }
  titulo.innerHTML = "Este el catalogo";
  mostrarCatalogo(sortedCatalogo, "comprar");
}

selectOrden.addEventListener("change", () => {
  console.log(selectOrden.value);
  ordenarCatalogo(catalogo, parseInt(selectOrden.value));
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                          MI EQUIPO
let jugadorComprados = JSON.parse(localStorage.getItem("miEquipo")) || [];
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        COMPRAR JUGADOR
function agregarAEquipo(carta, precio) {
  if (valorBilletera >= precio) {
    valorBilletera -= precio;
    billetera.textContent = valorBilletera.toString();
    miEquipo.push(carta);
    Swal.fire({
      title: "Jugador Comprado",
      text: `${carta.nombreApellido} ha sido comprado a ${carta.precio}
       has quedado con un total de ${valorBilletera}`,
      icon: "success",
      background: "black",
      confirmButtonText: "OK",
      timer: 4100,
      imageUrl: `../images/${carta.img}`,
      imageHeight: 100,
    });
  } else {
    Swal.fire({
      title: "No tienes suficiente saldo",
      text: `Te faltan ${precio - valorBilletera}`,
      icon: "error",
      background: "black",
      confirmButtonText: "OK",
      timer: 4100,
    });
  }
  localStorage.setItem("miEquipo", JSON.stringify(miEquipo));
  localStorage.setItem("valorBilletera", valorBilletera.toString());
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        VENDER JUGADOR
function venderDeEquipo(carta, precio) {
  valorBilletera = valorBilletera + parseInt(precio);
  billetera.textContent = valorBilletera.toString();
  let cartaIndex = miEquipo.findIndex((c) => c.id === carta.id);
  miEquipo.splice(cartaIndex, 1);
  mostrarCatalogo(miEquipo, "vender");
  localStorage.setItem("miEquipo", JSON.stringify(miEquipo));
  localStorage.setItem("valorBilletera", valorBilletera.toString());
  Swal.fire({
    title: "Jugador vendido",
    text: `${carta.nombreApellido} ha sido vendido ah ${precio}
      has quedado con un total de ${valorBilletera}`,
    icon: "success",
    background: "black",
    confirmButtonText: "OK",
    timer: 4100,
    imageUrl: `../images/${carta.img}`,
    imageHeight: 100,
  });
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                        MOSTRAR MI EQUIPO
mostrarEquipoBtn.addEventListener("click", () => {
  titulo.innerHTML = "Este es tu Equipo";
  cartas.innerHTML = "";
  mostrarCatalogo(miEquipo, "vender");
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                               TIENDA
mostrarTiendaBtn.addEventListener("click", () => {
  cartas.innerHTML = "";
  titulo.innerHTML = "Esta es la Tienda";
  cartas.innerHTML = `
  <div class="packContainer container">
<div class="card">
  <h2>PACK GRATIS</h2>
  <img src="https://fut-watch.com/img/20/packs/25.png" alt="Pack 1">
  <p>Contiene 1 jugador random.</p>
  <button id="claimButton"class="btnComprarVender">GRATIS<img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
<div class="card">
  <h2>PACK DE ORO</h2>
  <img src="https://fut-watch.com/img/20/packs/25.png" alt="Pack 1">
  <p>Contiene 3 jugadores de oro.</p>
  <button id="packOro"class="btnComprarVender">comprar    100000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
<div class="card">  
  <h2>Pack TOTW</h2>
  <img src="https://fut-watch.com/img/20/packs/30k.png" alt="Pack 2">
  <p>Contiene 2 mvp de la semana</p>
  <button id="packTotw" class="btnComprarVender">comprar    500000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
<div class="card">
  <h2>Pack ICONO</h2>
  <img src="https://www.fifplay.com/img/fifa/22/packs/icon-pack.png" alt="Pack 3">
  <p>Contiene 3 iconos.</p>
  <button id="packIcono" class="btnComprarVender btnFix">comprar 3000000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
</div>
<div class="packContainer container">
<div class="card">
  <h2>Pack UCL</h2>
  <img src="https://www.fifplay.com/img/fifa/22/packs/ucl-pack.png" alt="Pack 3">
  <p>Contiene 3 ucl.</p>
  <button id="packUcl" class="btnComprarVender btnFix">comprar 950000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
<div class="card">
  <h2>Pack TOTY</h2>
  <img src="https://pbs.twimg.com/media/ENZXKyGW4AAATHM.png" alt="Pack 3">
  <p>Contiene 3 toty.</p>
  <button id="packToty" class="btnComprarVender btnFix">comprar 3650000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
<div class="card">
  <h2>Fut Champs</h2>
  <img src="https://www.fifplay.com/img/fifa/22/packs/fut-champions-pack.png
  " alt="Pack 3">
  <p>Contiene 3 FutChamps.</p>
  <button id="packFut" class="btnComprarVender btnFix">comprar 1250000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
<div class="card">
  <h2>Pack OTW</h2>
  <img src="https://fut-watch.com/img/20/packs/hh.png?v=2" alt="Pack 3">
  <p>Contene 3 OTW.</p>
  <button id="packOtw" class="btnComprarVender btnFix">comprar 850000<img class="coins img-fluid" src="https://cdn-icons-png.flaticon.com/512/2530/2530538.png" alt="source"><img src="https://cdn-icons-png.flaticon.com/512/2420/2420157.png" style="width:24px; margin-left:9px; margin-right:0px; flex-direction: row;"></button>
</div>
</div>

  `; //        PACK GRATIS
  let claimButton = document.getElementById("claimButton");
  claimButton.addEventListener("click", () => {
    abrirPackGratis();
  });
  // });//        PACK DE ORO
  let packOro = document.getElementById("packOro");
  packOro.addEventListener("click", () => {
    comprarPack(100000, "oro");
  }); //        PACK TOTW
  let packTotw = document.getElementById("packTotw");
  packTotw.addEventListener("click", () => {
    comprarPack(500000, "totw");
  }); //        PACK DE ICONO
  let packIcono = document.getElementById("packIcono");
  packIcono.addEventListener("click", () => {
    comprarPack(2000000, "icono");
  }); //         PACK UCL
  let packUcl = document.getElementById("packUcl");
  packUcl.addEventListener("click", () => {
    comprarPack(950000, "ucl");
  }); //         PACK Fut Champs
  let packFut = document.getElementById("packFut");
  packFut.addEventListener("click", () => {
    comprarPack(1250000, "fut");
  }); //           PACK Otw
  let packOtw = document.getElementById("packOtw");
  packOtw.addEventListener("click", () => {
    comprarPack(850000, "otw");
  }); // PACK Toty
  let packToty = document.getElementById("packToty");
  packToty.addEventListener("click", () => {
    comprarPack(3650000, "toty");
  });
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                            PACKS OPENING
function comprarPack(precio, calidad) {
  if (valorBilletera < precio) {
    Swal.fire({
      title: "No tienes suficiente saldo",
      text: `Te faltan ${precio - valorBilletera}`,
      icon: "error",
      background: "black",
      confirmButtonText: "OK",
      timer: 4100,
    });
  } else {
    Swal.fire({
      title: `Quieres comprar un paquete de ${calidad}`,
      text: `El paquete te costara ${precio}`,
      icon: "info",
      showCancelButton: true,
      background: "black",
      confirmButtonText: "OK",
      confirmButtonColor: "#7066e0",
    }).then((result) => {
      if (result.isConfirmed) {
        valorBilletera -= precio;
        billetera.textContent = valorBilletera.toString();
        cartas.innerHTML = "";
        titulo.innerHTML = "";
        document.getElementById("animation-element").style.display = "flex";
        setTimeout(() => {
          const jugadoresFiltrados = catalogo.filter(
            (carta) => carta.tipoDeCarta === calidad
          );
          const carta1 =
            jugadoresFiltrados[
              Math.floor(Math.random() * jugadoresFiltrados.length)
            ];
          const carta2 =
            jugadoresFiltrados[
              Math.floor(Math.random() * jugadoresFiltrados.length)
            ];
          const carta3 =
            jugadoresFiltrados[
              Math.floor(Math.random() * jugadoresFiltrados.length)
            ];
          const nuevasCartas = [carta1, carta2, carta3];
          miEquipo.push(carta1, carta2, carta3);
          localStorage.setItem("miEquipo", JSON.stringify(miEquipo));
          localStorage.setItem("valorBilletera", valorBilletera.toString());
          document.getElementById("animation-element").style.display = "none";
          document.getElementById("animation-element-black").style.display =
            "flex";
          setTimeout(() => {
            mostrarCatalogo(nuevasCartas, "vender");
            titulo.innerHTML = "Nuevos Jugadores";
            document.getElementById("animation-element-black").style.display =
              "none";
          }, 3800);
        }, 4800);
      }
    });
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  PACK GRATUITO FREE
function abrirPackGratis() {
  const ahora = new Date();
  const fechaUltimoPack = new Date(localStorage.getItem("fechaUltimoPack"));
  if (fechaUltimoPack && fechaUltimoPack.getDate() === ahora.getDate()) {
    Swal.fire({
      title: "Ya has abierto tu pack diario, volve mas tarde",
      icon: "error",
      background: "black",
      confirmButtonText: "OK",
      timer: 4100,
    });
  } else {
    localStorage.setItem("fechaUltimoPack", ahora.toString());
    comprarPack(0, "oro");
  }
}
