function inherit(Childs, Parent) {
	var i,
		F = new Function();
		
	F.prototype = Parent.prototype;

	for(i = 0; i < Childs.length; i++){
		Childs[i].prototype = new F();
	}
}

function Figure() {
	this.coords = [['x1', 'y1'], ['x2', 'y2']];
}

Figure.prototype.square = function() {
	var i,
		result = 0;

	var width = this.coords[1][0] - this.coords[0][0];
	var height = this.coords[1][1] - this.coords[0][1];

	result = width * height;

	return (width * height);
}

function Line() {
	this.coords = [[0, 0], [10, 10]];
}


function Square() {
	this.coords = [[0, 0], [10, 10]];
}

function Rectangle() {
	this.coords = [[0, 0], [10, 10]];
}

inherit([Line, Square, Rectangle], Figure);