var p1 = document.querySelector("p");

var p2 = document.querySelector("#first");

var p3 = document.querySelector(".special");

var p4 = document.querySelectorAll("#first")[0];

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

document.querySelector("p").textSelector
document.querySelector("p").innerHTML

document.querySelector(".CSSclass").classList.add("addedClass")
document.querySelector(".CSSclass").classList.remove("addedClass")
document.querySelector(".CSSclass").classList.toggle("addedClass")

document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href". "http://www.google.com");

document.querySelector("a").addEventListener("click",function(){
	console.log("SOMEONE CLICKED!!!!!!");
});


