let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;

let xRaquete = 5;
let yRaquete = 150;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostrarRaquete ();
  movimentaMinhaRaquete();
}
  
function mostraBolinha(){
circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function verificaColisao(){
  if (xBolinha + raio> width||
    xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
    yBolinha - raio <0){
   velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);

  
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
 }
}

 


  
