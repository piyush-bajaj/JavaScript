const roads = [
	"Alice's House-Bob's House", "Alice's House-Cabin",
	"Alice's House-Post Office", "Bob's House-Town Hall",
	"Daria's House-Ernie's House", "Daria's House-Town Hall",
	"Ernie's House-Grete's House", "Grete's House-Farm",
	"Grete's House-Shop", "Marketplace-Farm",
	"Marketplace-Post Office", "Marketplace-Shop",
	"Marketplace-Town Hall", "Shop-Town Hall"
];

/**
 * list of cities from the roads data
 */
let cities = [];
for(let [from, to] of roads.map(r => r.split("-"))) {
	if(!cities.some(c => c === from))
		cities.push(from);
	if(!cities.some(c => c === to))
		cities.push(to);
}
// console.log(cities);

/**
 * function that builds the graph from the roads data
 * @param {array} roads 
 */
function buildGraph(roads) {
	let graph = Object.create(null);
	/**
	 * function that adds an edge to the graph
	 * @param {string} from 
	 * @param {string} to 
	 */
	function addEdge (from, to) {
		if(graph[from] === undefined) {
			graph[from] = [to];
		}
		else {
			graph[from].push(to);
		}
	}
	for(let [from, to] of roads.map(r => r.split("-"))){
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}
// console.log(buildGraph(roads));


/**
 * function that randomly picks an element from the array
 * @param {array} array 
 */
function randomPick (array) {
	let choice = Math.floor(array.length * Math.random());
	return array[choice];
}

/**
 * data type to store the current state of the robot
 */
class State {
	/**
	 * constructor
	 * @param {string} place 
	 * @param {array} parcels 
	 */
	constructor (place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	/**
	 * function to generate random data for the robot, with the number of parcels and starting position
	 * @param {Object} roadGraph 
	 * @param {Number} parcelCount 
	 * @param {String} start 
	 */
	static randomDataGenerator (roadGraph, parcelCount = 5, start = "Post Office") {
		let parcels = [];
		for( let i = 0; i < parcelCount; i++) {
			let from = randomPick(Object.keys(roadGraph));
			let to;
			do {
				to = randomPick(Object.keys(roadGraph));
			} while (to === from);
			parcels.push({from: from, to: to, at: from});
		}
		return new State(start, parcels);
	}
	/**
	 * function that tells the robot to move to a destination from current state
	 * returns the new state
	 * @param {String} destination 
	 */
	move(destination) {
		if(!roadGraph[this.place].includes(destination)) return this;
		let parcelsLeft = this.parcels.map(p => {
			if(p.at === this.place)
				return {from: p.from, to: p.to, at: destination};
			else
				return p;
		}).filter(p => {
			if(p.to !== p.at)
				return true;
			else {
				console.log(`Parcel from ${p.from} to ${p.to} delivered`);
			}
		});
		return new State(destination, parcelsLeft);
	}
}
// console.log(State.randomDataGenerator(buildGraph(roads)));


/**
 * function to find the shortest route from source to destination on the graph
 * by exploring all the paths simultaneously
 * @param {Object} roadGraph 
 * @param {String} source 
 * @param {String} destination 
 */
function findRoute(roadGraph, source, destination) {
	let work = [{at: source, route: []}];
	for(let i = 0; i < work.length; i++) {
		let {at, route} = work[i];
		for(let city of roadGraph[at]) {
			if(city === destination) {
				return route.concat(city);
			}
			if(!work.some( w => w.at === city)){
				work.push({at: city, route: route.concat(city)});
			}
		}
	}
}

// console.log(initialState.move("Marketplace"));

/**
 * function to get the direction to move the robot,
 * the approach to get the location is based on the random flag value
 * @param {State} state 
 * @param {boolean} random 
 */
function getDirection(state, route, random = true) {
	if(random)
		return {direction: randomPick(roadGraph[state.place])};
	if(route.length === 0) {
		let parcel = state.parcels[0];
		if(parcel.from !== state.place) {
			route = findRoute(roadGraph, state.place, parcel.from);
		}
		else {
			route = findRoute(roadGraph, state.place, parcel.to);
		}
	}
	return {direction: route[0], route: route.slice(1)};
}
// console.log(getDirection(initialState));

/**
 * function that starts the functioning of the robot,
 * requires the function to decide the direction and the initial state
 * @param {State} state 
 * @param {Function} robot 
 */
function runRobot(state, robot, route = []) {
	for(let turn = 0; ; turn++) {
		if(state.parcels.length === 0)
			return `Delivered all the parcels in ${turn} turns`;
		let action = robot(state, route, false);
		console.log(`Moved to ${action.direction}`);
		route = action.route;
		state = state.move(action.direction);
	}
}

let roadGraph = buildGraph(roads);
let initialState = State.randomDataGenerator(roadGraph, 10);
console.log(runRobot(initialState, getDirection));
