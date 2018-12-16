/**
 * function to return minimum of two numbers
 * returns undefined if one of the parametes is not a number
 * 
 * @param {Number} one
 * @param {Number} two
 */
let min = function(one, two){
	let a = Number(one);
	let b = Number(two);
	if(a && b){
		if(a < b)
			return a;
		else
			return b;
	}
	return;
}

console.log(min("hi",10));