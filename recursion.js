/**
 * function that returns true if number is even else it returns false
 * return undefined if number is negative
 * @param {Number} number 
 */
function isEven(number)
{
	if(number < 0)
		return;
	if(number === 0)
		return true;
	else if(number === 1)
		return false;
	else
		return isEven(number-2);
}
console.log(isEven(-1));