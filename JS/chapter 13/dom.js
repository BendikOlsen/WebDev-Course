//selectors

//by id
document.getElementById("highlight")
//by classname
document.getElementsByClassName("bolded");

document.getElementById("first");
document.getElementsByClassName("special")[0];
//by element withing the document - selects the first element if not specified otherwise
document.querySelector("p");
//by element - selects all the elements or the ones that are specified
document.querySelectorAll("p")[0];
//by id
document.querySelector("#first");
//by element and specified
document.getElementsByTagName("p")[0];
//by element and specified
document.querySelector("h1 + p");

var tag = document.getElementById("highlight");
var tag1 = document.getElementById("bolded");

tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

