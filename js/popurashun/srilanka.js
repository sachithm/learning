// Sri Lanka 20,359,439
 
var districts = [
 
	 {
	 	name: "Colombo", 
	 	pop: 2324349
	 },
	 {
	 	name: "Gampaha",
	 	pop: 2304833
	 },
	 {
	 	name: "Kalutara", 
	 	pop: 1221948
	 },
	 {
	 	name: "Kandy", 
	 	pop: 1375382
	 },
	 {
	 	name: "Matale", 
	 	pop: 484531
	 },
	 {
	 	name: "Nuwara Eliya", 
	 	pop: 711644
	 },
	 {
	 	name: "Galle", 
	 	pop: 1063334
	 },
	 {
	 	name: "Matara", 
	 	pop: 814048
	 },
	 {
	 	name: "Hambantota", 
	 	pop: 599903
	 },
	 {
	 	name: "Jaffna", 
	 	pop: 583882
	 },
	 {
	 	name: "Mannar", 
	 	pop: 99570
	 },
	 {
	 	name: "Vavuniya", 
	 	pop: 172115
	 },
	 {
	 	name: "Mullaitivu", 
	 	pop: 92238
	 },
	 {
	 	name: "Kilinochchi",
	 	pop: 113510
	 },
	 {
	 	name: "Batticaloa",
	 	pop: 526567
	 },
	 {
	 	name: "Ampara",
	 	pop: 649402
	 },
	 {
	 	name: "Trincomalee",
	 	pop: 379541
	 },
	 {
	 	name: "Kurunegala",
	 	pop: 1618465
	 },
	 {
	 	name: "Puttalam",
	 	pop: 762396
	 },
	 {
	 	name: "Anuradhapura",
	 	pop: 860575
	 },
	 {
	 	name: "Polonnaruwa",
	 	pop: 406088
	 },
	 {
	 	name: "Badulla",
	 	pop: 815405
	 },
	 {
	 	name: "Moneragala", 
	 	pop: 451058
	 },
	 {
	 	name: "Ratnapura",
	 	pop: 1088007
	 },
	 {
	 	name: "Kegalle",
	 	pop: 840648
	 }

 ];

var buttsl = document.querySelectorAll(".outl");
var buttsr = document.querySelectorAll(".outr");
var buttsOneL = document.querySelectorAll(".onel");
var buttsOneR = document.querySelectorAll(".oner");
var buttsTwoL = document.querySelectorAll(".twol");
var buttsTwoR = document.querySelectorAll(".twor");
var buttsThrL = document.querySelectorAll(".thrl");
var buttsThrR = document.querySelectorAll(".thrr");
var buttsCent = document.querySelectorAll(".cent");

var score = document.querySelector(".score");
var h1 = document.querySelector("h1");

var winners = [];
var distrObOne = [];
var ticker = 0;

// Takes HTML divs for outer columns and puts them into one array
var buttsArr = nodeKiller(buttsl,buttsr);

// Tier 1 columns
var buttsOneArr = nodeKiller(buttsOneL,buttsOneR);

// Tier 2 columns
var buttsTwoArr = nodeKiller(buttsTwoL,buttsTwoR);

// Tier 3 columns
var buttsThrArr = nodeKiller(buttsThrL,buttsThrR);

// Centre
var buttsCentArr = [];
var buttsFin = [];
// var notCent = [];

// for (var i = buttsArr.length - 1; i >= 0; i--) {
// 	notCent[i] = buttsArr[i];
// };

// for (var i = buttsOneArr.length - 1; i >= 0; i--) {
// 	notCent[i+buttsArr.length] = buttsOneArr[i];
// };

// for (var i = buttsTwoArr.length - 1; i >= 0; i--) {
// 	notCent[i+buttsArr.length+buttsOneArr.length] = buttsTwoArr[i];
// };

// for (var i = buttsThrArr.length - 1; i >= 0; i--) {
// 	notCent[i+buttsArr.length+buttsOneArr.length+buttsTwoArr.length] = buttsThrArr[i];
// };

buttsCentArr[0] = buttsCent[0];
buttsCentArr[1] = buttsCent[2];
buttsFin[0] = buttsCent[1];
// for (var i = buttsl.length - 1; i >= 0; i--) {
// 	buttslArr[i] = buttsl[i];
// 	buttsrArr[i] = buttsr[i];
// }
// var buttsArr = Array.prototype.concat.call(buttslArr, buttsrArr);




// Shuffles districts array
shuffleArray(districts);


// Adds extra objects to districts so as to make sure we have 32, NEED TO FIX EMPTY BUTTON ORDER
if (districts.length < 32) {
	for (var i = (32 - districts.length); i > 0; i--) {

		index = Math.floor(Math.random() * 32);

		districts.splice(index, 0, {
			name: "No-one :(",
			pop: 0
		});
	};
};


// Assigns (randomized) names to HTML outer divs
for (var i = districts.length - 1; i >= 0; i--) {
	buttsArr[i].textContent = (districts[i].name);
};


// Splits buttsArr(s) in pairs, compares for larger one in each pair, creates list of 'winners' for each pair
splitButtsArr = splitPairs(buttsArr);
createWinners(splitButtsArr,districts);
var winners = wOn[0];
var distrObOne = wOn[1];
distrObOne.reverse();

// Tier-One
splitButtsOneArr = splitPairs(buttsOneArr);
createWinners(splitButtsOneArr,distrObOne);
var winOne = wOn[0];
var distrObTwo = wOn[1];
distrObTwo.reverse();

// Tier-Two
splitButtsTwoArr = splitPairs(buttsTwoArr);
createWinners(splitButtsTwoArr,distrObTwo);
var winTwo = wOn[0];
var distrObThr = wOn[1];
distrObThr.reverse();

// Tier-Three
splitButtsThrArr = splitPairs(buttsThrArr);
createWinners(splitButtsThrArr,distrObThr);
var winThr = wOn[0];
var distrObCent = wOn[1];
distrObCent.reverse();

// Centre
splitButtsCentArr = splitPairs(buttsCentArr);
createWinners(splitButtsCentArr,distrObCent);
var winCent = wOn[0];
var distrObFin = wOn[1];
distrObFin.reverse();


// Listens for clicks, and checks whether click was winner, adds to tier-one, adds colours
clicksAhoy(buttsArr,winners,buttsOneArr,districts);

// Tier-one
clicksAhoy(buttsOneArr,winOne,buttsTwoArr,distrObOne);

// Tier-two
clicksAhoy(buttsTwoArr,winTwo,buttsThrArr,distrObTwo);

// Tier-three
clicksAhoy(buttsThrArr,winThr,buttsCentArr,distrObThr);

// Centre
clicksAhoy(buttsCentArr,winCent,buttsFin,distrObCent);





function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
};
	   	
function nodeKiller(node1,node2) {
	var arr1 = [];
	var arr2 = [];
	for (var i = node1.length - 1; i >= 0; i--) {
		arr1[i] = node1[i];
		arr2[i] = node2[i];
	}
	return Array.prototype.concat.call(arr1, arr2);
};

function splitPairs(arr) {
    var pairs = [];
    for (var i=0 ; i<arr.length; i+=2) {
        pairs.push ([arr[i], arr[i+1]]);
    }
    return pairs;
};

function createWinners(arr,obj) {
	var win = [];
	var winOb = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		if (obj[2*i].pop > obj[2*i+1].pop) {
			win.push(arr[i][0]);
			winOb.push(obj[2*i]);
		} else {
			win.push(arr[i][1]);
			winOb.push(obj[2*i+1]);
		};
	};
	wOn = [win, winOb];
	return wOn;
};

function inArray(needle,haystack) {
    for (var i=0; i<haystack.length; i++) {
        if(haystack[i] === needle) {
        	return true;
    	}
    }
    return false;
};

function clicksAhoy(listenArr,winArr,pushArr,obj) {
	for (var i = listenArr.length - 1; i >= 0; i--) {
		(function(index) {
			listenArr[i].addEventListener("click", function(){
				if (inArray(this,winArr) && !listenArr[index].classList.contains("inactive")) {
					ticker += 1;
					h1.style.backgroundColor = "green"
					score.textContent = "CORRECT!!! Your score is currently:  " + ticker;
					score.classList.remove("scoreloss");


					if (index % 2 === 0) {

						pushArr[(index/2)].classList.add("primed");
						if (index % 4 === 2 && pushArr[(index/2)-1].classList.contains("primed")) {
							pushArr[(index/2)].classList.remove("inactive");
							pushArr[(index/2)-1].classList.remove("inactive");
						} else if (index % 4 === 0 && pushArr[(index/2)+1].classList.contains("primed") && pushArr.length > 2) {
							pushArr[(index/2)].classList.remove("inactive");
							pushArr[(index/2)+1].classList.remove("inactive");
						};
						
						pushArr[(index/2)].textContent = obj[index].name;

						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("winner", "inactive");
							listenArr[index+1].classList.add("faded", "inactive");

						};
						} else if (index % 2 === 1) {

						pushArr[(index-1)/2].classList.add("primed");

						if ((index+1) % 4 === 2 && pushArr[((index+1)/2)].classList.contains("primed") && pushArr.length > 2) {
							pushArr[((index+1)/2)].classList.remove("inactive");
							pushArr[(index - 1)/2].classList.remove("inactive");
						} else if ((index+1) % 4 === 0 && pushArr[((index-3)/2)].classList.contains("primed")) {
							pushArr[((index-3)/2)].classList.remove("inactive");
							pushArr[(index - 1)/2].classList.remove("inactive");
						};

						pushArr[(index - 1)/2].textContent = obj[index].name;

						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("winner", "inactive");
							listenArr[index-1].classList.add("faded", "inactive");
						};
					};
				} else if (!listenArr[index].classList.contains("inactive")) {
					h1.style.backgroundColor = "#B81212"
					score.textContent = "WRONG!!! Your score is currently:  " + ticker;
					score.classList.add("scoreloss");
					listenArr[index].classList.add("inactive");

					if (index % 2 === 0) {

						pushArr[(index/2)].classList.add("primed");
						if (index % 4 === 2 && pushArr[(index/2)-1].classList.contains("primed")) {
							pushArr[(index/2)].classList.remove("inactive");
							pushArr[(index/2)-1].classList.remove("inactive");
						} else if (index % 4 === 0 && pushArr[(index/2)+1].classList.contains("primed")) {
							pushArr[(index/2)].classList.remove("inactive");
							pushArr[(index/2)+1].classList.remove("inactive");
						};					
						

						pushArr[(index/2)].textContent = obj[index + 1].name;

						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("loser", "inactive");
							listenArr[index+1].classList.add("faded", "inactive");
						};
					} else if (index % 2 === 1) {
						
						pushArr[(index-1)/2].classList.add("primed");

						if ((index+1) % 4 === 2 && pushArr[((index+1)/2)].classList.contains("primed")) {
							pushArr[((index+1)/2)].classList.remove("inactive");
							pushArr[(index - 1)/2].classList.remove("inactive");
						} else if ((index+1) % 4 === 0 && pushArr[((index-3)/2)].classList.contains("primed")) {
							pushArr[((index-3)/2)].classList.remove("inactive");
							pushArr[(index - 1)/2].classList.remove("inactive");
						};					
						pushArr[(index - 1)/2].textContent = obj[index - 1].name;

						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("loser", "inactive");
							listenArr[index-1].classList.add("faded", "inactive");
						};
					};
				};
			});
		})(i)
	};;
};
