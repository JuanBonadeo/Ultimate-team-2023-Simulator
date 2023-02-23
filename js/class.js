// CATALOGO
class Carta {
  constructor(
    id,
    nombreApellido,
    img,
    pais,
    club,
    global,
    posicion,
    tipoDeCarta,
    ritmo,
    tiro,
    pase,
    regate,
    defensa,
    fisico,
    precio
  ) {
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.img = img;
    this.pais = pais;
    this.club = club;
    this.global = global;
    this.posicion = posicion;
    this.tipoDeCarta = tipoDeCarta;
    this.ritmo = ritmo;
    this.tiro = tiro;
    this.pase = pase;
    this.regate = regate;
    this.defensa = defensa;
    this.fisico = fisico;
    this.precio = precio;
  }
}
let catalogo = [];
const cargarCatalogo = async () => {
  const response = await fetch("cartas.json");
  const data = await response.json();
  console.log(data);
  for (let carta of data) {
    let cartaNueva = new Carta(
      carta.id,
      carta.nombreApellido,
      carta.img,
      carta.pais,
      carta.club,
      carta.global,
      carta.posicion,
      carta.tipoDeCarta,
      carta.ritmo,
      carta.tiro,
      carta.pase,
      carta.regate,
      carta.defensa,
      carta.fisico,
      carta.precio
    );
    catalogo.push(cartaNueva);
  }
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
};

if (localStorage.getItem("catalogo")) {
  for (let carta of JSON.parse(localStorage.getItem("catalogo"))) {
    let cartaNueva = new Carta(
      carta.id,
      carta.nombreApellido,
      carta.img,
      carta.pais,
      carta.club,
      carta.global,
      carta.posicion,
      carta.tipoDeCarta,
      carta.ritmo,
      carta.tiro,
      carta.pase,
      carta.regate,
      carta.defensa,
      carta.fisico,
      carta.precio
    );
    catalogo.push(cartaNueva);
  }
} else {
  console.log("Seteando catálogo de cartas");
  cargarCatalogo(catalogo);
}
//-----------------------------------------------------------------------------------------
// Mi equipo
let miEquipo = [];
if (localStorage.getItem("miEquipo")) {
  miEquipo = JSON.parse(localStorage.getItem("miEquipo"));
} else {
  //entra por primera vez
  miEquipo.push();
  localStorage.setItem("miEquipo", JSON.stringify(miEquipo));
}
//-----------------------------------------------------------------------------------------
// billetera
if (localStorage.getItem("valorBilletera")) {
  valorBilletera = JSON.parse(localStorage.getItem("valorBilletera"));
  billetera.textContent = valorBilletera.toString();
} else {
  // Entra por primera vez
  valorBilletera = 150000; // Valor predeterminado
  localStorage.setItem("valorBilletera", JSON.stringify(valorBilletera));
}
