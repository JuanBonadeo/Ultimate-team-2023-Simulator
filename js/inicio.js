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
  