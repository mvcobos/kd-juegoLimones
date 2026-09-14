let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let alturaSuelo = 40;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}
function dibujarSuelo(){
    ctx.fillStyle = "#FEE7C8";
    ctx.fillRect(0,canvas.height - alturaSuelo, canvas.width,alturaSuelo);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#ff9292";
    ctx.fillRect(canvas.width/2, canvas.height-(alturaSuelo+60), 40, 60);
}