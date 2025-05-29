// Array containing the most popular video game genres for analysis
var typesOfGames = [
  "Shooter",          // First-person and third-person shooter games
  "Action-adventure", // Story-driven games with exploration elements
  "Simulation",       // Real-world simulation experiences
  "Sports",           // Athletic competition simulations
  "MOBA",             // Multiplayer online battle arena genre
  "Battle royale",    // Last-player-standing game format
  "Action platform"   // Platformer games with combat mechanics
];

// Market share percentages for each corresponding game genre
var gamePopularity = [62.4, 56.8, 39.3, 37.8, 36.8, 35.5, 30.7];
var moveNumber = 0;      // Animation progression counter
var colorChange = 0;     // Color rotation value for visual effects
var colorSpeed = 0.5;    // Rate of color transition (moderate pace)

// Initial configuration function
function setup() {
  createCanvas(900, 550);  // Establish display dimensions
  
  colorMode(HSB, 360, 100, 100);  // Use Hue-Saturation-Brightness color model
  
  textFont('Arial');  // Standard font selection for clarity
}

// Main animation loop running continuously
function draw() {
  background(245);  // Light gray background for visual comfort
  
  // Update animation parameters
  moveNumber = moveNumber + 0.02;  // Smooth progression for motion effects
  colorChange = (colorChange + colorSpeed) % 360;  // Cycle through color spectrum
  
  // Render all visual components
  drawTheNames();     // Display title and information
  drawTheGenres();    // Show genre statistics list
  drawTheRainbow();   // Create animated data visualization
}

// Function for rendering textual information
function drawTheNames() {
  fill(50);  // Dark gray for optimal readability
  noStroke();
  textSize(28);  // Prominent title size
  textAlign(LEFT);
  text("2025 Game Genre Popularity", 50, 50);  // Primary heading
  
  textSize(14);  // Smaller text for supporting information
  fill(100);     // Medium gray for secondary text
  text("Estimated percentage of gaming population", 50, 80);  // Data description
}

// Function for displaying genre statistics in organized format
function drawTheGenres() {
  // Create container for data display
  fill(255);  // White background
  stroke(230);  // Light border
  strokeWeight(1);  // Thin border line
  rect(50, 110, 250, 280, 10);  // Rounded rectangle
  
  // Panel title
  fill(70);  // Dark text
  textSize(18);
  text("Genre Breakdown", 70, 140);
  
  // Generate list items for each genre
  for (var i = 0; i < typesOfGames.length; i++) {
    // Calculate dynamic color based on position and time
    var theColor = (colorChange + map(i, 0, typesOfGames.length, 0, 180)) % 360;
    
    // Create colored bullet point
    fill(theColor, 100, 100);
    noStroke();
    ellipse(70, 170 + i * 35, 12);
    
    // Display genre name
    fill(70);
    textSize(14);
    text(typesOfGames[i], 90, 175 + i * 35);
    
    // Show popularity percentage
    fill(40);
    textSize(14);
    textAlign(RIGHT);
    text(gamePopularity[i] + "%", 280, 175 + i * 35);
    textAlign(LEFT);
  }
}

// Function for creating animated rainbow visualization
function drawTheRainbow() {
  push();  // Preserve current drawing state
  
  noFill();  // Outline-only rendering
  strokeWeight(18);  // Thick lines for visibility
  translate(width/2 + 100, height/2 + 80);  // Position visualization area
  
  // Generate concentric arcs for data representation
  for (var i = 0; i < typesOfGames.length; i++) {
    var theColor = (colorChange + map(i, 0, typesOfGames.length, 0, 180)) % 360;
    stroke(theColor, 80, 95);  // Apply consistent color properties
    
    // Calculate dynamic arc length based on popularity
    var howBig = map(sin(moveNumber + i * 0.5), -1, 1, 0.1, gamePopularity[i] / 100 * PI);
    var circleSize = 60 + i * 50;  // Incrementally larger circles
    
    arc(0, 0, circleSize, circleSize, PI - howBig, PI + howBig);  // Draw animated arc
  }
  
  pop();  // Restore previous drawing state
}