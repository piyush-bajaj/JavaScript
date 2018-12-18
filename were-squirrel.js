/**
 * program that works a lot on functions
 * 
 * a person gets converted to squirrel,
 * he wants it to stop,
 * since it occurs as a result of certains actions.
 * he decides to create a diary with all the actions that he does,
 * and find out what leads him to be converted to squirrel
 * And so he uses coorelation to find any connection between his actions and conversion
 * and going through the solution he acheives his goal
 * 
 */

//import the file journal.js that contains the data for the journal
require("./journal");
//initialize the journal
let journal = [];

/**
 * function to add a single day entry in the journal array
 * 
 * @param {array} events 
 * @param {boolean} squirrel 
 * 
 * @example
 * addEntry(["brushed teeth","ate walnuts","work"], true);
 * 
 */
function addEntry(events, squirrel){
	journal.push({events, squirrel});
}

/**
 * function to create a table to store the count of occurence of each event
 * 
 * @param {string} event 
 * @param {array} journal 
 * 
 * @returns {array} table = [5,7,3,2] 
 * table[0] = probabilty of events 0 and 0
 * table[1] = probability of events 0 and 1
 * table[2] = probability of events 1 and 0
 * table[3] = probability of events 1 and 1
 * 
 * @example
 * tableFor("work", ["brushed teeth","ate walnuts","work"]);
 */
function tableFor(event, journal){
	let table = [0,0,0,0];
	for(let i = 0; i < journal.length; i++)
	{
		let enrty = journal[i], index = 0;
		if(enrty.events.includes(event))
			index+=2;
		if(enrty.squirrel)
			index+=1;
		table[index]++;
	}
	return table;
}

/**
 * function to calculate the phi, ie, coorelation
 * 
 * @param {array} table 
 * 
 * @returns coorelation value (integer) between -1 and 1
 */
function phi(table){
	return (
		(table[3] * table[0]) - (table[2] * table[1])) /
		Math.sqrt(
			(table[2] + table[3]) *
			(table[0] + table[1]) *
			(table[0] + table[2]) *
			(table[1] + table[3])
		);
}

/**
 * function that returns a list of all unique events in the journal
 * @param {array} journal 
 * 
 * @returns {array} events
 */
function journalEvents(journal){
	let events = [];
	for(let entry of journal){
		for(let event of entry.events){
			if(!events.includes(event))
				events.push(event);
		}
	}
	return events;
}

/**
 * loop to copy all journal data in from file to local variable
 */
for(let entry of JOURNAL){
	addEntry(entry.events, entry.squirrel);
}

/**
 * printing all the unique events in the journal
 */
//console.log(journalEvents(journal));

/**
 * print coorelation value for each event
 */
// for(event of journalEvents(journal)){
// 	console.log(event + " : " + phi(tableFor(event, journal)));
// }

/**
 * print the coorelation values for events less than -0.1 and greater than 0.1
 */
// for(event of journalEvents(journal)){
// 	let corelation = phi(tableFor(event, journal));
// 	if(corelation < -0.1 || corelation > 0.1)
// 		console.log(event + " : " + corelation);
// }

/**
 * add a new events to the journal for every entry
 * which is the combination of two events
 * and then calculate the coorelation
 */
for(let entry of journal){
	if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth"))
		entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth",journal)));