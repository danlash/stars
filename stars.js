(function(){
	var canvas = document.getElementById('stars');

	var star = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

	star.setAttribute("cy", "15");
	star.setAttribute("cx", "15");
	star.setAttribute("r", "1");
	star.style.stroke = "#fff";
	star.style.strokeWidth = "1px";

	canvas.appendChild(star);
})();