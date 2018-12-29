/**
 * import scripts file for containing script objects
 */
let SCRIPTS = require("./scripts");

/**
 * function that returns the name of the script the given
 * character is in or else returns null
 * @param {string character} character 
 */
function characterScript (character) {
	for(let script of SCRIPTS) {
		if(script.ranges.some(([from, to]) => {return character >= from && character < to; }))
			return script;
	}
	return null;
}

/**
 * function that gives the count of based on certain group name in the given array
 * @param {scripts array} items 
 * @param {string} groupName 
 */
function countBy (items, groupName) {
	let counts = [];
	for(let item of items) {
		let direction = groupName(item);
		let known = counts.findIndex(element => element.direction === direction);
		if(known !== -1) {
			counts[known].count++;
		}
		else {
			counts.push({
				direction: direction,
				count: 1
			});
		}
	}
	return counts;
}

// console.log(countBy(SCRIPTS, script => script.direction));
let roseDragon = "🌹🐉";
let horseShoe = "🐴👟";
let textScript = '英国的狗说"woof"';
let arr = [];
// finding scripts for the given string
for(let i = 0; i < textScript.length; i++){
	arr.push(characterScript(textScript.codePointAt(i)));
}

//using countBy to print the direction and their counts
console.log(countBy(arr, script => {
	if(script)
		return script.direction;
	else
		return "none";
	})
);