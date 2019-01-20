class Group {
	constructor () {
		this.group = [];
	}

	add (value) {
		if(!this.has(value)) {
			this.group.push(value);
		}
	}

	delete (value) {
		for( let index = 0; index < this.group.length; index++) {
			if(this.group[index] === value) {
				this.group = this.group.slice(0,index).concat(this.group.slice(index+1));
				break;
			}
		}
	}

	has (value) {
		for( let val of this.group) {
			if(value === val) {
				return true;
			}
		}
		return false;
	}

	static from (iterableObject) {
		let group = new Group();
		for(let value of iterableObject) {
			group.add(value);
		}
		return group;
	}
}

let group = Group.from([10,20]);
console.log(group.has(10));
console.log(group.has(30));
console.log(group.delete(10));
console.log(group.has(10));
console.log(group.add(10));
console.log(group.has(10));