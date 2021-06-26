
// no arguments
/*const paintingWall = function () {
    console.log("The wall has been painted red");
};

paintingWall();

//single arguments

const paintingWall = function (color) {
    console.log("The wall has been painted " + color);
};

paintingWall("green");
paintingWall("pink");
paintingWall();
*/

//The wall has been painted undefined

/*
const paintingWall = function (wall, color) {
    console.log("The " + wall + " wall has been painted " + color);
};

paintingWall("north", "green");
paintingWall("green", "north");
//the green wall has been painted north
*/

const paintingWall = function (color, wall) {
    console.log("The " + wall + " wall has been painted " + color);
};

paintingWall("north", "green");
//identifier "paintingWall" has already been declared

/*Let's add another argument. We now want to choose the wall that we want to paint.

the new function should output something like "The north wall has been painted orange" or "The south-east wall has been painted grey"
think of a good name for this new argument
change the function so it takes two arguments
change the function so it uses both arguments
call the function to see if it works
does the order of the arguments matter when calling the function?
what happens if you switch them in the function definition?
what happens if you change the order of the arguments in the function definition and when calling the function?*/


