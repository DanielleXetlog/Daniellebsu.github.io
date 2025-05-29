// Variable to store the loaded image
let img;

// Preload function runs before setup to load external assets
function preload() {
  img = loadImage('landscape.jpeg');  // Load the landscape image file
}

// Setup function runs once when program starts
function setup() {
  createCanvas(600, 400);  // Create canvas matching image dimensions
  image(img, 0, 0, width, height);  // Display the full image
  img.loadPixels();  // Load pixel data for color sampling
}

// Main drawing loop that runs continuously
function draw() {
  // Redraw the image each frame to clear previous elements
  image(img, 0, 0, width, height);
  
  // Check if mouse is within canvas bounds
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    // Get color information at mouse position
    let c = getColorAt(mouseX, mouseY);
    
    // Create color information display box
    fill(255);  // White background
    stroke(0);  // Black border
    rect(mouseX + 15, mouseY - 20, 100, 40);  // Positioned near cursor
    
    // Display RGB values as text
    fill(0);  // Black text
    noStroke();
    textSize(12);
    text(`R: ${c.r} G: ${c.g}`, mouseX + 20, mouseY);  // Red/Green values
    text(`B: ${c.b} A: ${c.a}`, mouseX + 20, mouseY + 15);  // Blue/Alpha values
    
    // Display color swatch preview
    fill(c.r, c.g, c.b, c.a);  // Use sampled color
    stroke(0);
    rect(mouseX + 10, mouseY - 10, 20, 20);  // Small color square
  }
}

// Helper function to get color at specific coordinates
function getColorAt(x, y) {
  // Map canvas coordinates to image coordinates
  let imgX = floor(map(x, 0, width, 0, img.width));
  let imgY = floor(map(y, 0, height, 0, img.height));
  
  // Calculate pixel array index (4 values per pixel: R,G,B,A)
  let i = (imgX + imgY * img.width) * 4;
  
  // Return color as object with RGBA properties
  return {
    r: img.pixels[i],      // Red channel (0-255)
    g: img.pixels[i + 1],  // Green channel (0-255)
    b: img.pixels[i + 2],  // Blue channel (0-255)
    a: img.pixels[i + 3]   // Alpha/transparency (0-255)
  };
}