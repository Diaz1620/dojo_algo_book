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

function factorial(num){
    let product = 1
    for(let i = 1; i <= num; i++){
        product *= i
    }
    return product
}

console.log(factorial(5));

