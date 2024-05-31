let fixedColor;
let size;
let scaleFactor;
let backgroundColor;
let largeCircleColors = [];
let smallCircleColors = [];


// To store circles whose size and color can be modified together
let randomCircles = [];
let visibleStates1 = []; // To store the visibility state of 25 stars
let visibleStates2 = []; // To store the visibility state of 25 stars
let smallestCirclesIndices = []; // To store the indices of the smallest 50 circles（stras）

// Define the rotating circles and their initial positions and angles
let rotatingCircles = [
  {x: 270, y: 390, radiusX: 130, radiusY: 130, initialX: 270, initialY: 390, angle: 90},
  {x: 380, y: 750, radiusX: 125, radiusY: 125, initialX: 380, initialY: 750, angle: 180},
  {x: 160, y: 690, radiusX: 80, radiusY: 80, initialX: 160, initialY: 690, angle: 260},
  {x: 780, y: 470, radiusX: 150, radiusY: 150, initialX: 780, initialY: 470, angle: 170}
];

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

  // Sort circles by size (ascending order) and get the indices of the smallest stars
  smallestCirclesIndices = randomCircles
    .map((circle, index) => ({ index, size: circle.pattern[2] }))
    .sort((a, b) => a.size - b.size)
    .slice(0, 50)
    .map(obj => obj.index);


  // Initialize visibility states for the smallest stars
  for (let i = 0; i < randomCircles.length; i++) {
    visibleStates1.push(true);
    visibleStates2.push(true);
}

// Set intervals to toggle visibility every 500 milliseconds and 700 milliseconds
setInterval(() => toggleVisibility1(), 500);
setInterval(() => toggleVisibility2(), 700);
setInterval(updateRotatingCircles, 20);
}

function toggleVisibility1() {
  for (let i = 0; i < smallestCirclesIndices.length; i += 2) {
    visibleStates1[smallestCirclesIndices[i]] = !visibleStates1[smallestCirclesIndices[i]];
  }
}


function toggleVisibility2() {
  for (let i = 1; i < smallestCirclesIndices.length; i += 2) {
    visibleStates2[smallestCirclesIndices[i]] = !visibleStates2[smallestCirclesIndices[i]];
  }
}

function updateRotatingCircles() {
  rotatingCircles.forEach(circle => {
    circle.angle += 0.01;
    if (circle.angle > TWO_PI) {
      circle.angle -= TWO_PI;
    }
  });
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

 // Draw "randomCircles" and find smallest circle
 for (let i = 0; i < randomCircles.length; i++) {
  let circle = randomCircles[i];
 
  // Check if the current circle is one of the rotating circles
  let rotatingCircle = rotatingCircles.find(rc => rc.initialX === circle.pattern[0] && rc.initialY === circle.pattern[1]);
  if (rotatingCircle) {
    let angle = rotatingCircle.angle || 0;
    let radius = dist(512, 512, rotatingCircle.initialX, rotatingCircle.initialY);
    let newX = 512 + cos(angle) * radius;
    let newY = 512 + sin(angle) * radius;
    fill(circle.fill);
    ellipse(newX, newY, circle.pattern[2], circle.pattern[3]);
  } else {
    if (smallestCirclesIndices.includes(i)) {
      if ((smallestCirclesIndices.indexOf(i) % 2 === 0 && !visibleStates1[i]) ||
          (smallestCirclesIndices.indexOf(i) % 2 !== 0 && !visibleStates2[i])) {
        continue;
      }
    }
    fill(circle.fill);
    ellipse(...circle.pattern);
  }
}
}

// Fit canvas and pattern to window size
function windowResized() {
size = Math.min(windowWidth, windowHeight);
scaleFactor = size / 1024;
resizeCanvas(size, size);
originalImage();
}