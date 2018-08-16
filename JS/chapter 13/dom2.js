//selector and manipulation of text in DOM

//selector
var tag = document.querySelector("p");
tag.textContent
//two different ways of manipulating text in DOM
tag.textContent = "blah blah blah";
tag.innerHTML = "blob blob blob"

//logo exercise chapter 13


//selector by ID
var logo = document.querySelector("#hplogo")

logo.setAttribute("src", "http://blablablabla.jpg")

//styling
logo.style.width = "500px";
logo.style.height = "100px";
logo.style.border = "2px solid purple";

//looping through DOM
var links = document.getElementsByTagName("a")

//to get the text of "a"
for(var i=0; i < links.length; i++) {
    console.loglinks[i].textContent
}

//styling of "a" to have pink background
for(var i=0; i < links.length; i++) {
    links[i].style.background = "pink";
}

//styling for border and color
for(var i=0; i < links.length; i++) {
    links[i].style.border = "1px dashed purple";
    link[i].style.color = "orange";
}


//priting out destination of "a" link 
for (var i=0; i < links.length; i++) {
    console.log(links[i].getAttribute("href"));
}

//change hyperlinks of a to http://bing.com
for(var i=0; i < links.length; i++) {
    links[i].setAttribute("href", "http://www.bing.com")
}




