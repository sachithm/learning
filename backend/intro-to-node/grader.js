var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];

total = 0;

console.log(average(scores));
console.log(average(scores2));

function average(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		total += arr[i]
	};

	avg = total / arr.length;
	avg = Math.round(avg);
	total = 0;
	return(avg);
}