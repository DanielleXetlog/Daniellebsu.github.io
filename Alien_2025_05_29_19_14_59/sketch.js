// Setup function runs once at program start
function setup() {
  createCanvas(400, 400); // Create 400x400 pixel canvas
}

// Main drawing function that runs continuously
function draw() {
  background(220); // Set light gray background

  // Draw green alien body (bottom ellipse)
  fill(100, 255, 100); // Bright green color
  ellipse(200, 350, 300, 250); // Large oval for lower body
  
  // Draw alien head (top ellipse)
  ellipse(200, 170, 150, 150); // Smaller circle for head
  
  // Draw white eye bases
  fill(255); // White color
  ellipse(180, 160, 30, 50); // Left eye (vertical oval)
  ellipse(220, 160, 30, 50); // Right eye (vertical oval)
  
  // Draw black eye pupils
  fill(0); // Black color
  ellipse(180, 160, 10, 20); // Left pupil
  ellipse(220, 160, 10, 20); // Right pupil
  
  // Draw green antenna lines
  stroke(100, 255, 100); // Match body color
  strokeWeight(4); // Thicker lines
  line(160, 110, 140, 80); // Left antenna
  line(240, 110, 260, 80); // Right antenna
  
  // Draw antenna balls
  fill(100, 255, 100); // Bright green
  ellipse(140, 80, 15, 15); // Left antenna ball
  ellipse(260, 80, 15, 15); // Right antenna ball
  
  // Draw mouth (smile)
  noFill(); // Hollow shape
  stroke(0); // Black outline
  strokeWeight(3); // Medium thickness
  arc(200, 200, 40, 20, 0, PI); // Half-circle smile
}