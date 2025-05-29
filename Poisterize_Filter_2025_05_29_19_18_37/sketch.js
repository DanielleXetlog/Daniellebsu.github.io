// Variable to store the image
let img;

// Preload function to load image before setup runs
function preload() {
  img = loadImage('landscape.jpeg');  // Load the image file
}

// Setup function runs once when program starts
function setup() {
  createCanvas(600, 400);  // Create canvas matching image dimensions
  
  // Begin image pixel manipulation
  img.loadPixels();
  
  // Process all pixels in the image (4 values per pixel: R,G,B,A)
  for (let i = 0; i < img.pixels.length; i += 4) {
    let levels = 4;        // Number of color levels for posterization
    let step = 255 / (levels - 1);  // Calculate step size between levels
    
    // Posterize each color channel (Red, Green, Blue)
    img.pixels[i] = round(img.pixels[i]/step) * step;     // Red channel
    img.pixels[i+1] = round(img.pixels[i+1]/step) * step; // Green channel
    img.pixels[i+2] = round(img.pixels[i+2]/step) * step; // Blue channel
    // Note: Alpha channel (i+3) is left unchanged
  }
  
  // Apply the pixel changes to the image
  img.updatePixels();
  
  // Display the modified image on canvas
  image(img, 0, 0, width, height);
}