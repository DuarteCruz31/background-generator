var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById('random')

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color01 = '#';
	for (var i = 0; i < 6; i++) {
		color01 += letters[Math.floor(Math.random() * 16)];
	}
	color1.value = color01
	return color01;
}

function getRandomColor2() {
	var letters = '0123456789ABCDEF';
	var color02 = '#';
	for (var i = 0; i < 6; i++) {
		color02 += letters[Math.floor(Math.random() * 16)];
	}
	color2.value = color02
	return color02;
}

function setRandomColors() {
	body.style.background =
		"linear-gradient(to right, "
		+ getRandomColor()
		+ ", "
		+ getRandomColor2()
		+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColors);
