let listaPersonajes = [
  {nombre: "Goku", vida: 100, poder: "Kamehameha"},
  {nombre:"Luffy", vida:100, poder:"Gomu Gomu no Pistol"},
  {nombre:"Naruto", vida:100, poder:"Rasengan",},
  {nombre:"Gon Freecss", vida:100, poder:"Jajanken",},
  {nombre:"Tanjiro", vida:100, poder:"Hinokami Kagura",},
];
let personaje1 = null;
let personaje2 = null;
//DOM
let ganadores = [];

let reiniciarJuegoBtn = document.createElement("button");
reiniciarJuegoBtn.textContent = "Reiniciar juego";
reiniciarJuegoBtn.classList.add("reiniciar");
reiniciarJuegoBtn.onclick = function() {
  console.clear();
  personaje1 = null;
  personaje2 = null;
  localStorage.setItem("ganadores", JSON.stringify(ganadores));
  const ganadoresDiv = document.getElementById("ganadores");
  const datos = localStorage.getItem("ganadores");
  if (datos) {
  const ganadores = JSON.parse(datos);
  ganadoresDiv.innerHTML = "Ganadores anteriores: " + ganadores.join(", ");
}
const rondaDiv = document.getElementById('combate');
rondaDiv.innerHTML = "";
const ganadorDiv = document.getElementById('combate');
rondaDiv.innerHTML = "";
const gn = document.getElementById("gn");
   gn.innerHTML = '';
};
document.body.appendChild(reiniciarJuegoBtn);
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
      const MAX_POWER = 40;
      const MIN_POWER = 10;
  
      let vida1 = personaje1.vida;
      let vida2 = personaje2.vida;
  
      let round = 0;
  
      function golpe() {
        let mathRandom = Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER;
        return Math.ceil(mathRandom);
      }
  
      const resultadosDiv = document.createElement("div");
      resultadosDiv.id = "resultados";
      document.body.appendChild(resultadosDiv);
      
      while (vida1 > 0 && vida2 > 0) {
        round += 1;
        let golpe1 = golpe();
        let golpe2 = golpe();
        console.log("-------------- Round " + round +"-----------------")
        ;
    
        // actualizar vida de los personajes
        if(golpe1 > golpe2){
          vida2 -= golpe1;
          if(vida2<0){
              vida2=0
          }
      }else{
          vida1 -= golpe2;
          if(vida1<0){
              vida1=0
          }
      }
        console.log(personaje1.nombre + " produce un daño de " + golpe1 + " utilizando el ataque " + personaje1.poder);
        console.log(personaje2.nombre + " produce un daño de " + golpe2  + " utilizando el ataque " + personaje2.poder);
        console.log("vidas:")
        console.log("La vida de " + personaje2.nombre + " es " + (vida2 > 0 ? vida2 : 0));
        console.log("La vida de " + personaje1.nombre + " es " + (vida1 > 0 ? vida1 : 0));
    
        const combateDiv = document.getElementById('combate');
        const rondaDiv = document.createElement('div');
        rondaDiv.id = 'ronda';
        
        rondaDiv.innerHTML = `Round ${round}: <br>${personaje1.nombre} produce un daño de ${golpe1} utilizando el ataque <span class="poder">${personaje1.poder}</span>.<br> ${personaje2.nombre} produce un daño de ${golpe2} utilizando el ataque <span class="poder">${personaje2.poder}</span>.<br> La vida de <span class="nombre">${personaje1.nombre}</span> es ${vida1 > 0 ? vida1 : 0}.<br> La vida de <span class="nombre">${personaje2.nombre}</span> es ${vida2 > 0 ? vida2 : 0}.`;
        combateDiv.appendChild(rondaDiv); 
      
        // Verificar si algún personaje perdió
        if (vida1 <= 0) {
          console.log("------RESULTADO FINAL----")
          console.log(personaje1.nombre + " ha perdido")
          ganador = personaje2.nombre;
              const gn = document.getElementById("gn");
          gn.innerHTML = `<span class="gn">${ganador} ha ganado </span>`;
          console.log(ganador + " ha ganado");
          console.log(ganador + " ha ganado");
          ganadores.push(ganador);
          break;
        }
        if (vida2 <= 0) {
          console.log("-----RESULTADO FINAL------")
          console.log(personaje2.nombre + " ha perdido");
          ganador = personaje1.nombre;
          const gn = document.getElementById("gn");
          gn.innerHTML = `<span class="gn">${ganador} ha ganado </span>`
          console.log(ganador + " ha ganado");
          ganadores.push(ganador);
        
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
  let elementoLista = document.createElement("li");
  let boton = document.createElement("button");
  boton.textContent = personaje.nombre;
  boton.onclick = function() {
    seleccionarPersonaje(personaje);
  };
  boton.classList.add("btn", "btn-primary"); // agregamos clases de Bootstrap para el estilo del botón
  elementoLista.appendChild(boton);
  lista.appendChild(elementoLista);
}

lista.classList.add("list-group"); // agregamos clase de Bootstrap para el estilo de la lista
document.body.appendChild(lista);
  
  let divCentrado = document.createElement("div");
  divCentrado.classList.add("d-flex", "justify-content-center", "align-items-center");
  divCentrado.appendChild(lista);
  
  document.body.appendChild(divCentrado);
  
     
      

      fetch('https://api.jikan.moe/v4/anime/21/full')
      .then(response => response.json())
      .then(data => {
        const animeTitle = data.data.title;
        console.log(data.data)
        const animeSynopsis = data.data.synopsis;
        const animeImage = data.data.images.jpg.image_url;
    
        document.getElementById("title").innerHTML = animeTitle;
        document.getElementById("synopsis").innerHTML = animeSynopsis;
        document.getElementById("image").src = animeImage;
      });