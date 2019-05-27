let angle = 0;
let yvalue = [];
let slider;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 10);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  let x = 0;
  let y = 0;

  for (i = 1; i < slider.value(); i++) {
    let prev_x = x;
    let prev_y = y;
    n = i;

    let radius = 75 * (2 / (n * -1 * PI));
    noFill();
    stroke(255, 150);

    ellipse(prev_x, prev_y, radius * 2);

    x += radius * cos(n * angle);
    y += radius * sin(n * angle);
    fill(255, 10);
    //ellipse(prev_x, prev_y, 8, 8);
    line(x, y, prev_x, prev_y);
  }

  yvalue.unshift(y);

  beginShape();
  translate(150, 0);
  line(x - 150, y, 0, yvalue[0]);
  for (i = 0; i < yvalue.length; i++) {
    noFill();
    vertex(i, yvalue[i]);
  }

  if (yvalue.length > 300) {
    yvalue.pop();
  }
  endShape();

  angle += 0.05;
}
