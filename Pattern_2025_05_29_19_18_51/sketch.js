// Declare variables for position, size and shape type
var x;              // Horizontal position variable
var y;              // Vertical position variable
var size = 20;      // Default shape size
var shape = 0;      // Determines which shape to draw (0-1)

// Initial setup function
function setup() {
  createCanvas(400, 400);  // Create 400x400 pixel canvas
  frameRate(5);            // Set animation to 5 frames per second
  rectMode(CENTER);        // Draw rectangles from their center point
}

// Main drawing loop that runs continuously
function draw() {
  background(220);  // Light gray background
  
  // Nested loops to create grid pattern
  for(x = 25; x < 400; x = x +50){       // Horizontal grid spacing
    for(y = 25; y < 400; y = y +50) {    // Vertical grid spacing
      
      size = random(10,40);      // Random size between 10-40 pixels
      shape = random(0,1);       // Random number to determine shape
      
      // Draw either circle or square based on random value
      if(shape < 0.5) {
        ellipse(x,y, size, size);  // Draw circle
        fill(5, 178, 220);         // Set fill color to blue
      } else {
        rect(x,y, size, size);     // Draw square
      }
    }
  }
}