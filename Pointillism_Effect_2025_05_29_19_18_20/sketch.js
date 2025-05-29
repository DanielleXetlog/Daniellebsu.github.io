// Declare global variables for image and position
var img, x, y;  // img stores the image, x/y are position coordinates

// Preload function to load assets before setup
function preload() {
  img = loadImage("landscape.jpeg");  // Load the landscape image file
}

// Initial setup function
function setup() {
  createCanvas(400, 400);  // Create square canvas
  background(0);  // Set black background
  noStroke();  // Remove shape outlines
}

// Main drawing loop that runs continuously
function draw() {
  // Generate random positions within canvas bounds
  x = random(width);
  y = random(height);
  
  // Get color from image at random position
  var c = img.get(x,y);  // Returns [R,G,B,A] array of pixel color values
  
  // Set fill color using sampled values with transparency
  fill(c[0], c[1], c[2], 50);  // RGB values from image with 50 opacity
  
  // Draw semi-transparent circle at random position
  ellipse(x, y, 30, 30);  // 30px diameter circle
}