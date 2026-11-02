/* 
Exercise 1: Number Classification

Write a JavaScript program that prints numbers from 1 to 50 using a for loop.

Use if-else conditions to check:
1. If a number is divisible by both 3 and 5, print "FizzBuzz".
2. If a number is divisible by 3 only, print "Fizz".
3. If a number is divisible by 5 only, print "Buzz".
4. Otherwise, print the number itself.
*/

let numb = 50;

for(let i = 1; i<=numb; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
