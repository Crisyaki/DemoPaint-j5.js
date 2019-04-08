var size = 3;
var arraySizes = [2, 4, 8, 10, 12, 16, 20, 30];
var arrayColor = [[255, 74, 74],[255, 74, 214], [101, 255, 74],[255, 255, 0],[74, 126, 255],[151, 74, 255],[0,0,0],[100,100,100]]
var colorPincel = 0;
var tipoPincel = 0;


function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  colorMenu();
  showButtons();
  if (mouseIsPressed) {
    if (mouseX <= 50 && mouseY <= 100) getColor(); //seleccionar color
    else pintarPincel();
  }
}

function getColor(){
  var x = Math.trunc(mouseX/25); //Truncamos para saber que color es
  var y = Math.trunc(mouseY/25);
  if(x==0) // columna par
    colorPincel = y*2;
  else    //columna impar
    colorPincel = y*2+1;
}

function pintarPincel(){
  
  if(tipoPincel==0){
    stroke(arrayColor[colorPincel][0], arrayColor[colorPincel][1], arrayColor[colorPincel][2]);
    fill(arrayColor[colorPincel][0], arrayColor[colorPincel][1], arrayColor[colorPincel][2])
    ellipse(mouseX, mouseY, arraySizes[size], arraySizes[size]);
  }else{
    stroke(255);
    fill(255)
    ellipse(mouseX, mouseY, arraySizes[size], arraySizes[size]);
  }
  stroke(0);
}

function colorMenu() {
  fill(255);
  rect(0, 100, 50, 50); //Cuadrado para el tamaño del pincel
  fill(arrayColor[colorPincel][0], arrayColor[colorPincel][1], arrayColor[colorPincel][2]);
  ellipse(25, 125, arraySizes[size], arraySizes[size]); //muestra del puntero
  
  fill(arrayColor[0][0], arrayColor[0][1], arrayColor[0][2]);    //Color rojo
  rect(0, 0, 25, 25);
  
  fill(arrayColor[1][0], arrayColor[1][1], arrayColor[1][2]);  //Color rosa
  rect(25, 0, 25, 25);
  
  fill(arrayColor[2][0], arrayColor[2][1], arrayColor[2][2]);    //Color verde
  rect(0, 25, 25, 25);
  
  fill(arrayColor[3][0], arrayColor[3][1], arrayColor[3][2]);    //Color amarillo
  rect(25, 25, 25, 25);
  
  fill(arrayColor[4][0], arrayColor[4][1], arrayColor[4][2]);    //Color azul
  rect(0, 50, 25, 25);
  
  fill(arrayColor[5][0], arrayColor[5][1], arrayColor[5][2]);    //Color negro
  rect(25, 50, 25, 25);
  
  fill(arrayColor[6][0], arrayColor[6][1], arrayColor[6][2]);  //Color morado
  rect(0, 75, 25, 25);
  
  fill(arrayColor[7][0], arrayColor[7][1], arrayColor[7][2]);    //Color gris
  rect(25, 75, 25, 25);
  stroke(0);
}

function limpiar() {
  background(255);
}

function sizeMas(){
  if (++size == arraySizes.length) size = arraySizes.length-1;
}

function sizeMenos(){
  if (--size == -1) size = 0;
}

function selectPincel(){
  tipoPincel = 0;
}

function selectBorrador(){
  tipoPincel = 1;
}

function showButtons(){
  sizeButton1 = createButton('+');
  sizeButton1.position(0, 150);
  sizeButton1.size(25, 25);
  sizeButton1.mousePressed(sizeMas);
  sizeButton2 = createButton('-');
  sizeButton2.position(25, 150);
  sizeButton2.size(25, 25);
  sizeButton2.mousePressed(sizeMenos);
  
  pincelButton = createButton('Pincel');
  pincelButton.position(0, 175);
  pincelButton.size(50, 25);
  pincelButton.mousePressed(selectPincel);
  
  gomaButton = createButton('Goma');
  gomaButton.position(0, 200);
  gomaButton.size(50, 25);
  gomaButton.mousePressed(selectBorrador);
  
  resetButton = createButton('Clear');
  resetButton.position(0, 220);
  resetButton.size(50, 25);
  resetButton.mousePressed(limpiar);
}

