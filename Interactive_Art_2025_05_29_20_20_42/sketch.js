// Array to store all sprinkle objects with their properties
let sprinkles = [];
// Color palette for sprinkle visual variety
let sprinkleColors = ['#B5DE5', '#F15BB5', '#FEE440', '#00BBF9', '#00F5D4'];

// Initialization function for canvas setup
function setup() {
  createCanvas(600, 600);  // Standard square canvas dimensions
  noStroke();  // Disable shape outlines for cleaner appearance
}

// Main rendering loop for continuous animation
function draw() {
  background(240);  // Light gray background for contrast
  
  // Render donut base (outer circle)
  fill('#F5A623');  // Warm orange-brown donut color
  circle(width/2, height/2, 300);  // Centered circular shape
  
  // Render donut hole (inner circle)
  fill(240);  // Matches background color for hole illusion
  circle(width/2, height/2, 140);  // Centered cutout
  
  // Iterate through all sprinkles for rendering
  for (let s of sprinkles) {
    fill(s.color);  // Apply individual sprinkle color
    circle(s.x, s.y, s.size);  // Render each sprinkle
  }
  
  // Display user instructions
  fill(0);  // Black text for maximum visibility
  textSize(20);  // Legible font size
  textAlign(CENTER);  // Centered text alignment
  text("Click on the donut to add sprinkles!\nPress space to clear", width/2, 50);
}

// Mouse interaction handler for sprinkle placement
function mousePressed() {
  // Calculate distance from click to donut center
  let distance = dist(mouseX, mouseY, width/2, height/2);
  // Verify click occurred within donut surface area
  if (distance > 70 && distance < 150) {
    // Create new sprinkle with randomized properties
    sprinkles.push({
      x: mouseX,  // Horizontal position
      y: mouseY,  // Vertical position
      size: random(10, 25),  // Varied size for realism
      color: random(sprinkleColors)  // Random color selection
    });
  }
}

// Keyboard input handler for reset functionality
function keyPressed() {
  // Check for spacebar input
  if (key === ' ') {
    sprinkles = [];  // Clear all sprinkles from array
  }
}