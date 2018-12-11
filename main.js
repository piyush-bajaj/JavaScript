/*
 * Problem statement
 * Print the pattern 
 *	#
 *	##
 *	###
 *	####
 *	#####
 *	######
 *	#######
 */
/**
 * Solution 1
 */
let output = "#######";
for(let index=1;index<=7;index++)
{
	console.log(output.substring(0,index));
}
/**
 * Solution 2
 */
for(let out="#";out.length<8;out+="#")
{
	console.log(out);
}