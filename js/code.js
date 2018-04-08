var userName = prompt("What is your name?");
var age = prompt("What is your age?");
var address = prompt("Where do you live?");

console.log("Hello there " + userName);
console.log("Why are you only " + age + " years old? Turns out I am also " + age + " years old!");
console.log("Gross you live in " + address + "? I knew a bird there once.");

mage = Number(age);

if (age <18) {
	console.log("Sorry you can not enter the club.")
}

else if (age < 21) {
	console.log("You can enter but you can not drink.")
}

else {
	console.log("You can enter and drink.")
}

if (mage % 2 === 1) {
	console.log("Your age is odd!")
}

else {
	console.log("Your age is even!")
}

if (mage % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!!!!")
}