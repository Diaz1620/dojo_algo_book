// Print 1-255
// Print all the integers from 1 to 255.

// function print1To255() {
//     for (let num = 1; num <= 255; num++) {
//         console.log(num)
//     }
// }
// print1To255()

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

// function sum0To255() {
//     let sum = 0
//     for(let num = 0; num <= 255; num++) {
//         sum += num
//     console.log("num is now " + num + " and now sum is " + sum);
//     }
//     console.log("final sum is: " + sum);
// }

// sum0To255()


// Find and Print Max
// Given an array, find and print its largest element.

// function printMax(arr) {
//     let max = arr[0]
//     for(let num = 1; num < arr.length; num++){
//         if(arr[num] > max){
//             max = arr[num]
//         }
//         else{
//             continue
//         }
//     }
//     console.log(max);
// }

// printMax([2,4,123,6,8])

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

// function arrayWithOdds(){
//     let newarr = []
//     for(let num = 0; num <= 255; num++){
//         if(num % 2 != 0){
//             newarr.push(num)
//         }
//     }
//     return newarr
// }

// console.log(arrayWithOdds());

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.

// function greaterThanY(arr, y){
//     let numValGreaterThanY = 0
//     for(let num = 0; num < arr.length; num++){
//         if(arr[num] > y){
//             numValGreaterThanY++
//         }
//     }
//     return numValGreaterThanY
// }

// console.log(greaterThanY([1,2,3,4,5,6,7,89, 100, 304], 6));

// Max, Min, Average
// Given an array, print the max, min and average values for that array.

// function maxMinAvg(arr){
//     let max = arr[0], min = arr[0], sum = arr[0], avg
//     for(let num = 1; num < arr.length; num++){
//         if(arr[num] > max){
//             max = arr[num]
//         }
//         else if(arr[num] < min){
//             min = arr[num]
//         }
//         sum += arr[num]
//     }
//     avg = sum/arr.length
//     console.log("Max is: ", max);
//     console.log("Min is: ", min);
//     console.log("Avg is: ", avg);
// }

// maxMinAvg([1,2,3,4,5,6,7,8,9])

// Swap String For Array Negative Values
// Replace any negative array values with ​'Dojo'​.

function swapNegatives(arr){
    for(let num = 0; num < arr.length; num++){
        if(arr[num] < 0){
            arr[num] = "Dojo"
        }
    }
    return arr
}

console.log(swapNegatives([-1,2,-3,4,-5,6]))
