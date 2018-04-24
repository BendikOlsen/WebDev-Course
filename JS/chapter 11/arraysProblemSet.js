//1. problem
//Write a function printReverse() That takes an array as an argument
// and prints out the elements in the array in rever order(don't actually
// reverse the array itself)

//alternative 1 without function
var frukt = ["Ananas", "Bananer", "Druer", "Fersken"]

frukt.reverse()

console.log(frukt)
console.log("*********************");  

//alternative 2 with function
var arr = [1,2,3,4,5]
var size = arr.length

for(var i=size-1; i>=0; i--) {
    console.log(`Element ${i+1} is ${arr[i]}`)
}
console.log("*********************");  

//solution

function printReverse(arr){
    for(var i = arr.length - 1; i>=0; i--) {
        console.log(arr[i]);

    }
}
printReverse([3,6,2,5])
console.log("*********************");   

//2. problem
//write a function isUniform() which takes an array as an argument
//and returns true if all elements in the array are identical

var array1 = [1,1,1,2]
var array2 = ["a", "a", "a"]
var array3 = ["b","a","b","b"]

function isUniform(){
    for(var i= 0; i < array1.length - 1; i++) {
        if(array1[i] !== array1[i+1]) {
            return false
        }
    }
    return true;
}
console.log(isUniform(array1)) 
console.log("*********************");

//solution

function isUnitform2(arr){
    var first = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false
        }
    }
    return true
}

console.log(isUnitform2([1,1,2,1]))
console.log("*********************");

//3. problem
//Write a function sumArray() that accepts an array of number
//and return the sum of all number in the array

//use of the .reduce method
var arr  = [1,2,3].reduce(sumArray,0)
var arr1 = [10,3,10,4].reduce(sumArray,0)
var arr2 = [-5,100].reduce(sumArray,0)

//addition function.
function sumArray(a, b){
    return a + b;
} 

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log("*********************");

//solution

function sumArray1(arg){
    var total = 0;
    arg.forEach(function(element){
        total += element;
    })
    return total;
}

console.log(sumArray1([1,3,5,6,8,]))
console.log("*********************")

//4. problem
//Write a function max() that accepts an array of numbers and
//return the maximum number in the array

var arra  = [1,2,3].reduce(max1,0)
var arra1 = [10,3,10,4].reduce(max1,0)
var arra2 = [-5,100].reduce(max1,0)

//max function
function max1(a, b){
    return Math.max(a,b);
}
    
console.log(arra);
console.log(arra1);
console.log(arra2);
console.log("*********************")

//solution

function max(arr){
    var max = arr[0]
    for (var i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}


console.log(max([1,10,100,999]))
console.log("*********************")