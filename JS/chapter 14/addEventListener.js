//example of adding addEventListener to an element 
// Element.addEventListener(type, functionToCall);

//  var button1 = document.querySelector("button1");
//  button.addEventListener("click", function(){
//      console.log ("SOMEONE CLICKED THE BUTTON");
//  });

//another example

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var h1 = document.querySelector("h1");
var lis = document.querySelectorAll("li");

//setup click listener
button.addEventListener("click", function (){
    paragraph.textContent = "Someone Clicked the Button!";
});
h1.addEventListener("click", function(){
    h1.style.background = "orange";
});
h1.addEventListener("click", function(){
    alert("h1 was clicked");
});

//forloop for listeners on <li>
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "pink";
    });
}
