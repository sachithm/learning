var numSquare = 6;

var colors = generateRandomColors(numSquare);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");


easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		};
	};
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquare = 6;

	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	};
});

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	this.textContent = "New Colours"
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			messageDisplay.textContent = "Nice one!";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		};
	});
};

function changeColors(color) {
	for (var i = colors.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;	
	};
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
};

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
};