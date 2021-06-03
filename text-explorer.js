// text-explorer climbing
// In this assignment, we'll create a text-based game that allows the user to move on a 2D plane and interact with their surroundings.

// Step 1: Movement dash
// The first step is to create a way for the user to move around a coordinate system that has an x and y axis.
const prompt = require('prompt-sync')();

let x = 0;
let y = 0;

let directMe = 0;
let winner = 0;

while (winner === 0) {
    console.log('Location: ', x, y);
    console.log('(1) - North');
    console.log('(2) - East');
    console.log('(3) - South');
    console.log('(4) - West');
    directMe = prompt('Which is the direction of your choosing?');
    directMe = Number(directMe);
    console.log(typeof(directMe));
    if (directMe === 1) {
        console.log('You have choosen North');
        y = y + 1
        console.log('Your new co-ordinates are', x, y);

    } else
    if (directMe === 2) {
        console.log('You have choosen East')
        x = x + 1;
        console.log('Your new co-ordinates are', x, y);

    } else
    if (directMe === 3) {
        console.log('You have choosen South');
        x = x - 1;
        console.log('Your new co-ordinates are', x, y);

    } else
    if (directMe === 4) {
        console.log('You have choosen West');
        y = y - 1;
        console.log('Your new co-ordinates are', x, y);

    } else {
        console.log('Sage you are trying to travel in a realm we are not yet adapt to! Please select again.');
    }
    if (x === 4) {
        if (y === 2) {
            winner = 1;
        } else { winner = 0; }
    }





    console.log('done')


}




// The result should look something like this:

// Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"?
// > left

// Your coordinates are (-1, 0). Would you like to go "up", "right", "down", or "left"?
// > up

// Your coordinates are (-1, 1). Would you like to go "up", "right", "down", or "left"?
// > right

// Your coordinates are (0, 1). Would you like to go "up", "right", "down", or "left"?
// > down

// Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"?
// To do this, you'll want to create variables to contain the user's x and y positions.

// Below these definitions, you'll need a while loop that loops endlessly. Each iteration, prompt the user for an action. If that action is "left", subtract one from the user's x position. Update the user's position appropriately for "right", "up", and "down" as well.

// After getting this working, make a commit in git!

// Step 2: Creating a map european_castle
// Now that we have a working coordinate system, it's time to add some descriptions to each location. Either in comments in your code or just with a pencil and paper, create a 4x4 grid of 16 locations starting from (-2, -2) to (2, 2). These could be rooms in house, different biomes, or anything you come up with!

// Once you have that created, it's time to code. Add code so that when a user navigates to specific locations, you log out a description of that location. To do this, you'll need a series of if statements nested in your while loop. Each iteration of the loop, you'll first check the user's coordinates, then log out the corresponding location.

// This might look something like the following:

// You find yourself in a forest. Trees tower around you.
// Your coordinates are (0, 0). 
// Would you like to go "up", "right", "down", or "left"?
// > left

// You emerge into a meadow with tall grass.
// Your coordinates are (-1, 0). 
// Would you like to go "up", "right", "down", or "left"?
// >
// Once again, make a commit in git after completing this step.

// Step 3: Purpose rocket
// Finally, make your game endable. Update your while condition so that when the user arrives at a particular location, the game is ended. Add messaging before and after the game to add some clarity as to what's happening for the user. An example can be seen below:

// Welcome to the world of Terminal. Your goal is to find the Golden Keyboard.

// You find yourself in a forest. Trees tower around you.
// Your coordinates are (0, 0). 
// Would you like to go "up", "right", "down", or "left"?
// > left

// You emerge into a meadow with tall grass.
// Your coordinates are (-1, 0). 
// In the meadow lies a Golden Keyboard. Game over, you win!
// And finally, make another commit in git