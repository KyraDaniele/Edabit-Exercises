// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
	return a + b;
}

// ----------
// Convert Minutes into Seconds
//Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 60;
}

// ----------
// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}

// ----------
// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return (base * height) / 2;
}

// ----------
// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
	return "something" + " " + a;
}

// ----------
// Convert Hours into Seconds
// Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 3600;
}

// ----------
// Return the First Element in an Array
// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	return arr[0];
}

// Using the .shift() prototype works as well.

function getFirstValue(arr) {
	return arr.shift(0);
}

// ----------
// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}

// ----------
// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
	return length * 2 + width * 2;
	// alternatively
	// return (length + width) * 2
}

// ----------
// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(x, y) {
	return x % y;
}

// ---------
// Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// before
function squaed(b) {
	return a * a;
}

//after
function squared(a) {
	return a * a;
}

// ---------
// Using the "&&" Operator
// Make a function using the && operator.

function and(a, b) {
	if (a && b == true) {
		return true;
	} else {
		return false;
	}
}

// Alternatively:
function and(a, b) {
	return a && b;
}

// ---------
// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0) {
		return true;
	} else {
		return false;
	}
}

// Alternatively:
function lessThanOrEqualToZero(num) {
	return num <= 0;
}

// ---------
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
	return a + b < 100;
}

// ---------
// Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
/* wins get 3 points
-- draws get 1 point
-- losses get 0 points */

function footballPoints(wins, draws, losses) {
	return wins * 3 + draws * 1 + losses * 0;
}

// ---------
