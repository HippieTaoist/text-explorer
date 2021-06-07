// text-explorer climbing
// In this assignment, we'll create a text-based game that allows the user to move on a 2D plane and interact with their surroundings.

// Step 1: Movement dash
// The first step is to create a way for the user to move around a coordinate system that has an x and y axis.
const prompt = require('prompt-sync')({ sigint: true });

let x = 0;
let y = 0;

let directMe = 0;
let winner = 0;

console.log('Welcome to your Mental Balancer.');
console.log('');
console.log('Here you will search out a piece of you, lost behind your own mental fortitude.');
console.log('');
console.log('Travel through the Forest, Mountains, Deserts and Ocean of your mind.');
console.log('');
console.log('Find where your ego has strayed to now and disurbed your balance.');
console.log('');
console.log('Return your ego to regain your balance and peace.');
console.log('');
console.log('Tread carefully as ever recess of our mind is both intriguing and dangerous if not respected');
console.log('');
console.log('Lastly, a hint: The Coordinates resonate with the .... Answer to The Ultimate Question of Life, the Universe, and Everything. ');
console.log('');
console.log("Take a little Deep Thought here, Hitchhiker, and your trip will be shorter. Don't forget your towel");

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

    if (Math.sign(x) === (1)) {
        //Mountains of the games
        if (Math.sign(y) === (1)) {
            console.log('Currently you find yourself in the Mountainous Peaks of your thoughts.')
            console.log('Tread carefully as lofty thoughts can lead to dreadful falls.')
        }
        if (Math.sign(y) === (-1)) {
            console.log('Currently you find yourself in the Desert Dunes of the days you have thought too much');
            console.log('Expend your mental energy wisely here as it will evaporate to the ether quicker than water in Desert Valley.')
        }
    }

    if (Math.sign(x) === (-1)) {
        //Mountains of the games
        if (Math.sign(y) === (1)) {
            console.log('Currently you find yourself in the Forest of your Mind.')
            console.log('These heavliy nurished thoughts make traveling through this realm difficult as everything is preening for your attention.')
        }
        if (Math.sign(y) === (-1)) {
            console.log('You have found yourself difting about on a dingy with only oars to guide you.');
            console.log('The depth of these thoughts scare you and you venture slowly in you boat, fearful to fall into the depths of your subconscious')
        }
    }
    if (Math.sign(x) === (0)) {
        //Mountains of the games
        if (Math.sign(y) === (1)) {
            console.log('Currently you find yourself walking the cerebral line between the hieights of the mountains north.');
            console.log('Or the desert valley below');
            console.log('This is a percarious time for you as you will have to either choose to gaurd against lofty ambitions in the north or nuturing every thought you have in the desert of your mind potentially losing focus on your goal.')
        }
        if (Math.sign(y) === (-1)) {
            console.log('Here you find yourself walking the rift between the dense forest to the north and the endless deepths of the oceans to the south.');
            console.log('Remember all thoughts have potential to harm in thier depth or on thier over nurturing');
            console.log('Stay Alert to the task...')
        }
    }
    if (Math.sign(y) === (0)) {
        //Mountains of the games
        if (Math.sign(x) === (1)) {
            console.log('Currently you find yourself walking the cerebral line between your mental forests, over nurtured and rabbit holes abound, and that of the mountains, where lofty thoughts can lead to disatrous falls.');
        }
        if (Math.sign(x) === (-1)) {
            console.log('Walking in the mental etheric mist that expanded between that of the desert and ocean. Thoughts so deep thier depth can not be thought. Or deserted thoughts that still linger in ther recess of our mind with the call of "What If"');
            console.log('Stay Alert to the task... All thoughts are traps to distract us.... Gather your ego and return to the VOID.')
        }
    }
    if (x === 4) {
        if (y === 2) {
            winner = 1;
            console.log('Nestled in the cave located deep in the middle of your Mountainous ideals you find your ego. Striving to reach new heights has sent him deep into a rececd part of the strength that was your growth in your youth.');
            console.log('You reach down and offer a tired and ambivilante ego, a gentle hand.');
            console.log('You slowly exit the cave and descend from the hieghts that had stolen your breath so many years before with the ego that drew you out of yourself. As it always does.');
            console.log('Arriving finally at your base, your center. Sit and teach your ego the joys and treasures by receding back into the Void... The birthplace of all. ');
            console.log('By decending we have reached hieghts we could only dream of.');
            console.log('')

        } else {
            winner = 0;
        }
    }
}





console.log('done')







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