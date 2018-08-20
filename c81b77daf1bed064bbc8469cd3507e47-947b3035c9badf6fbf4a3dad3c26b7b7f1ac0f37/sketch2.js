var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 3, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color1 = [207, 247, 217];
var bg_color2 = [207, 245, 247];
var bg_color3 = [207, 213, 247];

var fg_color1 = [151, 102, 52];
var fg_color2 = [252, 159, 193];
var fg_color3 = [255, 223, 155];//[206, 207, 180];
var fg_color4 = [0, 0, 0];
var fg_color5 = [255, 255, 255];
var fg_color6 = [255, 219, 232];
var fg_color7 = [173, 121, 43];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [247, 171, 79];

function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
  push();
  translate(x, y);
  rotate(tilt_value*2);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }

  var scale = extent / 200.0;

  //fill(fg_color1);
 
  //ears
  fill(fg_color4);
  ellipse(90, -80, 70, 70);
  ellipse(-90, -80, 70, 70);

  //head
  fill(fg_color5);
  ellipse(0, 0, 250, 250);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(fg_color4);
    ellipse( 0, -80 * scale, 50 * scale, 60 * scale);
    fill(fg_color5);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(fg_color4);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 60 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 60 * scale);

    fill(fg_color5);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color1);
  ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  pop();
}

function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
  rectMode(CENTER);
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  //face
  fill(fg_color3);
  ellipse(0, 0, 350 * scale, 400 * scale);
  //ears
  ellipse(90, -80, 70, 70);
  ellipse(-90, -80, 70, 70);
  //nose
  fill(fg_color7);
  ellipse(0, 0, 20, 20);

  // eyes. first check for blinking
  stroke(stroke_color3);
  if(blink_value > 0) {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 2 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 2 * scale);
  }
  else {
    fill(bg_color3);
    ellipse(-50 * scale, -80 * scale, 50 * scale, 18 * scale);
    ellipse( 50 * scale, -80 * scale, 50 * scale, 18 * scale);

    fill(fg_color3);
    ellipse((-50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse(( 50 + eye_value) * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color3);
  ellipse(0 * scale, 70 * scale, 150 * scale, 20 * scale);
  var a = 500;
  // TODO: paramaterize hair
  var follicles = [
    [346,138],
    [391,120],
    [391,67],
    [439,76],
    [463,42],
    [487,18],
    [481,101],
    [520,102],
    [520,78],
    [533,54],
    [560,108],
    [580,76],
    [596,124],
    [618,124],
    [605,170],
    [630,180],
    [635,220],
    [350, 200],
    [335, 180],
    [320, 170],
    [315, 230],

    [346,a+ -138],
    [391,a+ -120],
    [391,a+ -67],
    [439,a+ -76],
    [463,a+ -42],
    [487,a+ -18],
    [481,a+ -101],
    [520,a+ -102],
    [520,a+ -78],
    [533,a+ -54],
    [560,a+ -108],
    [580,a+ -76],
    [596,a+ -124],
    [618,a+ -124],
    [605,a+ -170],
    [630,a+ -180],
    [635,a+ -220],
    [350,a+ -200],
    [335,a+ -180],
    [320,a+ -170],
    [315,a+ -230],

  ];

  resetMatrix();
  noStroke();
  fill(colorHair);
  var radius = hair_value * scale;
  for(var i=0; i<follicles.length; i++) {
    ellipse(240+follicles[i][0]/2, 120 + (follicles[i][1]/2), radius, radius);
  }
  rectMode(CORNER);
  resetMatrix();
}

function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
  push();
  rectMode(CENTER);
  translate(x, y);
  // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;

  stroke(stroke_color2)
  // fill(fg_color2);
  // //rect(0, 0, (300 + width_value) * scale, 400 * scale);
  // ellipse(0, 0, 200, 200);
  fill(fg_color6);
  //triangle(100, 0, 150, 0, 86, 75);
  //triangle(-100, 75, 58, 20, 86, 75);
  triangle(-62.5, -12, -110, -120, -20, -90);
  triangle(62.5, -12, 110, -120, 20, -90);

  fill(fg_color2);
  //rect(0, 0, (300 + width_value) * scale, 400 * scale);
  ellipse(0, 0, 200, 200);

  // eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color2);
    rect( 0, -80 * scale, 50 * scale, 30 * scale);
    fill(fg_color2);
    ellipse(-10 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  if (eye_value >= 2) {
    fill(bg_color2);
    rect(-60 * scale, -80 * scale, 50 * scale, 30 * scale);
    rect( 60 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color2);
    ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    ellipse( 60 * scale, -80 * scale, 20 * scale, 20 * scale);
  }

  // mouth
  fill(bg_color2);
  rect(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  rectMode(CORNER);
  pop();
}

function draw () {
  noStroke();

  var mode = faceSelector.value();

  if (mode != 'all') {
    if (mode == '1') {
      background(bg_color1);
    }
    else if (mode == '2') {
      background(bg_color2);
    }
    else if (mode == '3') {
      background(bg_color3);
    }
  }

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2;

  if (mode == '1' || mode == 'all') {
    // draw 1st face
    fill(bg_color1);
    rect(0, 0, width/3, height);
    var tilt_value = map(s1, 0, 100, -90, 90);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 3, 1, 3));
    if (mode == 'all') {
      face_x = width / 6;
    }
    drawFace1(face_x, face_y, face_w, face_h, tilt_value, eye_value, mouth_value);    
  }

  if (mode == '2' || mode == 'all') {
    // draw 2nd face
    fill(bg_color2);
    rect(width/3, 0, 2*width/3, height);
    var hair_value = map(s1, 0, 100, 2, 90);
    var blink_value = Math.floor(map(s3, 0, 100, 0, 1));
    var eye_value = map(s2, 0, 3, -15, 15);
    if (mode == 'all') {
      face_x = 3 * width / 6;
    }
    drawFace2(face_x, face_y, face_w, face_h, hair_value, eye_value, blink_value);
  }

  if (mode == '3' || mode == 'all') {
    // draw 3nd face
    fill(bg_color3);
    rect(2*width/3, 0, width, height);
    var width_value = map(s1, 0, 100, 0, 100);
    var mouth_value = map(s3, 0, 100, 0, 200);
    var eye_value = Math.floor(map(s2, 0, 3, 0, 3));
    if (mode == 'all') {
      face_x = 5 * width / 6;
    }
    drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
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
