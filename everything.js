/**
 * function that checks if all elements of the array pass the condition in the callback using for loop
 * @param {array} array 
 * @param {Function} predicate 
 */
function everyFor (array, predicate) {
	for(let element of array){
		if(!predicate(element))
			return false;
	}
	return true;
}

/**
 * function that checks if all elements of the array pass the condition in the callback using Array.prototype.some()
 * @param {Array} array 
 * @param {Function} predicate 
 */
function everySome (array, predicate) {
	if(array.some(element => !predicate(element)))
		return false;
	return true;
}

let array = [2,4,6];
/**
 * callback function that checks if a number is even
 * @param {Number} value 
 */
function predicate (value) {
	return value%2 === 0;
}
console.log(everyFor(array, predicate));
console.log(everySome(array, predicate));