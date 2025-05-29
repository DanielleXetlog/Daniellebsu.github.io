// Setup function runs once when program starts
function setup() {
    // Create 400x400 pixel canvas
    createCanvas(400, 400);
    // Set light gray background
    background(220);
    
    // Draw car body (pink section)
    fill(255,143,171); // Light pink color
    rect(55, 170, 290, 60, 0, 0, 50, 0);  // Main rectangular body with rounded bottom-right corner
    
    // Draw car roof (triangular section)
    triangle(145, 140, 335, 170, 55, 170);  // Windshield triangle connecting to body
    
    // Draw front bumper extension
    rect(10, 170, 45, 60, 0, 0, 0, 50);  // Rectangular extension with rounded bottom-left corner
    
    // Draw windows (white sections)
    fill(242, 244, 243); // Off-white color
    triangle(145, 145, 144, 166, 80, 166);  // Front windshield triangle
    rect(80, 170, 65, 60);  // Left side window rectangle
    rect(155, 170, 50, 60);  // Right side window rectangle
    triangle(155, 145, 155, 166, 205, 166);  // Rear window triangle
    
    // Draw wheels
    fill(0, 0, 0); // Black color
    ellipse(90, 236, 55, 55);  // Left wheel circle
    ellipse(310, 236, 55, 55);  // Right wheel circle
}