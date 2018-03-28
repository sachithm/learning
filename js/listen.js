var button = document.querySelector("input");

var clicked = false;


button.addEventListener("click", changeBack);

function changeBack() {
	if (clicked) {
		document.body.style.backgroundColor = "white";
	}
	else {
		document.body.style.backgroundColor = "red";
	}
	clicked = !clicked;
}

var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var h1 = document.querySelector("h1");

var p1Score = 0;
var p2Score = 0;

var p1Disp = document.querySelector("#p1Disp")
var p2Disp = document.querySelector("#p2Disp")

var gameOver = false;
var winningScore = 5;

var numInput = document.querySelector("#playScore");
var p = document.querySelector("#playTo");


playerOne.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			p1Disp.style.color = "green";
		}
		p1Disp.textContent = p1Score;

	}
});

playerTwo.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
			p2Disp.style.color = "green";
		}
		p2Disp.textContent = p2Score;

	}
});

resetButton.addEventListener("click", reset)

numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	p.textContent = winningScore;
	reset();
})

function reset() {
	p1Score = 0;
	p2Score = 0;
	p2Disp.textContent = 0;
	p1Disp.textContent = 0;
	gameOver = false;
	p1Disp.style.color = "black";
	p2Disp.style.color = "black";
};