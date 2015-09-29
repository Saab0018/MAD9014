var boxOne = null;
var boxTwo = null;

document.addEventListener("DOMContentLoaded", function(){
        boxOne = document.querySelector(".long-rect");
	boxTwo = document.querySelector(".short-rect");
	boxOne.addEventListener("mouseover", myFunction);
	
});	

function myFunction() {
	boxTwo.innerText="Mouse over";
	boxTwo = document.querySelector(".short-rect");
	boxOne.addEventListener("mouseout", functionTwo);
}
	
function functionTwo() {
	boxTwo = document.querySelector(".short-rect")
	boxTwo.innerText= "Mouse out";
	boxTwo.addEventListener("click", functionThree);
}

function functionThree() {
	alert("clicked");
	
}


