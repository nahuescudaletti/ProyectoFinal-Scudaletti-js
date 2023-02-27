
  let listaPersonajes = [
    {nombre: "Goku", vida: 100, poder: "Kamehameha"},
    {nombre:"Luffy", vida:100, poder:"Gomu Gomu no Pistol"},
    {nombre:"Naruto", vida:100, poder:"Rasengan",},
    {nombre:"Gon Freecss", vida:100, poder:"Jajanken",},
    {nombre:"Tanjiro", vida:100, poder:"Hinokami Kagura",},
  ];
  
  let personaje1 = null;
  let personaje2 = null;
  
  function seleccionarPersonaje(personaje) {
    if (personaje1 === null) {
        personaje1 = personaje;
    } else if (personaje2 === null) {
        personaje2 = personaje;
    } else {
      console.log("Ya has seleccionado dos objetos");
    }
  
    if (personaje1 && personaje2) {
      console.log("Objetos seleccionados:");
      console.log(personaje1);
      console.log(personaje2);
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
    elementoLista.appendChild(boton);
    lista.appendChild(elementoLista);
  }
  
  document.body.appendChild(lista);

const MAX_POWER = 30
const MIN_POWER = 10

let vidaLuffy = 100
let vidaNaruto = 100

let round = 0



function golpe(){
    let mathRandom = Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER;
    return Math.ceil(mathRandom);
}
while(vidaLuffy > 0 && vidaNaruto > 0){
    round +=1
    let golpeLuffy = golpe()
    let golpeNaruto = golpe()
        console.log("-------------- Round " + round +"-----------------")
       
    if(golpeLuffy > golpeNaruto){
        vidaNaruto -= golpeLuffy;
        if(vidaNaruto<0){
            vidaNaruto=0
        }
        console.log("Luffy produce un daño de " + golpeLuffy)
        console.log("La vida de Naruto es " + vidaNaruto)
        console.log("La vida de Luffy es " + vidaLuffy)
    }else{
        vidaLuffy -= golpeNaruto;
        if(vidaLuffy<0){
            vidaLuffy=0
        }
        console.log("Naruto produce un daño de " + golpeNaruto)
        console.log("La vida de Naruto es " + vidaNaruto)
        console.log("La vida de Luffy es " + vidaLuffy)
    }
}