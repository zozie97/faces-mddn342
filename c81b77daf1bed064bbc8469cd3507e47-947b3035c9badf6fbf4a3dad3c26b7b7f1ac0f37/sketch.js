const canvasWidth = 960;
const canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
const bg_color = "#ccfcd9"; //light green
const fg_color1 = "#ffffff"; //white
const fg_color2 = "#cee3ff"; //light blue
const fg_color3 = "#000000"; //black
const fg_color4 = "#fce2ff"; //light pink
const stroke_color = "#e9eae3"; //beige

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

  // move to position1, rotate
  push();
  translate(960/4, 500/2);
  rotate(4);

  //ears
  fill(fg_color3);
  ellipse(110, -150, 80, 80);
  ellipse(-110, -150, 80, 80);

  //head
  fill(fg_color1);
  ellipse(0, 0, 350, 350);

  // set fill to match background color
  fill(fg_color3);
  // draw two eyes
  ellipse(-50, -60, 50, 50);
  ellipse( 50, -60, 50, 50);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(-50, -55, 10, 10);
  ellipse( 50, -55, 10, 10);

  // mouth-hole with background color
  fill(fg_color3);
  ellipse( 0, 70, 100, 40);

  //nose
  fill(fg_color4);
  ellipse(0, 0, 40, 30);

  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(30);
  //ears
  fill(fg_color3);
  ellipse(110, -150, 80, 80);
  ellipse(-110, -150, 80, 80);

  //head
  fill(fg_color1);
  ellipse(0, 0, 350, 350);

  // set fill to match background color
  fill(fg_color3);
  // draw two eyes
  ellipse(-50, -60, 50, 50);
  ellipse( 50, -60, 50, 50);

  // set fill back to foreground for eyeballs
  fill(fg_color1);
  ellipse(-50, -55, 10, 10);
  ellipse( 50, -55, 10, 10);

  // mouth-hole with background color
  fill(fg_color3);
  ellipse( 0, 70, 100, 40);

  //nose
  fill(fg_color4);
  ellipse(0, 0, 40, 30);

  pop();
  // fill(fg_color2);
  // ellipse(0, 0, 300, 400);
  //
  // // set fill to match background color
  // fill(bg_color);
  // // draw two eyes
  // ellipse(-50, -80, 50, 30);
  // ellipse( 50, -80, 50, 30);
  //
  // // set fill back to foreground for eyeballs
  // fill(fg_color2);
  // ellipse(-40, -80, 20, 20);
  // ellipse( 40, -80, 20, 20);
  //
  // // mouth-hole with background color
  // fill(bg_color);
  // ellipse( 0, 70, 150, 50);
  // pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
