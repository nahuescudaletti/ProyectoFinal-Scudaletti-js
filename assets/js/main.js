let listaPersonajes = [
  {nombre: "Goku", vida: 100, poder: "Kamehameha"},
  {nombre:"Luffy", vida:100, poder:"Gomu Gomu no Pistol"},
  {nombre:"Naruto", vida:100, poder:"Rasengan",},
  {nombre:"Gon Freecss", vida:100, poder:"Jajanken",},
  {nombre:"Tanjiro", vida:100, poder:"Hinokami Kagura",},
];

let personaje1 = null;
let personaje2 = null;

function seleccionarPersonaje(personajeSeleccionado) {
  // Buscar y filtrar al personaje seleccionado del array listaPersonajes
  const personajeEncontrado = listaPersonajes.find(personaje => personaje.nombre === personajeSeleccionado.nombre);

  if (!personajeEncontrado) {
    console.log("Personaje no encontrado");
    return;
  }
  if (personaje1 === null) {
    personaje1 = personajeEncontrado;
  } else if (personaje2 === null) {
    personaje2 = personajeEncontrado;
    console.log("Objetos seleccionados:");
    console.log(personaje1);
    console.log(personaje2);
  }
  
    if (personaje1 && personaje2) {
      const MAX_POWER = 30;
      const MIN_POWER = 10;
  
      let vida1 = personaje1.vida;
      let vida2 = personaje2.vida;
  
      let round = 0;
  
      function golpe() {
        let mathRandom = Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER;
        return Math.ceil(mathRandom);
      }
  
      while (vida1 > 0 && vida2 > 0) {
        round += 1;
        let golpe1 = golpe();
        let golpe2 = golpe();
        console.log("-------------- Round " + round +"-----------------");
  
        // Actualizar vida de los personajes
        vida1 -= golpe2;
        vida2 -= golpe1;
  
        console.log(personaje1.nombre + " produce un daño de " + golpe1 + " utilizando el ataque " + personaje1.poder);
        console.log(personaje2.nombre + " produce un daño de " + golpe2  + " utilizando el ataque " + personaje2.poder);
        console.log("vidas:")
        console.log("La vida de " + personaje2.nombre + " es " + (vida2 > 0 ? vida2 : 0));
        console.log("La vida de " + personaje1.nombre + " es " + (vida1 > 0 ? vida1 : 0));

  
        // Verificar si algún personaje perdió
        if (vida1 <= 0) {
            console.log("------RESULTADO FINAL----")
          console.log(personaje1.nombre + " ha perdido")
          console.log(personaje2.nombre + " es el ganador");
          break;
        }
        if (vida2 <= 0) {
            console.log("-----RESULTADO FINAL------")
          console.log(personaje2.nombre + " ha perdido");
          console.log(personaje1.nombre + " es el ganador");
          break;
        }
  
        // Verificar si se alcanzó el número máximo de rounds
        if (round >= 10) {
          console.log("Se ha alcanzado el número máximo de rounds");
          break;
        }
      }
    }
  }

  let lista = document.createElement("ul");
  
  for (let i = 0; i < listaPersonajes.length; i++) {
    let personaje = listaPersonajes[i];
    let elemento}
    for (let i = 0; i < listaPersonajes.length; i++) {
        let personaje = listaPersonajes[i];
        let elementoLista = document.createElement("li");
        let boton = document.createElement("button");
        boton.textContent = personaje.nombre;
        boton.onclick = function() {
          seleccionarPersonaje(personaje);
        };
        elementoLista.appendChild(boton);
        lista.appendChild(elementoLista);
      }
      
      document.body.appendChild(lista);
    