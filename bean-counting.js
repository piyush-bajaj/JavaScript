function countBs(text){
	let count = 0;
	for(let i = 0;i < text.length;i++){
		if(text[i] === "B")
			count++;
	}
	return count;
}

function countChar(text, char){
	let count = 0;
	for(let i = 0;i < text.length;i++){
		if(text[i] === char)
			count++;
	}
	return count;
}
console.log(countBs("hjfsdaBdsfBsdf dsafBsadfB"));
console.log(countChar("dsfdRvdsfBSDFSDFsdfSDFASsdf","d"));