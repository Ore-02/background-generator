var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradient() {
	body.style.background =
	 "linear-gradient(to right, " + color1.value + "," + color2.value + ")"	

	 css.textContent = body.style.background  + ";"
}


color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)



const add = (a,b) => a + b;

function isUserValid() {
	return true
}

answer = isUserValid() ? "Enter" : "No Entry"
