function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	index1 = arr[0];
	for(var i = 0; i < arr.length; i++) {

		if (index1 !== arr[i]) {
			return false;
		}
	}

	return true;
}

function sumArray(arr) {
	var numb = 0;
	for (var i = 0; i < arr.length; i ++) {
		numb += arr[i];
	}

	return numb;
}

function max(arr) {
	var max = arr[0];

	for (var i = arr.length - 1; i >= 1; i--) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;

}