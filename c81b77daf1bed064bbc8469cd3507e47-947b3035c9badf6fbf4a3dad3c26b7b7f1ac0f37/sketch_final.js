const canvasWidth = 960;
const canvasHeight = 500;

let curRandomSeed = 0;
let lastSwapTime = 0;
let millisPerSwap = 5000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [191, 255, 205];
const whiteCol = [255, 255, 255];
const blkCol = [0, 0, 0];
const pinkBow = [255, 191, 239];

function drawMinnieFace(x, y, w, h, tilt_value, eye_value, mouth_value, bow_valueR, bow_valueG, bow_valueB) {
  push();
  translate(x, y);
  rotate(tilt_value);

  let extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  let scale = extent / 220.0;

  //minnie mouse

  //face
  fill(blkCol);
  ellipse(0 * scale, 0 * scale, 250 * scale, 250 * scale);
  //ovals behind eyes
  fill(whiteCol);
  ellipse(-45 * scale, -45 * scale, 100 * scale, 125 * scale);
  ellipse(45 * scale, -45 * scale, 100 * scale, 125 * scale);
  //semi circle under mouth
  arc(0 * scale, 0 * scale, 230 * scale, 230 * scale, 0, 180, CHORD);

  //nose
  fill(blkCol);
  ellipse(0 * scale, 0 * scale, 60 * scale, 36 * scale);

  //ears
  fill(blkCol);
  ellipse(-120 * scale, -140 * scale, 130 * scale , 130 * scale);
  ellipse(120 * scale, -140 * scale, 130 * scale , 130 * scale);

  //bow
  fill(bow_valueR, bow_valueG, bow_valueB);
  stroke(blkCol);
  triangle(-90 * scale, -80 * scale, -90 * scale, -180 * scale, 0 * scale, -130 * scale);
  triangle(90 * scale, -80 * scale, 90 * scale, -180 * scale, 0 * scale, -130 * scale);
  fill(pinkBow);
  ellipse(0 * scale, -130 * scale, 30 * scale, 30 * scale);

  //left eye blink
  if (eye_value == 1) {
    fill(blkCol);
    ellipse(-50 * scale, -50 * scale, 40 * scale, 5 * scale);
    ellipse( 50 * scale, -50 * scale, 40 * scale, 50 * scale);

    fill(whiteCol);
    ellipse( 40 * scale, -50 * scale, 20 * scale, 20 * scale);
  }
  //both eyes normal
  if (eye_value == 2) {
    fill(blkCol);
    ellipse(-50 * scale, -50 * scale, 40 * scale, 50 * scale);
    ellipse( 50 * scale, -50 * scale, 40 * scale, 50 * scale);

    fill(whiteCol);
    ellipse(-60 * scale, -50 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -50 * scale, 20 * scale, 20 * scale);
  }
  //right eye blink
  if (eye_value == 3) {
    fill(blkCol);
    ellipse(-50 * scale, -50 * scale, 40 * scale, 50 * scale);
    ellipse( 50 * scale, -50 * scale, 40 * scale, 5 * scale);

    fill(whiteCol);
    ellipse(-60 * scale, -50 * scale, 20 * scale, 20 * scale);
  } 

  // mouth
  fill(blkCol);
  arc(0 * scale, 50 * scale, 150 * scale, mouth_value * scale, 0, 180, CHORD);
  pop();
}

function drawMickeyFace(x, y, w, h, tilt_value, eye_value, mouth_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
  rotate(tilt_value);

  let extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  let scale = extent / 220.0;

  //face
  fill(blkCol);
  ellipse(0 * scale, 0 * scale, 250 * scale, 250 * scale);
  //ovals behind eyes
  fill(whiteCol);
  ellipse(-45 * scale, -45 * scale, 100 * scale, 125 * scale);
  ellipse(45 * scale, -45 * scale, 100 * scale, 125 * scale);
  //semi circle under mouth
  arc(0 * scale, 0 * scale, 230 * scale, 230 * scale, 0, 180, CHORD);
  
  //nose
  fill(blkCol);
  ellipse(0 * scale, 0 * scale, 60 * scale, 36 * scale);

  //ears
  fill(blkCol);
  ellipse(-120 * scale, -140 * scale, 130 * scale , 130 * scale);
  ellipse(120 * scale, -140 * scale, 130 * scale , 130 * scale);

   // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(blkCol);
    ellipse(-50 * scale, -50 * scale, 40 * scale, 50 * scale);
    ellipse( 50 * scale, -50 * scale, 40 * scale, 50 * scale);

    fill(whiteCol);
    ellipse(-60 * scale, -50 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -50 * scale, 20 * scale, 20 * scale);
  }
  if (eye_value >= 2) {
    fill(blkCol);
    ellipse(-50 * scale, -50 * scale, 40 * scale, 5 * scale);
    ellipse( 50 * scale, -50 * scale, 40 * scale, 5 * scale);
  }

  // mouth
  fill(blkCol);
  ellipse(0 * scale, 60 * scale, mouth_value * scale, mouth_value * scale);

  pop();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  //timer to update every 5 seconds
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }
  // reset the random number generator each time draw is called
  resetFocusedRandom(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 5x3 grid of circles, with SquareFace in the center
  let w = canvasWidth / 8;
  let h = canvasHeight / 5;
  for(let i=0; i<5; i++) {
    for(let j=0; j<8; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if (i == 0) {
        let tilt_value = focusedRandom(-90, 90, 1);
        let eye_value = int(focusedRandom(1, 3, 1));
        let mouth_value = focusedRandom(30, 90, 1);
        drawMickeyFace(x, y, w, h, tilt_value, eye_value, mouth_value);        
      }
      else if (i == 2) {
        let tilt_value = focusedRandom(-90, 90, 5);
        let eye_value = int(focusedRandom(1, 3 ,5));
        let mouth_value = focusedRandom(30, 90, 5);
        drawMickeyFace(x, y, w, h, tilt_value, eye_value, mouth_value);        
      }
      else if (i == 4) {
        let tilt_value = focusedRandom(-90, 90, 3);
        let eye_value = int(focusedRandom(1, 3, 3));
        let mouth_value = focusedRandom(30, 90, 3);
        drawMickeyFace(x, y, w, h, tilt_value, eye_value, mouth_value);        
      }
      else {
        let tilt_value = focusedRandom(-30, 30, 1);
        let eye_value = int(focusedRandom(1, 4, 1));
        let mouth_value = focusedRandom(30, 90, 1);
        let bow_valueR = focusedRandom(200, 255, 1);
        let bow_valueG = focusedRandom(50, 200, 1);
        let bow_valueB = focusedRandom(75, 255, 1);

        drawMinnieFace(x, y, w, h, tilt_value, eye_value, mouth_value, bow_valueR, bow_valueG, bow_valueB);        
      }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
