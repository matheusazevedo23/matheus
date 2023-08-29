let xraquete = 5;
let yraquete =150;
let raquetelargura = 10;
let raquetealtura = 90;

// variaveis da bolinha
let xbolinha=250
let ybolinha=230
let diametro=60
let velocidadeXbolinha=4;
let velocidadeYbolinha=4;
let raio = diamentro/2;

//Variaveis RaqueteOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let LarguraRaqueteOponente = 10;
let AlturaRaqueteOponente = 90;

//Variaveis do placar
let meusPontos = 0;
let PontosOponente = 0;
let PontosMarcado = false;

function setup () {
createCanvas(500,500);
}

function draw() {
  background (0);
  mostrarbolinha();
  MostraRaquete();
  movimentobolinha();
verificacoacolisaoBorda();
}

 function mostrarbolinha(){
  circle( xbolinha, ybolinha, diametro);
}
 function MostraRaquete(){
    rect( xraquete,yraquete,raquetelargura,raquetealtura);
 }

function  movimentobolinha(){
  xbolinha += velocidadeXbolinha
  ybolinha += velocidadeYbolinha
}
function verificacoacolisaoBorda(){
  
  if(ybolinha + raio > widdth )
}
function  movi


