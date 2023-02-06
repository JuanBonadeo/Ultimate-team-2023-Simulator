class carta {
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
      fisico
    ) {
      //propiedades o atributos de nuestra clase
      (this.id = id),
        (this.nombreApellido = nombreApellido),
        (this.img = img),
        (this.pais = pais),
        (this.club = club),
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
    "../images/messi.png",
    "Argentina",
    "psg",
    99,
    "ED",
    "toty",
    93,
    99,
    97,
    95,
    45,
    85
  );
  const carta2 = new carta(
    2,
    "Ronaldo",
    "../images/ronaldo.png",
    "Portugal",
    "manchester united",
    92,
    "DC",
    "totw",
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
    "../images/neymar.png",
    "Brasil",
    "psg",
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
    "../images/mbappe.png",
    "francia",
    "psg",
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
    "Roman Riquelme",
    "../images/riquelme.png",
    "argentina",
    "icono",
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
    "../images/palermo.png",
    "argentina",
    "icono",
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
    "Zeballos",
    "../images/zeballos.png",
    "argentina",
    "boca",
    82,
    "EI",
    "future star",
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
    "../images/dibu-martinez.png",
    "argentina",
    "aston villa",
    86,
    "PQ",
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
    "../images/depaul.png",
    "argentina",
    "atletico de madrid",
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
    "Griezman",
    "../images/griezman.png",
    "Francia",    
    "atletico de madrid",
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
    "../images/pogba.png",
    "Francia",
    "manchester united",
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
    "Erling Haland",
    "../images/haland.png",
    "Noruega",
    "manchester city",
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
    "Mac Allister",
    "../images/mcallister.png",
    "argentina",
    "brighton",
    85,
    "MCO",
    "totw",
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
    "../images/drogba.png",
    "costa de marfil",
    "icono",
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
    "../images/ramos.png",
    "espania",
    "psg",
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
    "Alexander Arnold",
    "../images/arnold.png",
    "Inglaterra",
    "liverpool",
    86,
    "DFD",
    "oro",
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
    "../images/garnacho.png",
    "Argentina",
    "manchester united",
    84,
    "EI",
    "future star",
    88,
    80,
    75,
    82,
    45,
    68
  );
  const carta18 = new carta(
    18,
    "Gavi",
    "../images/gavi.png",
    "Espania",
    "barcelona",
    87,
    "MC",
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
    "../images/aguero.png",
    "Argentina",
    "icono",
    91,
    "DC",
    "icono",
    87,
    93,
    83,
    85,
    45,
    80
  );
  const carta20 = new carta(
    19,
    "Benzema",
    "../images/benzema.png",
    "francia",
    "real madrid",
    91,
    "DC",
    "oro",
    84,
    93,
    86,
    87,
    45,
    78
  );
    const carta0 = new carta(
    19,
    "Enzo Fernandez",
    "../images/fernandez.png",
    "argentina",
    "chelsea",
    87,
    "MC",
    "oro",
    83,
    86,
    90,
    84,
    76,
    76
  );
  

  


  //Agregar storage a nuestro 
//array de objetos:
let catalogo = []
if(localStorage.getItem("catalogo")){
    catalogo = JSON.parse(localStorage.getItem("catalogo"))
}else{
    //entra por primera vez
    catalogo.push(
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta0,
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
  carta20
    )
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
}

let miEquipo = []
if(localStorage.getItem("miEquipo")){
    miEquipo = JSON.parse(localStorage.getItem("miEquipo"))
}else{
    //entra por primera vez
    miEquipo.push()
    localStorage.setItem("miEquipo", JSON.stringify(miEquipo))
}