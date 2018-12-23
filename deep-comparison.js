/**
 * function that returns true if values are same or are objects with
 * same properties, where the values of the propertiesare equal
 * @param {*} value1 
 * @param {*} value2 
 */
function deepEqual(value1, value2){
	console.log(value1,value2);
	if(typeof value1 === "object" && typeof value2 === "object"){
		if(!value1 || !value2)
			return false;
		else{
			let o1 = Object.keys(value1);
			let o2 = Object.keys(value2);
			if(o1.length === o2.length){
				for(let property of o1){
					if(o2.includes(property)){
						if(deepEqual(value1[property],value2[property])){
							continue;
						}
						else
							return false;
					}
					else
						return false;
				}
			}
			else
				return false;
		}
	}
	else{
		return value1 === value2;
	}
	return true;
}

let c = {
	k: 5,
	y:"dsf"
}
let d = {
	hi: 1,
	y: "dsf"
}
let a = {
	hello: 54,
	xyx: 24,
	f: "fdsg",
	y: true,
	o:c
}
let b = {
	hello: 54,
	xyx: 24,
	y: true,
	f: "fdsg",
	o: d
}
console.log(deepEqual(a,b));