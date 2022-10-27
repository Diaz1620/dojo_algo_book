// Sigma
// Implement a function ​sigma(num)​ that, given a number, returns the sum of all positive integers from 1 up to number (inclusive). Ex.: ​sigma(3) = 6 (or 1+2+3); ​sigma(5)​ = 15 (or 1+2+3+4+5).

// function sigma(num){
//     let sum = 0
//     for(let i = 1; i <= num; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(sigma(5));

// Factorial
// Write a function ​factorial(num)​ that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, ​factorial(3)​ = 6 (or 1 * 2 * 3); factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).

// function factorial(num){
//     let product = 1
//     for(let i = 1; i <= num; i++){
//         product *= i
//     }
//     return product
// }

// console.log(factorial(5));

// Threes and Fives
// Create function ​ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 ​but not both​. Display the final sum in the console.

// function threesFives() {
//     let sum = 0
//     for(let i = 100; i <= 4000000; i++){
//         if(i % 3 == 0 && i % 5 != 0){
//             sum += i
//         }
//         else if(i % 5 == 0 && i % 3 != 0){
//             sum += i
//         }
//         else{
//             continue
//         }
//     }
//     return sum
// }

// console.log(threesFives());


// Second:​ Change your function to make a ​BetterThreesFives(start,end)​where ​start​ and ​end values are customizable. You can think of the above ​ThreesFives()​ function as BetterThreesFives(100,4000000)​.

// function betterThreesFives(x,y){
//     let sum = 0
//     for(let i = x; i <= y; i++){
//         if(i % 3 == 0 && i % 5 != 0){
//             sum += i
//         }
//         else if(i % 5 == 0 && i % 3 != 0){
//             sum += i
//         }
//         else{
//             continue
//         }
//     }
//     console.log(sum);
//     return sum
// }

// betterThreesFives(100, 4000000)


// Generate Coin Change
// Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.

// function generateCoinChange(cents){
//     let quarters = 0, dimes = 0, nickles = 0, pennies = 0;
//     if(cents % 25 == 0){
//         quarters = cents/25
//         cents -= quarters*25
//         console.log(quarters, "quarter/s");
//     }
//     else{
//         quarters = Math.floor(cents/25)
//         cents-=quarters*25
//         console.log(quarters, "quarter/s");
//     }
//     if(cents % 10 == 0){
//         dimes = cents / 10
//         cents -= dimes*10
//         console.log(dimes, "dime/s");
//     }
//     else{
//         dimes = Math.floor(cents/10)
//         cents -= dimes*10
//         console.log(dimes, "dime/s");
//     }
//     if(cents % 5 == 0){
//         nickles = cents/5
//         cents -= nickles*5
//         console.log(nickles, "nickles");
//     }
//     else{
//         nickles = Math.floor(cents/5)
//         cents -= nickles*5
//         console.log(nickles, "nickle/s");
//     }
//     console.log(cents, "penny/pennies");
    
// }

// generateCoinChange(237)


// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the ​number of rolls​, ​min,​ ​max,​ and ​average​.

// var numRolls = 0
// var min = 0, max = 0, avg = 0
// var numRollsTillDouble = []

// function rollDie(){
//     // console.log(Math.floor(Math.random() * 6) + 1);
//     return Math.floor(Math.random() * 6) + 1
// }

// function rollDice(){
//     numRolls ++
//     let diceResults = [rollDie(), rollDie()]
//     console.log("Current rolls: ", numRolls);
//     console.log(diceResults);
//     if(diceResults[0] == diceResults[1]){
//         console.log("Number of rolls till double: ", numRolls);
//         numRollsTillDouble.push(numRolls)
//         if(min == 0){
//             min = numRolls
//         }
//         if(numRolls > max){
//             max = numRolls
//         }
//         else if(numRolls < min){
//             min = numRolls
//         }
//         // numRolls = 0
//     }
//         console.log("Minimum number of rolls for double so far: ", min);
//         console.log("Maximum number of rolls for double so far: ", max);
//         console.log("Rolls are now: ", numRolls);
//         return numRolls
// }
// function diceStatistics(){
//     let numRolls = count, min = 0, max = 0, avg = 0;
//     if(rollDie()){
//         console.log(numRolls);
//     }
// }


// Sum To One Digit
// Implement a function ​sumToOne(num)​ that, given a number, sums that number’s digits repeatedly until the sum is only one digit. Return thatfinalonedigitresult.

// function sumToOne(num){
//     let stringNum = num.toString().split('');
//     let realNum = stringNum.map(Number)
//     let sum = 0
//     if(num > 9){
//         for(let i = 0; i < realNum.length; i++){
//             sum += realNum[i]
//         }
//         if(sum > 9){
//             return sumToOne(sum)
//         }
//         else{
//             console.log("The total sum is now "+sum+ " and it is less than nine");
//             return sum
//         }
//     }
//     else{
//         // console.log("Num is now", num);
//         return num
//     }
// }

// console.log(sumToOne(928));

// Internet answer that I don't think matches the description of how the function is supposed to work
// function sumToOne(n){
//     let sum = 0
//     while (n > 0 || sum > 9){
//         if (n == 0){
//             n = sum;
//             sum = 0;
//         }
//         sum = sum + n % 10;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }

// console.log(sumToOne(928));

// Fibonacci
// Implement the Fibonacci function, a famous mathematical equation that generates a numerical sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0 and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which Fibonacci number.
// Examples: ​fibonacci(2)​ = 1, ​fibonacci(3)​ = 2, ​fibonacci(4)​ = 3, ​fibonacci(5)​ = 5, etc.

// function fib(num){
//     if(num == 0 || num == 1){
//         return num
//     }
//     return fib(num - 1) + fib(num - 2)
// }

// console.log(fib(1));

// Implement a function that accepts two non-negative integers as arguments. Function ​lastDigitAtoB(a, b)​ should return the last digit of the first number (a) raised to an exponent of the second number (b).
// Examples: given ​(3, 4)​, you should return ​1​ (the last digit of 81: 3 * 3 * 3 * 3). Given ​(12, 5)​, return 2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).

function lastDigitAtoB(a,b){
    let exponet = a ** b;
    let numToString = exponet.toString().split('')
    let realNum = numToString.map(Number)
    return realNum[realNum.length - 1]
}
console.log(lastDigitAtoB(12,5));

