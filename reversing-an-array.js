/**
 * function that returns a new array with the array elements in the reverse order
 * @param {Array} arr 
 */
function reverseArray(arr){
	let reverse = [];
	for(let i = arr.length-1; i >=0; i--){
		reverse.push(arr[i]);
	}
	return reverse;
}

/**
 * function that reverses the elements of the array given to it
 * @param {Array} arr 
 */
function reverseArrayInPlace(arr){
	let l = arr.length;
	for(let i = 0; i < Math.floor(l / 2); i++){
		let temp = arr[i];
		arr[i] = arr[l - i - 1];
		arr[l - i -1] = temp;
	}
}

let array = [1,2,3];
console.log(reverseArray(array));
console.log(array);
console.log(reverseArrayInPlace(array));
console.log(array);
