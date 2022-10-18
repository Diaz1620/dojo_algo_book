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

// function swapNegatives(arr){
//     for(let num = 0; num < arr.length; num++){
//         if(arr[num] < 0){
//             arr[num] = "Dojo"
//         }
//     }
//     return arr
// }

// console.log(swapNegatives([-1,2,-3,4,-5,6]))


// Print Odds 1-255
// Print all odd integers from 1 to 255.

// function printOdds(){
//     for(let num = 1; num <= 255; num+=2){
//         console.log(num);
//     }
// }

// printOdds()

// Iterate and Print Array
// Iterate through a given array, printing each value.

// function printArray(arr){
//     for(let num = 0; num < arr.length; num++){
//         console.log(arr[num]);
//     }
// }

// printArray([1,2,5,6,8,9])


// Get and Print Average
// Analyze an array’s values and print the average.

// function getAvg(arr){
//     let avg, sum=0;
//     for(let num = 0; num < arr.length; num++){
//         sum += arr[num]
//     }
//     avg = sum/arr.length
//     console.log(avg);
// }

// getAvg([1,2,3,4,5,6,7,8,9])

// Square the Values
// Square each value in a given array, returning that same array with changed values.

// function squareTheValues(arr){
//     for(let num = 0; num < arr.length; num++){
//         arr[num] = arr[num]**2
//     }
//     return arr
// }

// console.log(squareTheValues([1,2,3,4,5,6]));

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

// function zeroOutNegatives(arr){
//     for(let num = 0; num < arr.length; num++){
//         if(arr[num] < 0){
//             arr[num] = 0
//         }
//     }
//     return arr
// }

// console.log(zeroOutNegatives([1,-5,-9,10,5,6,9]));

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a ​'0'​ value at the end.

function shiftArray(arr){
    for(let num = 0; num < arr.length-1; num++){
        arr[num] = arr[num+1]
    }
    arr[arr.length-1] = 0
    return arr
}

console.log(shiftArray([1,2,3,4,5]));