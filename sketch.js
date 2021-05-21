let button, slider, clear, backCanvas, Dcanvas;
let click = false;
let bubbles = [];
let fr = 50;
let tN;
let divider = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textFont('PT Mono')
  
  
  

  button = createButton('Pressure');
  button.mousePressed(changeColor);
  button.position(windowWidth - 278, windowHeight - 120);
  button.size(100,30);
  button.style('background', '#CCCED0');
  button.style('font-size', '14px')
  //button.style('font', 'PT MONO')


  slider = createSlider(0, 63, 2, 9);
  slider.position(windowWidth - 274, windowHeight - 158);
  slider.addClass("mySliders");
  slider.changed(makeBubbles);

  clear = createButton('New');
  clear.mousePressed(clearAll);
  clear.position(windowWidth - 155, windowHeight - 120);
  clear.size(70,30);
  clear.style('background', '#CCCED0');
  button.style('font-size', '14px')
  
  Dcanvas = createGraphics(windowWidth, windowHeight, WEBGL);
  backCanvas = createGraphics(windowWidth, windowHeight);
  backCanvas.clear();
}

function clearAll() {
  bubbles = [];

  if (click) {
    click = false;
  }

  let mx = windowWidth / 2,
    my = windowHeight - 100;
  if (!click) {
    frameRate(fr)
    fill(0, 0, 0);
    stroke(255);
    strokeWeight(3);
  }
  rect(mx, my, 60, 60);

  let tN = slider.value();
  if (!click) {
    tN = 0
  }

}

function clock(){
  tN = slider.value();
  backCanvas.clear();
  
  backCanvas.fill(93,94,96);
  backCanvas.noStroke();
  backCanvas.textSize(150)
  backCanvas.textAlign(CENTER)
  backCanvas.textFont('Rift Soft')
  if(tN == 0){
    backCanvas.text('03:00', windowWidth /2, windowHeight/2 - 50);
  } 
  if(tN ==9){
    backCanvas.text('06:00', windowWidth /2, windowHeight/2 - 50);
  }
  if(tN ==18){
    backCanvas.text('09:00', windowWidth /2, windowHeight/2 - 50);
  }
  if(tN ==27){
    backCanvas.text('12:00', windowWidth /2, windowHeight/2 - 50);
  }
  if(tN ==36){
    backCanvas.text('15:00', windowWidth /2, windowHeight/2 - 50);
  }
  if(tN ==45){
    backCanvas.text('18:00', windowWidth /2, windowHeight/2 - 50);
  }
  if(tN ==54){
    backCanvas.text('21:00', windowWidth /2, windowHeight/2- 50);
  }
  if(tN ==63){
    backCanvas.text('00:00', windowWidth /2, windowHeight/2- 50);
  }
  
}

function panel(){
  //backest rect
  backCanvas.stroke(100)
  backCanvas.strokeWeight(2)
  backCanvas.fill(220)
  backCanvas.rect(windowWidth - 293, windowHeight - 205, 226, 130,2.5)
  
  //text box
  //backCanvas.stroke(98);
  //backCanvas.strokeWeight(0);

  //backCanvas.fill(204, 206, 208);
  //backCanvas.rect(windowWidth - 278, windowHeight - 410, 200, 200, 2.5)
  
  //into text
  backCanvas.fill(98);
  backCanvas.noStroke();
  backCanvas.textSize(27);
  backCanvas.textFont('Helvetica');
  backCanvas.textAlign(LEFT)
  backCanvas.text('MIND.', windowWidth - 288, windowHeight - 507);
  backCanvas.textSize(19);
  backCanvas.text('Floating in a soild cube,', windowWidth - 288, windowHeight - 425);
  backCanvas.textSize(18);
  backCanvas.text('rotatating,', windowWidth - 180, windowHeight - 395);
  backCanvas.textSize(18);
  backCanvas.text('poping out.', windowWidth - 180, windowHeight - 370);
  backCanvas.textSize(20);
  backCanvas.text('Ideas,', windowWidth - 268, windowHeight - 320);
  backCanvas.textSize(18);
  backCanvas.text('by time to time.', windowWidth - 205, windowHeight - 300);
  
  //slider rect
  backCanvas.stroke(100);
  backCanvas.strokeWeight(2);
  backCanvas.fill(204, 206, 208);
  backCanvas.rect(windowWidth - 280, windowHeight - 190, 200, 55, 2.5);
  
  backCanvas.fill(0);
  backCanvas.noStroke();
  backCanvas.textSize(15);
  backCanvas.textFont('Helvetica');
  backCanvas.text('Randomness', windowWidth - 268, windowHeight - 168);
 
  
  
}

function changeColor() {
  
  if (click) {
    frameRate(fr);
    click = false;
    divider = 1;
    bubbles = [];
  } else {
    frameRate(fr+10);
    click = true;
    divider =6;
    bubbles = [];
  }
}

function drawCube(){
  
  Dcanvas.clear()
  Dcanvas.push();
  
  Dcanvas.translate(0, windowHeight / 2 -130, 0);
  
  if(!click){
    
  Dcanvas.pointLight(255, 255,255,0 ,0, 200);
  Dcanvas.ambientMaterial(255, 180);
  Dcanvas.stroke(255)
  Dcanvas.strokeWeight(2);
  Dcanvas.rotateX(frameCount *0.005);
  Dcanvas.rotateY(frameCount *-0.0055);
  Dcanvas.rotateX(-mouseY *0.0055);
  Dcanvas.rotateY(-mouseX *0.0055);
  
      
  }else{
  
  Dcanvas.pointLight(255, random(50, 200), 0, 0 ,0, windowHeight - 100);
  Dcanvas.ambientMaterial(255, random(50, 200), 0, random(180, 220));
  Dcanvas.stroke(random(200), random(255), 0, random(200, 225))
  Dcanvas.strokeWeight(random(2, 3));
  Dcanvas.rotateX(frameCount * random(-0.0003, 0.0003));
  Dcanvas.rotateY(frameCount * random(-0.0003, 0.0003));
    
  }
 
  
  Dcanvas.box(70);
  Dcanvas.pop()
}

function makeBubbles() {

  tN = slider.value()/divider;
  
  if(tN + 9){
    bubbles = [];
    
  }

  let Xextra, Yextra;

  for (let i = 0; i < tN; i++) {
    let x = windowWidth / 2;
    let y = windowHeight - 130;
    let r = 60;
    if (tN >= 18 && tN <= 26) {
      r = r + random(-5, 10);
    } else if (tN >= 27 && tN <= 35) {
      r = r + random(5, 30);
    } else if (tN >= 36 && tN <= 53) {
      r = r + random(20, 50);
    } else if (tN >= 54) {
      r = r + random(30, 60);
    
    }
    if (click && tN <= 18) {
      r = r + 10 +random(30, 50);
    } else if (click && tN >= 27 && tN <= 36) {
      r = r + 10 + random(35, 60);
    } else if (click && tN >= 45) {
      r = r + 10 + random(40, 70);
    }

    let onColor = color(random(255), random(255), random(255), 170);
    let offColor = color(0, 0, 0, 170);
    let onStroke = color(random(200), random(255), 0, random(200, 225));
    let offStroke = color(255);

    let Xspeed = random(-2, 3) + Xextra;
    if (click) {
      Xextra = random(-2, 2)
    } else {
      Xextra = 0
    }
    let Yspeed = random(-5, -1) + Yextra;
    if (click) {
      Yextra = random(-2, -1)
    } else {
      Yextra = 0
    }

    bubbles[i] = new Bubble(x, y, r, onColor, offColor, onStroke, offStroke, Xspeed, Yspeed);
    console.log(tN, bubbles)
  }

}

function draw() {
  
  background(228);
  image(backCanvas,0,0)
  for (let b of bubbles) {
    b.show();
    b.move();
    b.coloring();
    if (click) {
      b.bouncing();
    }
  }
  clock();
  panel();
  drawCube()
  image(Dcanvas,0,0);
 
  
}