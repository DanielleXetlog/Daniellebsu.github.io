// Global variables for audio visualization
var noiseStart = 0; // Noise offset for animation
var music; // Audio file container
var soundAnalyzer; // Frequency analysis tool
var loudness; // Volume measurement tool

// Preload function for audio assets
function preload() {
  music = loadSound('lofi-music.mp3'); // Load background music file
}

// Initial setup function
function setup() {
  createCanvas(windowWidth, windowHeight); // Fullscreen canvas
  angleMode(DEGREES); // Use degree measurements for angles
  
  noiseDetail(2, 1); // Configure Perlin noise quality
  
  // Initialize audio analysis tools
  soundAnalyzer = new p5.FFT(); // Fast Fourier Transform analyzer
  loudness = new p5.Amplitude(); // Volume level detector
  music.connect(soundAnalyzer); // Connect music to analyzer
  music.loop(); // Set music to repeat
  
  music.setVolume(0); // Start muted for user control
}

// Mouse interaction handler
function mousePressed() {
  if (music.isPlaying()) {
    music.setVolume(1); // Unmute if already playing
  } else {
    music.play();  // Start playback if stopped
    music.setVolume(1); // Set to full volume
  }
}

// Main animation loop
function draw() {
  background(30); // Dark background for contrast
  noStroke(); // Disable shape outlines
  
  translate(width/2, height/2); // Center coordinate system
  
  // Audio analysis data collection
  var allSounds = soundAnalyzer.analyze(); // Full frequency spectrum
  var lowSounds = soundAnalyzer.getEnergy("bass"); // Bass frequencies
  var highSounds = soundAnalyzer.getEnergy("treble"); // Treble frequencies
  var howLoud = loudness.getLevel(); // Overall volume level
  
  var angleStep = 0.1; // Angle increment for visualization
  
  // Audio-reactive scaling factors
  var loudChange = map(howLoud, 0, 0.5, 0.8, 1.2); // Volume sensitivity
  var bassChange = map(lowSounds, 0, 255, 0.95, 1.05); // Bass sensitivity
  var trebleChange = map(highSounds, 0, 255, 0.98, 1.02); // Treble sensitivity
  
  // Generate circular visualization
  for(var angle = 0; angle < 360; angle += angleStep) {
    // Calculate noise coordinates with audio modulation
    var noiseX = map(cos(angle), -1, 1, 0, 3) * bassChange;
    var noiseY = map(sin(angle), -1, 1, 0, 3) * trebleChange;
    
    // Generate noise value with volume modulation
    var noiseValue = noise(noiseX, noiseY + noiseStart) * loudChange;
    
    // Convert noise to visual length
    var lineLength = map(noiseValue, 0, 1, -150, 150);
    
    // Dynamic color mapping
    var red = map(sin(angle), -1, 1, 100, 200);
    var green = map(lineLength, -150, 150, 0, 150);
    var blue = map(noiseValue, 0, 1, 150, 255);
    
    rotate(angleStep); // Rotate coordinate system
    
    // Draw visualization element
    fill(red, green, blue);
    rect(200, 0, lineLength, 1); // Audio-reactive rectangle
  }
  
  noiseStart += 0.005 * loudChange; // Animate noise over time
  
  // Display instructions
  fill(255);
  noStroke();
  textSize(14);
  textAlign(CENTER);
  resetMatrix();  // Reset coordinate system
  text("Click to hear music", width/2, 30); // User prompt
}