/*
ДЗ: Создать иерархию классов Линия, Квадрат, Прямоугольник, Треугольник.
Каждый из классов должен иметь параметры с координатами ( например для прямоугольника - x1, y1, x2, y2 - тоесть в системе координат ).
 и методы подсчета площади, периметра и получения координат.
*/

function inherit(Child, Parent) {
	var F = function() { };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}

/* Basic class*/

function Figure(name, x1, y1, x2, y2) { /* Class figure */
	this.name = name;
	this.coordinates = [[x1, y1], [x2, y2]];
} 

Figure.prototype = {
	height : function() {
		return this.coordinates[1][1] - this.coordinates[0][1];
	},
	
	width : function() {
		return this.coordinates[1][0] - this.coordinates[0][0];
	},
	
	getCoord : function(val) {
		switch (val) {
			case 'x1':
				return this.coordinates[0][0];
				break;
			case 'x2':
				return this.coordinates[1][0];
				break;
			case 'y1':
				return this.coordinates[0][1];
				break;
			case 'y2':
				return this.coordinates[1][1];
				break;
			default:
				alert ('Enter coordinate, for example \'x1\' or \'y2\' ');
				break;
		}
	}
}

/* Class Line */
/*
function Line(name, x1, y1, x2, y2) { 
	this.name = name;
	this.coordinates = [[x1, y1], [x2, y2]];
	
	this.getSquare = function () {
		return 0;
	}
} 

inherit(Line, Figure);

Line.prototype.getPerimeter = function() {
	return Math.sqrt(this.height() * this.height() + this.width() * this.width());
}


var myline = new Line('line', 1,1,3,3);

console.log('my line perimeter: ' ,myline.getPerimeter());
console.log('my line y projection: ' , myline.height());
console.log('my line get coord: ', myline.getCoord('y2'));

/* Class Square */

function Square(name, x1, y1, x2, y2) { 
	this.name = name;
	this.coordinates = [[x1, y1], [x2, y2]];
} 

inherit(Square, Figure);

Square.prototype = {
	getPerimeter : function() {
		if (this.height() != this.width()) {
			alert ('Not a square! ');
			return;
		}
		
		return (this.height() + this.width()) * 2;
	},
	
	getSquare : function() {
		if (this.height() != this.width()) {
			alert ('Not a square! ');
			return;
		}
		
		return (this.height() * this.width());		
	}
}

var mysquare = new Square('square', 1,1,5,5);
console.log(mysquare);
//console.log('my square height: ', mysquare.height());
//console.log('my square width: ', mysquare.width());
//console.log('my square perimeter: ', mysquare.getPerimeter());
//console.log('my square square: ', mysquare.getSquare()); 

/* Тут getPerimeter() берется из Line... Как его сделать из Figure?? */


/*
alert(mysquare.getPerimeter());
*/

/*alert(myline.getPerimeter());*/
