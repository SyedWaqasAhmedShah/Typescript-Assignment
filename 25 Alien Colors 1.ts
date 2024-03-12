
// Create a variable called alien_color
let Alien_color :string = 'green';

//• Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.

if(Alien_color === 'green'){
console.log("Player just earned 5 points !");
}

//Write one version of this program that passes the if test and another that fails.
Alien_color = 'yellow';

//(The version that fails will have no output.)
if(Alien_color === 'green'){
    console.log("Player just earned 5 points !");
}