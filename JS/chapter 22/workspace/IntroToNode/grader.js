// Node Exercise 2
// Average Grade

//Create a new file, "grader.js"

//In the file define a new function named "average"
//It should take a single parameter: an array of test scores(all numbers)
//It should return the average score in the array, rounded to the nearest whole number


function average(arr) {
    let sum = 0
    
    //forLoop som plusser alle elementer på sum
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    let avgDone = Math.round(avg)
    return avgDone;
};


var scores = [90, 98, 89, 100, 100, 86, 94]
var test = average(scores); // should return 94
console.log(test);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
var test2 = average(scores2); //should return 68
console.log(test2);