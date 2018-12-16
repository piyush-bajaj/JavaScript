function countBs(text){
	let count = 0;
	for(let i=0;i<text.length;i++){
		if(text[i] === "B")
			count++;
	}
	return count;
}

console.log(countBs("hjfsdaBdsfBsdf dsafBsadfB"));