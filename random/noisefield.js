var n=3400;
var ps= [];
function setup() {
  let width = windowWidth;
  let height = windowHeight;
  createCanvas(width, height);   
  for (let i=0; i<n; i++) 
    ps[i]=  createVector(random(width), random(height));
  background(0);
  colorMode(RGB);
}
function draw() {
  // background(0);
  fill('rgba(0, 0, 0, 0.01)');
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);
  stroke(255);
  
  let f0= 0.002*frameCount;
/*  let f0 = mouseX;
  let f1 = mouseY;*/
  let f1= 0.02*frameCount;
  let f2= 0.008*frameCount;
  
  for (let i=0; i<n; i++) {
    let p= ps[i];
    let ang=(noise( 0.01*p.x + f0, 0.003*p.y ))*4*PI;
    let v= createVector( 0.4*cos(f1), 0.7*sin(ang) + 0.4* cos(f2));
    p.add(v);
    if ( random(1.0)<0.01 ||p.x<0 || p.x>width || p.y<0 || p.y>height)
      ps[i]= createVector(random(width), random(height)); 
/*    let magSq= v.magSq();
    strokeWeight(1 + 0.05/(0.004+magSq));*/
    strokeWeight(random(3));
    let color = map(p.x, 0, width, 0, 200);
    let color2 = map(p.y, 0, width, 0, 200);

    stroke(color, color2, color2);
    point(p.x, p.y);
  }

  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/2, width/2, height/2);
}
