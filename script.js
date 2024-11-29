const buttons = document.querySelectorAll('.slide-button');

function getRandomPosition() {
    const buttonWidth = 120;  // Width of the button
    const buttonHeight = 50;  // Height of the button
    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;
    
    const newPositionX = Math.floor(Math.random() * maxWidth);
    const newPositionY = Math.floor(Math.random() * maxHeight);
    
    return { x: newPositionX, y: newPositionY };
}

function positionButtons() {
    buttons.forEach((button) => {
        // Generate new random positions for each button
        const position = getRandomPosition();
        button.style.left = `${position.x}px`;
        button.style.top = `${position.y}px`;
    });
}

// Position the buttons randomly every 1 second
setInterval(positionButtons, 1000);

// Handle clicks on the buttons
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        // Check if button 9 was clicked
        if (button.id === 'button9') {
            alert("You clicked the lucky button 9! Well done!");
        }
    });
});
