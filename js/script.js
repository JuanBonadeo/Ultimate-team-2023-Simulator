class usuarios {
  constructor(id, usuario, contra) {
    (this.id = id), (this.usuario = usuario);
    this.contra = contra;
  }
}
const usuario1 = new usuarios(1, "juanBonadeo", "1234");

const listaUsuarios = [usuario1];

function crearCuenta() {
  let usuarioIngresado = prompt("Ingrese su nombre de usuario");
  let contraIngresada = prompt("Ingrese su contrasenia");

  const nuevoUsuario = new usuarios(
    listaUsuarios.length + 1,
    usuarioIngresado,
    contraIngresada
  );
  console.log(nuevoUsuario);
  //sumarlo a estanteria
  listaUsuarios.push(nuevoUsuario);
  console.log(usuarios.usuario);
}

function iniciarSesion() {
  let usuarioIniciado = prompt("Ingrese su nombre de usuario");
  let contraIniciado = prompt("Ingrese su contrasenia");
  let usuarioEncontrado = listaUsuarios.find(
    (usuarios) => usuarios.usuario == usuarioIniciado
  );
  let contraEncontrado = listaUsuarios.find(
    (usuarios) => usuarios.contra == contraIniciado
  );
  if ((usuarioEncontrado || contraEncontrado) == undefined) {
    alert("contrasenia o usuario incorrectos");
  } else {
    alert(`${usuarioIniciado} a iniciado correctamente`);
  }
}
function menuIniciar() {
  let salir = false;
  do {
    salir = preguntarOpcioniniciar(menuIniciar);
  } while (!salir);
}
function preguntarOpcioniniciar(salir) {
  let opcionIngresada = parseInt(
    prompt(`Ingrese que desea hacer
                1 si desea iniciar sesion
                2 si desea crear una cuenta nueva
                0 si quiere salir de este menu`)
  );

  switch (opcionIngresada) {
    case 1:
      iniciarSesion(listaUsuarios);
      console.log("has ingresado correctamente a Futsimulator23");
      menu();
      break;
    case 2:
      crearCuenta(listaUsuarios);
      break;
    case 0:
      salir = true;
      return salir;
    default:
      console.log("Ingrese una opción correcta");
      break;
  }
}

class carta {
  constructor(
    id,
    nombreApellido,
    img,
    pais,
    global,
    posicion,
    tipoDeCarta,
    ritmo,
    tiro,
    pase,
    regate,
    defensa,
    fisico
  ) {
    //propiedades o atributos de nuestra clase
    (this.id = id),
      (this.nombreApellido = nombreApellido),
      (this.img = img),
      (this.pais = pais),
      (this.global = global),
      (this.posicion = posicion),
      (this.tipoDeCarta = tipoDeCarta),
      (this.ritmo = ritmo),
      (this.tiro = tiro),
      (this.pase = pase),
      (this.regate = regate),
      (this.defensa = defensa),
      (this.fisico = fisico);
  }
}

//          Instanciación de objetos -- respetamos orden y cantidad de atributos
//          Constructor(id, nombre, apellido, img, pais,  global, tipoDeCarta, ritmo, tiro, pase, regate, defensa, fisico)
const carta1 = new carta(
  1,
  "Lionel Messi",
  "../images/messi.jpg",
  "Argentina",
  94,
  "ED",
  "oro",
  90,
  94,
  95,
  89,
  45,
  78
);
const carta2 = new carta(
  2,
  "Cristiano Ronaldo",
  "../images/ronaldo.jpg",
  "Portugal",
  92,
  "DC",
  "oro",
  91,
  92,
  86,
  90,
  51,
  83
);
const carta3 = new carta(
  3,
  "Neymar JR",
  "../images/neymar.jpg",
  "Brasil",
  90,
  "EI",
  "oro",
  93,
  89,
  88,
  94,
  45,
  75
);
const carta4 = new carta(
  4,
  "Killian Mbappe",
  "../images/mpabbe.jpg",
  "francia",
  89,
  "DC",
  "oro",
  90,
  94,
  95,
  89,
  45,
  78
);
const carta5 = new carta(
  5,
  "Juan Roman Riquelme",
  "../images/riquelme.jpg",
  "argentina",
  88,
  "MCO",
  "icono",
  83,
  89,
  95,
  87,
  62,
  81
);
const carta6 = new carta(
  6,
  "Martin Palermo",
  "../images/palermo.jpg",
  "argentina",
  87,
  "DC",
  "icono",
  84,
  90,
  81,
  80,
  45,
  85
);
const carta7 = new carta(
  7,
  "Changuit Zeballos",
  "../images/zeballos.jpg",
  "argentina",
  82,
  "EI",
  "oro",
  88,
  84,
  79,
  88,
  45,
  73
);
const carta8 = new carta(
  8,
  "Dibu Martinez",
  "../images/dibu-martinez.jpg",
  "argentina",
  86,
  "pq",
  "oro",
  84,
  90,
  81,
  80,
  45,
  85
);
const carta9 = new carta(
  9,
  "Rodrigo De Paul",
  "../images/depaul.jpg",
  "argentina",
  87,
  "MC",
  "oro",
  84,
  79,
  90,
  80,
  70,
  70
);
const carta10 = new carta(
  10,
  "Antouane Griezman",
  "../images/griezman.jpg",
  "Francia",
  86,
  "MCO",
  "oro",
  84,
  89,
  83,
  81,
  45,
  75
);
const carta11 = new carta(
  11,
  "Paul Pogba",
  "../images/pogba.jpg",
  "Francia",
  82,
  "MCD",
  "oro",
  84,
  84,
  87,
  88,
  45,
  79
);
const carta12 = new carta(
  12,
  "Erling Halland",
  "../images/halland.jpg",
  "Noruega",
  88,
  "DC",
  "oro",
  87,
  90,
  75,
  75,
  45,
  85
);
const carta13 = new carta(
  13,
  "Alexis Mac Allister",
  "../images/mcallister.jpg",
  "argentina",
  85,
  "MCO",
  "oro",
  84,
  84,
  86,
  80,
  45,
  75
);
const carta14 = new carta(
  14,
  "Didier Drogba",
  "../images/drogba.jpg",
  "costa de marfil",
  89,
  "DC",
  "icono",
  83,
  90,
  80,
  82,
  45,
  85
);
const carta15 = new carta(
  15,
  "Sergio Ramos",
  "../images/ramos.jpg",
  "pais",
  84,
  "DFC",
  "oro",
  77,
  75,
  81,
  65,
  86,
  85
);
const carta16 = new carta(
  16,
  "Alexander Trent Arnold",
  "../images/arnold.jpg",
  "Inglaterra",
  86,
  "DFD",
  "icono",
  87,
  82,
  81,
  74,
  80,
  75
);
const carta17 = new carta(
  17,
  "Alex Garnacho",
  "../images/garnacho.jpg",
  "Argentina",
  80,
  "EI",
  "oro",
  88,
  80,
  75,
  82,
  45,
  68
);
const carta18 = new carta(
  18,
  "Pablo Gavi",
  "../images/gavi.jpg",
  "Espania",
  87,
  "mc",
  "oro",
  84,
  87,
  90,
  82,
  75,
  69
);
const carta19 = new carta(
  19,
  "Sergio Aguero",
  "../images/aguero.jpg",
  "Argentina",
  91,
  "DC",
  "icono",
  876,
  93,
  83,
  85,
  45,
  80
);

//array de objetos:
//cargar array
const catalogo = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15,
  carta16,
  carta17,
  carta18,
  carta19,
];

//                          FUNCIONES DEL PROYECTO

//                      AGREGAR CARTA
function agregarCarta() {
  let jugadorIngresado = prompt("Ingrese el nombre y apellido del jugador");
  let imgIngresado = prompt("ingrese imagen del jugador de la cara");
  let paisIngresado = prompt("Ingrese el pais natal de su jugador");
  let globalIngresado = parseInt(
    prompt("Ingrese el global aproximado de su jugador")
  );
  let posicionIngresado = prompt("Ingrese la posicion de su jugador");
  let tipoDeCartaIngresado = prompt(
    "Ingrese la calidad de su jugador, oro plata bronce"
  );
  let ritmoIngresado = parseInt(
    prompt("Ingrese el ritmo aproximado de su jugador")
  );
  let tiroIngresado = parseInt(
    prompt("Ingrese el tiro aproximado de su jugador")
  );
  let paseIngresado = parseInt(
    prompt("Ingrese el pase aproximado de su jugador")
  );
  let regateIngresado = parseInt(
    prompt("Ingrese el regate aproximado de su jugador")
  );
  let defensaIngresado = parseInt(
    prompt("Ingrese el defensa aproximado de su jugador")
  );
  let fisicoIngresado = parseInt(
    prompt("Ingrese el fisico aproximado de su jugador")
  );

  //creamos nuevo objeto
  //para id dinámica usamos propiedad length
  const cartaNueva = new carta(
    catalogo.length + 1,
    jugadorIngresado,
    imgIngresado,
    paisIngresado,
    globalIngresado,
    posicionIngresado,
    tipoDeCartaIngresado,
    ritmoIngresado,
    tiroIngresado,
    paseIngresado,
    regateIngresado,
    fisicoIngresado,
    defensaIngresado
  );
  console.log(cartaNueva);
  catalogo.push(cartaNueva);
  function mostrarInfoCarta() {
    console.log(`${jugadorIngresado} es de ${tipoDeCartaIngresado} tiene ${globalIngresado} juega de ${posicionIngresado}y sus estadisticas son:
    Ritmo:${ritmoIngresado}
    Tiro:${tiroIngresado}
    Pase:${paseIngresado}
    Regate:${regateIngresado}
    Defensa:${defensaIngresado}
    Fisico:${fisicoIngresado}
    `);
  }
  mostrarInfoCarta(cartaNueva);
}

//                          MOSTAR CATALOGO
function mostarCatalogo(array) {
  array.forEach((carta) => {
    console.log(`${carta.nombreApellido} es de ${carta.pais} tiene ${carta.global} de global es ${carta.posicion} y sus estadisticas son:
            Ritmo:${carta.ritmo}   Regate:${carta.regate}
            Tiro:${carta.tiro}     Defensa:${carta.defensa}
            Pase:${carta.pase}     Fisico:${carta.fisico}`);
  });
}
// BUSQUEDAD
// buscar x nombreApellido
function buscarJugador(catalogo) {
  let jugadorBuscado = prompt(
    "Ingrese el nombre y apellido del jugador que esta buscando"
  );
  let jugadorEncontrado = catalogo.find(
    (carta) =>
      carta.nombreApellido.toUpperCase() == jugadorBuscado.toUpperCase()
  );
  if (jugadorEncontrado == undefined) {
    console.log(`No se encuentra en el catalogo ${jugadorBuscado}!`);
  } else {
    console.log(jugadorEncontrado);
  }
}

// buscar por pocision
function buscarJugadorPosicion(catalogo) {
  let posicionBuscado = prompt(
    "Ingrese la pocision en la que juega el jugador  que estas buscando"
  );
  let busqueda = catalogo.filter(
    (carta) => carta.posicion.toUpperCase() == posicionBuscado.toUpperCase()
  );
  if (busqueda.length == 0) {
    console.log(
      `No hay jugadores que jueguen de  ${posicionBuscado} en el merdcado`
    );
  } else {
    //lo muestro común el array
    console.log(
      `Estos son los jugadores que juegan de ${posicionBuscado} disponibles en el catlogo:`
    );
    mostarCatalogo(busqueda);
  }
}

// buscar por calidad de carta
function buscarCalidad(catalogo) {
  let calidadBuscado = prompt(
    "Ingrese la calidad de la carta que esta buscando"
  );
  let busqueda = catalogo.filter(
    (carta) => carta.tipoDeCarta.toUpperCase() == calidadBuscado.toUpperCase()
  );
  if (busqueda.length == 0) {
    console.log(`No hay jugadores de ${calidadBuscado} en el merdcado`);
  } else {
    //lo muestro común el array
    console.log(
      `Estos son los jugadores de calidad ${calidadBuscado} disponibles en el catalogo:`
    );
    mostarCatalogo(busqueda);
  }
}

// buscar por nacionalidad
function buscarPais(catalogo) {
  let paisBuscado = prompt("Ingrese la nacionalidad que estas buscando");
  let busqueda = catalogo.filter(
    (carta) => carta.pais.toUpperCase() == paisBuscado.toUpperCase()
  );
  if (busqueda.length == 0) {
    console.log(`No hay jugadores que sean  ${paisBuscado} en el merdcado`);
  } else {
    //lo muestro común el array
    console.log(
      `Estos son los jugadores de ${paisBuscado} disponibles en el catalogo:`
    );
    mostarCatalogo(busqueda);
  }
}
//                   BUSCAR JUGADOR MENU
function menuBusquedad() {
  let salirMenuBusquedad = false;
  do {
    salirMenuBusquedad = preguntarOpcionBusquedad(menuBusquedad);
  } while (!salirMenuBusquedad);
}
function preguntarOpcionBusquedad(salirBus) {
  let opcionIngresadaBus = parseInt(
    prompt(`Ingrese por que desea buscar
           1 - Por nombre y apellido
           2 - Por posicion
           3 - Por nacionalidad
           4 - Por calidad
           5 - Por Precio(proximamente)
           0 - Salir del menu`)
  );

  switch (opcionIngresadaBus) {
    case 1:
      buscarJugador(catalogo);
      break;
    case 2:
      buscarJugadorPosicion(catalogo);
      break;
    case 3:
      buscarPais(catalogo);
      break;
    case 4:
      buscarCalidad(catalogo);
      break;
    case 5:
      console.log("proximamente");
      break;
    case 0:
      salirBus = true;
      return salirBus;
    default:
      console.log("Ingrese una opción correcta");
      break;
  }
}

//          ORDENAR CATALOGO
//ordernar de menor a mayor catalogo x global
function ordenarMenorMayorGlobal(catalogo) {
  //copiamos array original // concat
  const menorMayor = [].concat(catalogo);
  //ordena de menor a mayor
  menorMayor.sort((a, b) => a.global - b.global);
  console.log("Ordenados de menor a mayor por el global");
  mostarCatalogo(menorMayor);
}
//ordenar de mayor a menor catalogo  x global 
function ordenarMayorMenorGlobal(catalogo) {
  //ordenar de mayor a menor
  const mayorMenor = [].concat(catalogo);
  mayorMenor.sort((b, a) => a.global - b.global);
  console.log("Ordenados de mayor a menor por el global");

  mostarCatalogo(mayorMenor);
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
  });
  console.log("Ordenados Alfabeticamente");
  mostarCatalogo(ordenadoAlfabeticamente);
}

//menu de ordenar
function menuOrdenar() {
  let salirMenuOrdenar = false;
  do {
    salirMenuOrdenar = preguntarOpcionOrdenar(menuOrdenar);
  } while (!salirMenuOrdenar);

  function preguntarOpcionOrdenar(salir) {
    let opcion = parseInt(
      prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente 
    0 - Salir al Menu Principal`)
    );
    switch (opcion) {
      case 1:
        ordenarMenorMayorGlobal(catalogo);
        break;
      case 2:
        ordenarMayorMenorGlobal(catalogo);
        break;
      case 3:
        ordenarAlfabeticamenteNombre(catalogo);
        break;
      case 0:
        salir = true;
        return salir;
      default:
        console.log("Ingrese una opción correcta");
        break;
    }
  }
}

// menu funcional
function menu() {
  let salirMenu = false;
  do {
    salirMenu = preguntarOpcion(salirMenu);
  } while (!salirMenu);
}

function preguntarOpcion(salir) {
  let opcionIngresada = parseInt(
    prompt(`Ingrese la opción deseada
           1 - Agregar jugador
           2 - Ir al catálogo de jugadores
           3 - Buscar jugador:
           4 - Ordenar catalogo
           5 - Comprar jugador
           6 - Ver mi Equipo
           7 - Eliminar Jugador de mi Equipo
           0 - Salir del menu`)
  );

  switch (opcionIngresada) {
    case 1:
      agregarCarta(catalogo);
      break;
    case 2:
      console.log(`Estos son los jugadores disponibles del catalogo:`);
      mostarCatalogo(catalogo);
      break;
    case 3:
      menuBusquedad(catalogo);
      break;
    case 4:
      menuOrdenar(catalogo);
      break;
    case 5:
      agregarAEquipo(miEquipo);
      break;
    case 6:
      console.log("Este es tu equipo");
      mostarCatalogo(miEquipo);
      break;
    case 7:
      venderJugador(miEquipo);
      mostarCatalogo(miEquipo);
      break;
    case 0:
      console.log("gracias por utilizar nuestra app");
      salir = true;
      return salir;
      break;
    default:
      console.log("Ingrese una opción correcta");
      break;
  }
}

const miEquipo = [];

function agregarAEquipo(miEquipo) {
  let jugadorBuscado = prompt(
    "Ingrese el nombre y apellido del jugador que esta buscando"
  );
  let jugadorEncontrado = catalogo.find(
    (carta) =>
      carta.nombreApellido.toUpperCase() == jugadorBuscado.toUpperCase()
  );
  if (jugadorEncontrado == undefined) {
    console.log(`No se encuentra en el catalogo ${jugadorBuscado}!`);
  } else {
    const agregarNuevoJugador = new carta(jugadorEncontrado);
    miEquipo.push(jugadorEncontrado);
    console.log("Estos son los nuevos jugadores de tu Equipo");
    mostarCatalogo(miEquipo);
  }
}

function venderJugador(miEquipo) {
  let nombreJugadorVender = prompt(
    "Ingrese el Nombre y Apellido del jugador que deseas vender"
  );
  let miEquipoApellidoNombre = miEquipo.map((carta) => carta.nombreApellido);
  console.log(miEquipoApellidoNombre.indexOf(nombreJugadorVender));
  miEquipo.splice(nombreJugadorVender, 1);
  console.log("Asi a quedado tu equipo");
}

menuIniciar(usuarios)

