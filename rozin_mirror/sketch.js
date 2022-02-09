let capture;
const w = 640;
const h = 360;

function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  
  // colorMode(HSB, 255);
  
  rectMode(CENTER)
}

function draw() {
  background(255);
  
  const stepSize = 16;
  noStroke();
  capture.loadPixels();
  
  push()
    translate(width, 0);
    scale(-1, 1);
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      
      const i = (x + y * width) * 4;
      
      const r = capture.pixels[i]; // red channel
      const g = capture.pixels[i+1]; // green channel
      const b = capture.pixels[i+2]; // blue channel
      // capture.pixels[i+3] = 1; // alpha channel
      
      const brightness = (r + g + b) / 3
     
      
      fill(255,53,184);
      //stroke(0);
      //strokeWeight(1);
      rect(x, y, stepSize, stepSize);
      
      const size = map(brightness, 0, 255, stepSize/2, stepSize/2)
      const rotation = map(brightness, 0, 255, 0, PI)
      
      push()
        translate(x, y)
        rotate(rotation)
        strokeWeight(1);
        stroke(0);

        textSize(stepSize);
        // text('x',0,0,stepSize);
        // line(0, 0, 0, stepSize);
        if (brightness>120){
          text('👀',0,0,stepSize)
          
        } else {
          text('👁',0,0,stepSize)
        }
      
        // rect(0, 0, size, size);
      pop()
      }
  }
  pop();
  
  capture.updatePixels();
  
  // image(capture, 0, 0);
  //print(capture.pixels.length)
  
}