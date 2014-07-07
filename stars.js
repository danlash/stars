(function(){
	var canvas = document.getElementById('stars');

	function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min;	}

	var colors = ['#fff', '#eee', '#ccf', '#fcc', '#fcf', '#ffa'];
	function makeStar() {
		var star = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

		star.setAttribute("r", "1");
		star.style.stroke = colors[rand(0, colors.length)];
		star.style.strokeWidth = "1px";
		star.style.opacity = rand(0, 100) / 100.0;

		return star;
	}

	function positionStar(star) {
		var space = canvas.getBoundingClientRect();

		star.setAttribute("cy", rand(0, space.height));
		star.setAttribute("cx", rand(0, space.width));
	
		canvas.appendChild(star);

		return star;
	}

	function twinkleStar(star) {
		var opacity = 1;
		var brightening = rand(0, 1) === 1;
		var step = 0.1;

		setInterval(function(){
			opacity = brightening ? opacity + step : opacity - step;
			star.style.opacity = opacity;

			if (opacity <= 0) { brightening = true; }
			if (opacity >= 1) { brightening = false; }
		}, rand(100, 1000));

		return star;
	}

	var stars = 1000;
	for (var i = 0; i <= stars; i++) {
		twinkleStar(positionStar(makeStar()));
	}

})();