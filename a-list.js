/**
 * function to create one list object
 * @param {Value} value 
 * @param {List} next 
 */
function create(value, next = null){
	let element = {
		"value" : value,
		"rest" : next
	}
	return element;
}

/**
 * function to convert an array to list
 * @param {Array} arr 
 */
function arrayToList(arr){
	let l = arr.length - 1;
	let next;
	for(let i = l; i >= 0; i--){
		if(i === l)
			next = create(arr[i]);
		else {
			next = create(arr[i], next);
		}
	}
	return next;
}

/**
 * function that convert list to array
 * @param {List} list 
 */
function listToArray(list){
	let arr = [];
	while(list){
		arr.push(list.value);
		list = list.rest;
	}
	return arr;
}

/**
 * function that prepends an element to the list
 * @param {List object} element 
 * @param {List} list 
 */
function prepend(element, list){
	element.rest = list;
	return element;
}

/**
 * function that returns the element at the zero based index provided
 * @param {List} list 
 * @param {Number} number 
 */
function nth(list, number){
	if(!list)
		return;
	if(number === 0){
		return list;
	}
	else{
		return nth(list.rest, number - 1);
	}
}

console.log(listToArray(arrayToList([1,2,3,4])));
console.log(prepend({value:9,rest:null}, arrayToList([1,2,3,4])));
console.log(nth(arrayToList([1,2,3,4]), 5));