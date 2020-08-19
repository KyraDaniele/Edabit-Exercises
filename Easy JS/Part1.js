// Less than 100? Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100.

function arrayLessThan100(arr) {
	let newArr = arr.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);
	return newArr < 100;
}

// ----------
