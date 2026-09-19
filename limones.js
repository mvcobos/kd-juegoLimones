let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 40;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ALTURA_LIMON = 20;
const ANCHO_LIMON = 20;

let personajeX = canvas.width/2;
let personajeY = canvas.height/2;
let limonX = canvas.width/2;
let limonY = 5;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

// (x, y, ancho, alto)
function dibujarSuelo(){
    ctx.fillStyle = "#3DB6B1";
    ctx.fillRect(0,canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}
//#ff9292
function dibujarPersonaje(){
    ctx.fillStyle = "#CC3A63";
    ctx.fillRect(personajeX, canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX-=10;
    actualizarPantalla();
}

function moverDerecha(){
    personajeX+=10;
    actualizarPantalla();
}

function dibujarLimon(){
    ctx.fillStyle = "#A8DF8E";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTURA_LIMON);
    actualizarPantalla
}

function bajarLimon(){
    limonY+=10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}