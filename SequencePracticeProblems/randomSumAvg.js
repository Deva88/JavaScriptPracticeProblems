/*Write a program that reads 5 Random 2 Digit values , then find their sum and the average
*/
var randomNum1 = Math.floor(Math.random() * 100);
console.log("First Random Number = " + randomNum1);
var randomNum2 = Math.floor(Math.random() * 100);
console.log("Second Random Number = " + randomNum2);
var randomNum3 = Math.floor(Math.random() * 100);
console.log("Third Random Number = " + randomNum3);
var randomNum4 = Math.floor(Math.random() * 100);
console.log("Fourth Random Number = " + randomNum4);
var randomNum5 = Math.floor(Math.random() * 100);
console.log("Fifth Random Number = " + randomNum5);

sum=(randomNum1+randomNum2+randomNum3+randomNum4+randomNum5);
console.log("Sum of 5 Random Number = " + sum);

avg=(sum/5);
console.log("Avrage of 5 Random Number = " + avg);