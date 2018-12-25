/**
 * function that coverts 2D array to 1D array
 * 
 * @param {array} array 
 */
function flatten(array) {
	return array.reduce((temp, element) => temp.concat(element));
}
let array = [[4,5,6],[1,2,3],[7,8,9]];

console.log(array);
console.log(flatten(array));