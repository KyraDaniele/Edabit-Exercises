// Less than 100? Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100.

function arrayLessThan100(arr) {
	let newArr = arr.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);
	return newArr < 100;
}

// ----------
// Matchstick Houses
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(step) {
	if (step === 0) {
		return 0;
	} else if (step >= 2) {
		return 5 * step + 1;
	} else {
		return 6;
	}
}

// ----------
// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

function addUp(num) {
	let i = 1;
	if (num <= i) {
		return num;
	} else {
		return (num * (num + 1)) / 2;
	}
}

// ----------
