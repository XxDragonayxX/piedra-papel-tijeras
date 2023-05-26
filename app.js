// monokai atuentado

//ALERT
Swal.fire(
  "LEST GO, VERY FUNNY, PLAYING",
  "Pierde o gana es tu eleccion",
  "success"
);

//Capturamos elementos del DOM (en este caso los botones)
let BotonPiedra = document.querySelector(".piedra");
let BotonPapel = document.querySelector(".papel");
let BotonTijera = document.querySelector(".tijera");

let manoUsuario = document.querySelector(".mano-usuaria");
let manoComputador = document.querySelector(".mano-computadora");

let puntajeUsuario = document.querySelector(".puntaje-usuaria p");
let puntajeComputador = document.querySelector(".puntaje-computadora p");

let labelResultado = document.querySelector(".resultado");
let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionComputador = "";
let ContadorUsuario = 0;
let ContadorComputador = 0;

//BOTONES
BotonPiedra.onclick = () => {
  manoUsuario.src = "./assets/piedra_user.png";
  manoComputador.src = "./assets/piedra_computadora.png";
  labelResultado.textContent = "...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuario.src = "./assets/piedra_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};
BotonPapel.onclick = () => {
  manoUsuario.src = "./assets/papel_user.png";
  manoComputador.src = "./assets/papel_computadora.png";
  labelResultado.textContent = "...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "papel";
    manoUsuario.src = "./assets/papel_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};
BotonTijera.onclick = () => {
  manoUsuario.src = "./assets/tijera_user.png";
  manoComputador.src = "./assets/tijera_computadora.png";
  labelResultado.textContent = "...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "tijera";
    manoUsuario.src = "./assets/tijera_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

//ALAZAR
const eleccionComputadora = () => {
  let opcionAlazar = Math.floor(Math.random() * 3);

  //opcion piedra
  if (opcionAlazar == 0) {
    manoComputador.src = "./assets/piedra_computadora.png";
    eleccionComputador = "piedra";
  } else if (opcionAlazar == 1) {
    manoComputador.src = "./assets/papel_computadora.png";
    eleccionComputador = "papel";
  } else {
    manoComputador.src = "./assets/tijera_computadora.png";
    eleccionComputador = "tijera";
  }
};

//RESULTADO
const resultado = () => {
  if (eleccionUsuario == "piedra") {
    if (eleccionComputador == "piedra") {
      labelResultado.textContent = "empate";
    }
    if (eleccionComputador == "papel") {
      labelResultado.textContent = "perdiste";
      ContadorComputador++;
      puntajeComputador.textContent = ContadorComputador;
      ganador(ContadorUsuario, ContadorComputador);
    }
    if (eleccionComputador == "tijera") {
      labelResultado.textContent = "Ganaste";
      ContadorUsuario++;
      puntajeUsuario.textContent = ContadorUsuario;
      ganador(ContadorUsuario, ContadorComputador);
    }
  }
  if (eleccionUsuario == "papel") {
    if (eleccionComputador == "papel") {
      labelResultado.textContent = "empate";
    }
    if (eleccionComputador == "tijera") {
      labelResultado.textContent = "perdiste";
      ContadorComputador++;
      puntajeComputador.textContent = ContadorComputador;
      ganador(ContadorUsuario, ContadorComputador);
    }
    if (eleccionComputador == "piedra") {
      labelResultado.textContent = "Ganaste";
      ContadorUsuario++;
      puntajeUsuario.textContent = ContadorUsuario;
      ganador(ContadorUsuario, ContadorComputador);
    }
  }
  if (eleccionUsuario == "tijera") {
    if (eleccionComputador == "tijera") {
      labelResultado.textContent = "empate";
    }
    if (eleccionComputador == "piedra") {
      labelResultado.textContent = "perdiste";
      ContadorComputador++;
      puntajeComputador.textContent = ContadorComputador;
      ganador(ContadorUsuario, ContadorComputador);
    }
    if (eleccionComputador == "papel") {
      labelResultado.textContent = "Ganaste";
      ContadorUsuario++;
      puntajeUsuario.textContent = ContadorUsuario;
      ganador(ContadorUsuario, ContadorComputador);
    }
  }
};

//LIMPIAR Y RESULTADO
function ganador(usu, com) {
  if (usu == 3) {
    Swal.fire("Ganaste");
    ContadorUsuario = 0;
    puntajeUsuario.textContent = ContadorUsuario;
    ContadorComputador = 0;
    puntajeComputador.textContent = ContadorComputador;
  }
  if (com == 3) {
    Swal.fire("Perdiste");
    ContadorUsuario = 0;
    puntajeUsuario.textContent = ContadorUsuario;
    ContadorComputador = 0;
    puntajeComputador.textContent = ContadorComputador;
  }
}
