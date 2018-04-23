// problem 1

//my solution;

function oddOrEven(num) {
    if (num % 2 === 0) 
        return ("even"); 
    else 
        return ("false");    
}

console.log("The number is " + oddOrEven(4))
console.log("The number is " + oddOrEven(21))
console.log("The number is " + oddOrEven(68))
console.log("The number is " + oddOrEven(333))

console.log("-------------------------------------")
console.log("")

//solution

function isEven(num){
    return num % 2 ===0;
}

console.log (isEven(4));

// problem 2

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num === 0)
        return 1;
    else
        return ( num * factorial(num - 1));    
}

console.log("The factorial of 5" + factorial(5))
console.log("The factorial of 2" + factorial(2))
console.log("The factorial of 10" + factorial(10))
console.log("The factorial of 0" + factorial(0))

console.log("-------------------------------------")
console.log("")

//solution

function factorialx(num){
    var result = 1;
    for(var i = 2; i <= num; i++ ){
        result *=1;
    }
    return result;
}

console.log(factorialx(100))

// problem 3

// function kebabToSnake();

function kebabToSnake(str){
  var newStr = str.replace(/-/g, "_");
    return newStr;
}

console.log(kebabToSnake("My-string-went-from-bee---ing- a --camel_to-becoming----a----snake"));

console.log("-------------------------------------")
console.log("")