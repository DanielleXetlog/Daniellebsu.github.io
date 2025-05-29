// Declare variables for car position
let carX = -145;  // Initial x-position (starting off-screen left)
let carY = 120;   // Fixed y-position

// Setup function runs once at program start
function setup() {
  createCanvas(400, 400);  // Create 400x400 pixel canvas
}

// Main animation loop that runs continuously
function draw() {
  background(220);  // Light gray background
  
  // Move car horizontally
  carX += 2;  // Increment x-position by 2 pixels per frame
  
  // Reset car position when it goes off-screen right
  if (carX > width) {
    carX = -400;  // Move back to off-screen left
  }

  // Draw car at current position
  drawCar(carX, carY);
}

// Function to draw the car at specified coordinates
function drawCar(x, y) {
  push();  // Save current drawing state
  translate(x, y);  // Move origin to car position

  // Draw car body (pink sections)
  fill(255, 143, 171);  // Light pink color
  rect(107, 60, 290, 60, 0, 0, 50, 0);  // Main body with rounded bottom-right
  triangle(200, 30, 389, 60, 109, 60);   // Windshield triangle
  rect(60, 60, 47, 60, 0, 0, 0, 50);     // Front section with rounded bottom-left

  // Draw car windows (white sections)
  fill(242, 244, 243);  // Off-white color
  triangle(200, 35, 199, 56, 130, 56);  // Front windshield
  rect(130, 60, 69, 60);                // Side window
  rect(210, 60, 49, 60);                // Rear window
  triangle(210, 35, 210, 56, 260, 56);  // Rear windshield

  // Draw wheels
  fill(0);  // Black color
  ellipse(140, 126, 60, 60);  // Front wheel
  ellipse(345, 126, 60, 60);  // Rear wheel

  pop();  // Restore original drawing state
}