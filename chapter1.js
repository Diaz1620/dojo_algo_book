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

function generateCoinChange(cents){
    let quarters = 0, dimes = 0, nickles = 0, pennies = 0;
    if(cents % 25 == 0){
        quarters = cents/25
        cents -= quarters*25
        console.log(quarters, "quarter/s");
    }
    else{
        quarters = Math.floor(cents/25)
        cents-=quarters*25
        console.log(quarters, "quarter/s");
    }
    if(cents % 10 == 0){
        dimes = cents / 10
        cents -= dimes*10
        console.log(dimes, "dime/s");
    }
    else{
        dimes = Math.floor(cents/10)
        cents -= dimes*10
        console.log(dimes, "dime/s");
    }
    if(cents % 5 == 0){
        nickles = cents/5
        cents -= nickles*5
        console.log(nickles, "nickles");
    }
    else{
        nickles = Math.floor(cents/5)
        cents -= nickles*5
        console.log(nickles, "nickle/s");
    }
    console.log(cents, "penny/pennies");
    
}

generateCoinChange(237)





