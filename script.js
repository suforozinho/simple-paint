var canvas = document.getElementById("canvas");
var drawingSpace = document.getElementById("drawing_space")
canvas.width = drawingSpace.offsetWidth;
canvas.height = drawingSpace.offsetHeight;

var c = canvas.getContext("2d");

var color = 0;
var red = document.getElementsByClassName("header_red");
var blue = document.getElementsByClassName("header_blue");
var green = document.getElementsByClassName("header_green");
var yellow = document.getElementsByClassName("header_yellow");

red[0].addEventListener("click", function() {
	color = "red";
});

blue[0].addEventListener("click", function() {
	color = "blue";
});

green[0].addEventListener("click", function() {
	color = "green";
});

yellow[0].addEventListener("click", function() {
	color = "yellow";
});

canvas.addEventListener("click", function() {
	canvas.addEventListener("mousemove", function(ev) {
		var x = ev.x - canvas.offsetLeft;
		var y = ev.y - canvas.offsetTop;

		c.beginPath();
		c.arc(x, y, 5, 0, Math.PI * 2, false);
		c.fillStyle = color;
		c.fill();

		canvas.addEventListener("contextmenu", function(ev) {
			console.log("hello world");
			ev.preventDefault();
			return false;
		}, false);
	});
});

/*var x = ev.x - canvas.offsetLeft;
	var y = ev.y - canvas.offsetTop;

	c.beginPath();
	c.arc(x, y, 5, 0, Math.PI * 2, false);
	c.fillStyle = color;
	c.fill();*/