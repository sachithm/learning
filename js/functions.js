// function isEven(x) {
// 	if (x % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// var facto = 0;

// var factorial = function(num) {
// 	for (var i = 1; i < num; i++) {
// 		// var fact = i * (i+1);
// 		var facto = facto * i;
// 	}

// 	return facto;
// }

function factorial(num) {
	var facto = 1;
	for (var i = 1; i <= num; i++) {
		facto = facto * i;	
	}

	return facto;
}