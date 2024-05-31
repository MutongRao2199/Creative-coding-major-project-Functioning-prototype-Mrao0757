let fixedColor;
let size;
let scaleFactor;
let backgroundColor;
let largeCircleColors = [];
let smallCircleColors = [];


// To store circles whose size and color can be modified together
let randomCircles = [];

function setup() {
    // Calculate the size of the canvas
  size = Math.min(windowWidth, windowHeight);
  scaleFactor = size / 1024;
  createCanvas(size, size);
  noStroke();
 
  // Colors of the circles in the middle
  largeCircleColors = [
    color(233, 75, 60), color(119, 197, 147), color(75, 156, 211),
    color(255, 215, 0), color(181, 101, 167), color(255, 165, 0)
  ];

  // Colors of the "randomCircles"
  smallCircleColors = [
    color(75, 156, 211), color(255, 215, 0), color(181, 101, 167),
    color(255, 165, 0), color(233, 75, 60)
  ];


  backgroundColor = color(3, 61, 94);


  // Store circles whose size and color can be modified together
  const circlePatterns = [
    [650, 270, 25, 25], [600, 300, 20, 20], [640, 340, 15, 15], [730, 190, 10, 10],
    [740, 210, 15, 15], [730, 240, 10, 10], [830, 350, 50, 50], [880, 420, 7, 7],
    [880, 450, 5, 5], [890, 450, 5, 5], [880, 490, 20, 20], [880, 510, 10, 10],
    [885, 570, 5, 5], [860, 575, 15, 15], [840, 550, 10, 10], [820, 610, 10, 10],
    [850, 675, 20, 20], [870, 660, 5, 5], [815, 650, 30, 30], [830, 700, 10, 10],
    [840, 710, 10, 10], [485, 765, 20, 20], [480, 810, 30, 30], [490, 865, 25, 25],
    [520, 900, 40, 40], [550, 920, 30, 30], [600, 920, 5, 5], [460, 900, 10, 10],
    [380, 670, 15, 15], [340, 620, 15, 15], [335, 900, 6, 6], [320, 890, 10, 10],
    [290, 850, 50, 50], [295, 790, 30, 30], [310, 810, 10, 10], [310, 770, 10, 10],
    [250, 700, 15, 15], [280, 690, 15, 15], [160, 690, 80, 80], [125, 650, 80, 80],
    [105, 750, 10, 10], [115, 770, 10, 10], [140, 510, 100, 100], [95, 590, 25, 25],
    [80, 470, 10, 10], [150, 410, 70, 70], [270, 390, 130, 130], [305, 255, 175, 175],
    [110, 320, 10, 10], [130, 260, 10, 10], [175, 210, 10, 10], [510, 280, 70],
    [520, 280, 70], [560, 100, 15], [580, 100, 10], [570, 110, 10], [650, 170, 100, 100],
    [600, 250, 50, 50], [680, 250, 30, 30], [690, 340, 35, 35], [720, 170, 5, 5],
    [770, 240, 10, 10], [775, 320, 115, 115], [850, 320, 10, 10], [780, 470, 150, 150],
    [770, 550, 100, 100], [770, 560, 100, 100], [880, 430, 10, 10], [860, 620, 60, 60],
    [700, 650, 50, 50], [760, 710, 100, 100], [750, 790, 50, 50], [600, 800, 200, 200],
    [380, 750, 125, 125], [380, 850, 130, 130], [380, 850, 100, 100], [290, 730, 10, 10],
    [330, 680, 20, 20]
  ];


  const backgroundColorCircles = [
    [510, 280, 70], [770, 550, 100, 100], [380, 850, 130, 130]
  ];


  for (let i = 0; i < circlePatterns.length; i++) {
    randomCircles.push({
      fill: smallCircleColors[i % smallCircleColors.length],
      pattern: circlePatterns[i]
    });
  }


  for (let pattern of backgroundColorCircles) {
    randomCircles.push({ fill: backgroundColor, pattern: pattern });
  }

randomCircles.push({ fill: smallCircleColors[4], pattern: [520, 280, 70] });
randomCircles.push({ fill: smallCircleColors[3], pattern: [560, 100, 15] });
randomCircles.push({ fill: smallCircleColors[0], pattern: [580, 100, 10] });
randomCircles.push({ fill: smallCircleColors[4], pattern: [570, 110, 10] });
randomCircles.push({ fill: smallCircleColors[1], pattern: [650, 170, 100, 100] });
randomCircles.push({ fill: smallCircleColors[2], pattern: [600, 250, 50, 50] });
randomCircles.push({ fill: smallCircleColors[0], pattern: [680, 250, 30, 30] });
randomCircles.push({ fill: smallCircleColors[2], pattern: [690, 340, 35, 35] });
randomCircles.push({ fill: smallCircleColors[3], pattern: [720, 170, 5, 5] });
randomCircles.push({ fill: smallCircleColors[0], pattern: [770, 240, 10, 10] });
randomCircles.push({ fill: smallCircleColors[2], pattern: [775, 320, 115, 115] });
randomCircles.push({ fill: smallCircleColors[3], pattern: [850, 320, 10, 10] });
randomCircles.push({ fill: smallCircleColors[3], pattern: [780, 470, 150, 150] });
randomCircles.push({ fill: smallCircleColors[4], pattern: [770, 560, 100, 100] });
randomCircles.push({ fill: smallCircleColors[3], pattern: [880, 430, 10, 10] });
randomCircles.push({ fill: smallCircleColors[2], pattern: [860, 620, 60, 60] });
randomCircles.push({ fill: smallCircleColors[0], pattern: [700, 650, 50, 50] });
randomCircles.push({ fill: smallCircleColors[1], pattern: [760, 710, 100, 100] });
randomCircles.push({ fill: smallCircleColors[0], pattern: [750, 790, 50, 50] });
randomCircles.push({ fill: smallCircleColors[2], pattern: [600, 800, 200, 200] });
randomCircles.push({ fill: smallCircleColors[1], pattern: [380, 750, 125, 125] });
randomCircles.push({ fill: smallCircleColors[4], pattern: [380, 850, 100, 100] });
randomCircles.push({ fill: smallCircleColors[0], pattern: [290, 730, 10, 10] });
randomCircles.push({ fill: smallCircleColors[1], pattern: [330, 680, 20, 20] });
}


function draw() {
push();
// Fit the image to the window size
scale(scaleFactor);
originalImage();
pop();
}

// Function of special pattern1
function drawDuelCircle(x, y, radius, delta) {
fill(233, 75, 60);
ellipse(x, y, radius * 2, radius * 2);
fill(119, 197, 147);
ellipse(x, y, radius - delta, radius - delta);
}

// Function of special pattern2
function drawCross(x, y, horizontalLength, verticalLength, lineWidth) {
strokeWeight(lineWidth);
stroke('#ffffff');
line(x, y - verticalLength / 2, x, y + verticalLength / 2);
line(x - horizontalLength / 2, y, x + horizontalLength / 2, y);
}

// Function of special pattern3
function drawSpecialCircle(x, y, outerRadius, innerRadius) {
fill(75, 156, 211);
arc(x, y, 2 * outerRadius, 2 * outerRadius, 0, PI);
fill(255, 215, 0);
arc(x, y, 2 * outerRadius, 2 * outerRadius, PI, TWO_PI);
fill(181, 101, 167);
ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}

// Function of special pattern4
function drawComplexCircle(x, y, outerRadius, middleRadius, innerRadius) {
fill(255, 165, 0);
ellipse(x, y, 2 * outerRadius, 2 * outerRadius);
fill(233, 75, 60);
ellipse(x, y, 2 * middleRadius, 2 * middleRadius);
fill(119, 197, 147);
ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}

// Function of drawing all patterns
function originalImage() {
clear();
background(backgroundColor);


let x = 512;
let y = 512;

  // Circles in the middle
for (let r = 390, i = 0; r >= 70; r -= 40, i++) {
  fill(largeCircleColors[i % largeCircleColors.length]);
  ellipse(x, y, r, r);
}

  // Two small circles in the middle
fill(0, 0, 255);
ellipse(x, y - 30, 30, 30);
fill(0, 255, 0);
ellipse(x, y + 30, 30, 30);

  // The moon shape
let moonRadius = 100;
let offset = 45;
fill(255, 165, 0);
ellipse(500, 200, moonRadius * 2, moonRadius * 2);
fill(backgroundColor);
ellipse(500 + offset, 200, moonRadius * 1.9, moonRadius * 1.9);

  // Other special patterns
drawDuelCircle(550, 180, 30, 10);
drawDuelCircle(650, 300, 15, 5);
drawSpecialCircle(820, 760, 20, 15);
drawDuelCircle(500, 730, 15, 5);
drawComplexCircle(210, 790, 50, 25, 10);
drawComplexCircle(220, 550, 90, 70, 20);
drawDuelCircle(400, 320, 30, 20);
drawSpecialCircle(160, 300, 20, 15);

 // Draw "randomCircles"
for (let circle of randomCircles) {
  fill(circle.fill);
  ellipse(...circle.pattern);
}
}


// Fit canvas and pattern to window size
function windowResized() {
size = Math.min(windowWidth, windowHeight);
scaleFactor = size / 1024;
resizeCanvas(size, size);
originalImage();
}