/**
 * function that returns the number of B's in the given text
 * it uses the function countChar()
 * 
 * @param {String} text 
 */
function countBs(text){
	return countChar(text,"B");
}

/**
 * function that returns the number if characters in the given text
 * 
 * @param {String} text 
 * @param {String} char 
 */
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