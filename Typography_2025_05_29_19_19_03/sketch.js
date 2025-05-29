// Declare variables for font and text points
let font, points;
// Define the word to be displayed
let word = "etlog";

// Preload function to load assets before setup
function preload() {
  // Load the custom font file
  font = loadFont('Roboto-thin.ttf');
}

// Setup function runs once at program start
function setup() {
  createCanvas(1000, 1000);  // Create canvas with specified dimensions
  noStroke();  // Disable shape outlines
  
  // Set text size for point conversion
  textSize(200);
  // Convert text to vector points
  points = font.textToPoints(
    word,                   // Text to convert
    width/2 - textWidth(word)/2,  // Center horizontally
    height/2,               // Center vertically
    200,                    // Font size for conversion
    {sampleFactor: 0.2}     // Point density setting
  );
}

// Main animation loop runs continuously
function draw() {
  background(33);  // Dark background
  fill(255, 255, 150);  // Light yellow fill for points
  
  // Process each point in the text
  points.forEach((pt, i) => {
    // Calculate wave motion using sine function
    const wave = sin(frameCount * 0.05 + i * 0.1) * 8;
    // Draw each point with wave effect
    ellipse(pt.x, pt.y + wave, 10, 10);
  });
}