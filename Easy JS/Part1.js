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
