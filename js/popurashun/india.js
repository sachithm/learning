var districts = [

	{
		name: "Uttar Pradesh",
		pop: 207281477
	},
	{
		name: "Maharashtra",
		pop: 112372972
	},
	{
		name: "Bihar",
		pop: 103804637
	},
	{
		name: "West Bengal",
		pop: 91347736
	},
	{
		name: "Madhya Pradesh",
		pop: 72597565
	},
	{
		name: "Tamil Nadu",
		pop: 72138958
	},
	{
	 	name: "Rajasthan",
	 	pop: 68621012
	},
	{
		name: "Karnataka",
		pop: 61130704
	},
	{
		name: "Gujarat",
		pop: 60383628
	},
	{
		name: "Andhra Pradesh",
		pop: 49386799
	},
	{
		name: "Odisha",
		pop: 41947358
	},
	{
		name: "Telangana",
		pop: 35286757
	},
	{
		name: "Kerala",
		pop: 33387677
	},
	{
		name: "Jharkhand",
		pop: 32966238
	},
	{
		name: "Assam",
		pop: 31169272
	},
	{
		name: "Punjab",
		pop: 27704236
	},
	{
		name: "Chhattisgarh",
		pop: 25540196
	},
	{
		name: "Haryana",
		pop: 25353081
	},
	{
		name: "Jammu and Kashmir",
		pop: 12548926
	},
	{
		name: "Uttarakhand",
		pop: 10116752
	},
	{
		name: "Himachal Pradesh",
		pop: 6864602
	},
	{
		name: "Tripura",
		pop: 3671032
	},
	{
		name: "Meghalaya",	
		pop: 2964007
	},
	{
		name: "Manipur",
		pop: 2721756
	},
	{
		name: "Nagaland",
		pop: 1980602
	},
	{
		name: "Goa",
		pop: 1457723
	},
	{
		name: "Arunachal Pradesh",
		pop: 1382611
	},
	{
		name: "Mizoram",
		pop: 1091014
	},
	{
		name: "Sikkim",
		pop: 607688
	},
	{
		name: "Delhi",
		pop: 18980000
	},
	{
		name: "Puducherry",
		pop: 1244464
	},
	{
		name: "Chandigarh",
		pop: 1055450
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

		index = Math.floor(Math.random() * districts.length);

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
				if (inArray(this,winArr) && listenArr[index]) {
					ticker += 1;
					h1.style.backgroundColor = "green"
					score.textContent = "CORRECT!!! Your score is currently:  " + ticker;
					score.classList.remove("scoreloss");


					if (index % 2 === 0) {
						pushArr[(index/2)].textContent = obj[index].name;
						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("winner");
							listenArr[index+1].classList.add("faded");
						};
						} else if (index % 2 === 1) {
						pushArr[(index - 1)/2].textContent = obj[index].name;
						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("winner");
							listenArr[index-1].classList.add("faded");
						};
					};
				} else if (listenArr[index]) {
					h1.style.backgroundColor = "#B81212"
					score.textContent = "WRONG!!! Your score is currently:  " + ticker;
					score.classList.add("scoreloss");

					if (index % 2 === 0) {
						pushArr[(index/2)].textContent = obj[index + 1].name;
						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("loser");
							listenArr[index+1].classList.add("faded");
						};
					} else if (index % 2 === 1) {
						pushArr[(index - 1)/2].textContent = obj[index - 1].name;
						if (!listenArr[index].classList.contains("faded")) {
							listenArr[index].classList.add("loser");
							listenArr[index-1].classList.add("faded");
						};
					};
				};
			});
		})(i);
	};
};
