/**
 * function that performs the loop function with the help of test, body and update callbacks
 * @param {*} start 
 * @param {function} test 
 * @param {function} update 
 * @param {function} body 
 */
function loop (start, test, update, body) {
	for(let value = start; test(value); value = update(value)){
		body(value);
	}
}

/**
 * function that tests the condition
 * @param {*} value 
 */
function test (value) {
	return value < 10;
}

/**
 * function that forms the body of the loop
 * @param {*} value 
 */
function body (value) {
	console.log(value);
}

/**
 * function that updates the value for the loop
 * @param {*} value 
 */
function update (value) {
	return ++value;
}

loop(1, test, update, body);
