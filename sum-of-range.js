/**
 * function that returns an array of numbers from start to end with increment steps between them
 * 
 * @param {Number} start 
 * @param {Number} end 
 * @param {Number} increment 
 */
function range(start, end, increment=1){
	let arr = [];
	if(increment>0){
		while(start<=end){
			arr.push(start);
			start  += increment;
		}
	}
	else{
		while(start>=end){
			arr.push(start);
			start += increment;
		}
	}
	return arr;
}

/**
 * function that returns the sum of elements of array
 * 
 * @param {Array} arr 
 */
function sum(arr){
	let sum = 0;
	for(let element of arr){
		sum += element;
	}
	return sum;
}

console.log(sum(range(10,1,-2)));