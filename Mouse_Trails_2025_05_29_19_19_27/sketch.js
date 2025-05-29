// Array to store all heart objects with their properties
let allHearts = [];

// Initial setup function
function setup() {
  createCanvas(400, 400);  // Create square canvas
  background(220);  // Light gray background
}

// Main animation loop
function draw() {
  background(220, 20);  // Semi-transparent background for trail effect
  
  // Create new heart at mouse position
  allHearts.push({
    x: mouseX,          // Horizontal position
    y: mouseY,          // Vertical position
    size: 15,           // Initial size
    color: getHeartColor(),  // Color based on position
    isExplosion: false, // Regular heart by default
    rotation: 0         // Initial rotation
  });
  
  // Limit number of hearts (currently inactive)
  if (allHearts.length > 100) {
  }
  
  // Process and display all hearts
  for (let i = 0; i < allHearts.length; i++) {
    let heart = allHearts[i];
    
    push();  // Save current drawing state
    
    // Position and rotate heart
    translate(heart.x, heart.y);
    rotate(heart.rotation);
    
    // Draw heart shape
    fill(heart.color);
    noStroke();
    drawHeartShape(heart.size);
    
    pop();  // Restore drawing state
    
    // Behavior for regular hearts
    if (!heart.isExplosion) {
      heart.size = map(i, 0, allHearts.length, 5, 15);  // Size based on position in array
      heart.rotation += 0.02;  // Gentle rotation
    }
    // Behavior for explosion hearts
    else {
      // Random movement for explosion effect
      heart.x += random(-3, 3);
      heart.y += random(-3, 3);
      heart.size *= 0.95;  // Shrink over time
      heart.rotation += 0.1;  // Faster rotation
      
      // Remove tiny hearts
      if (heart.size < 1) {
        allHearts.splice(i, 1);
        i--;  // Adjust index after removal
      }
    }
  }
}

// Mouse click handler for explosion effect
function mousePressed() {
  // Create multiple explosion hearts
  for (let i = 0; i < 30; i++) {
    allHearts.push({
      x: mouseX,
      y: mouseY,
      size: random(8, 15),  // Random size
      color: getHeartColor(),
      isExplosion: true,  // Mark as explosion
      rotation: 0
    });
  }
}

// Function to draw heart shape
function drawHeartShape(size) {
  beginShape();
  vertex(0, -size/4);  // Top center point
  // Left curve of heart
  bezierVertex(-size/2, -size/2, -size, size/4, 0, size);
  // Right curve of heart
  bezierVertex(size, size/4, size/2, -size/2, 0, -size/4);
  endShape(CLOSE);  // Complete the shape
}

// Function to determine heart color based on position
function getHeartColor() {
  if (mouseX > 200) {  // Right side of canvas
    if (mouseY < 200) {  // Top right quadrant
      return color(255, 0, 0);  // Red
    } else {  // Bottom right quadrant
      return color(0, 0, 255);  // Blue
    }
  } else {  // Left side of canvas
    if (mouseY > 200) {  // Bottom left quadrant
      return color(255);  // White
    } else {  // Top left quadrant
      return color(0);  // Black
    }
  }
}