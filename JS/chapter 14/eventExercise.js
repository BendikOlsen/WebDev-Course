//Get the total amount of event references from https://developer.mozilla.org/en-US/docs/Web/Events


//solution 1
var totalEvent = document.getElementsByTagName("code");
totalEvent.length

//solution 2

for (var i = 0; i < totalEvent.length; i++){
    console.log (totalEvent.length)
};