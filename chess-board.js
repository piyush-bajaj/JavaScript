/**Problem statement
 * Create a string that represents 8X8 grid using newline character
 * grid contains space( ) or hash(#)
 * 
 *  */
let pattern1 = " ";
let pattern2 = "#";
let grid = "";

for(let i=0;i<8;i++)
{
	for(let j=0;j<8;j++)
	{
		if(i%2===0)
		{
			if(j%2===0)
				grid+=pattern1;
			else
				grid+=pattern2;
		}
		else
		{
			if(j%2===0)
				grid+=pattern2;
			else
				grid+=pattern1;
		}
	}
	grid+="\n";
}
console.log(grid);