var h1 = document.querySelector("h1");

h1.style.color = "#4f4f4f";

var body = document.querySelector("body");

var isBlue = false;

setInterval(function(){
	if (isBlue) {
		body.style.background = "white";
	}
	else {
		body.style.background = "blue";
	}
	isBlue = !isBlue;
}, 1000);