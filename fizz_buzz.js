/**
 * Problem statement
 * version 1
 * Print all numbers from 1 to 100
 * print Fizz for numbers divisible by 3
 * print Buzz for numbers divisible by 5 and not by 3
 * version 2 = version 1 + ...
 * print FizzBuzz for numbers divisible by 5 and 3
 */
for(let index=1;index<=100;index++)
{
	if(index%3===0)
		console.log("Fizz");
	else if(index%5===0)
		console.log("Buzz");
	else
		console.log(index);
}