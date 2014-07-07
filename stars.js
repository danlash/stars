(function(){
	var canvas = document.getElementById('stars');

	var star = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

	star.setAttribute("cy", "15");
	star.setAttribute("cx", "15");
	star.setAttribute("r", "1");
	star.style.stroke = "#fff";
	star.style.strokeWidth = "1px";

	canvas.appendChild(star);

	var opacity = 1;
	var brightening = false;
	var step = 0.1;

	setInterval(function(){
		opacity = brightening ? opacity + step : opacity - step;
		star.style.opacity = opacity;

		if (opacity <= 0) { brightening = true; }
		if (opacity >= 1) { brightening = false; }
	}, 100);

})();