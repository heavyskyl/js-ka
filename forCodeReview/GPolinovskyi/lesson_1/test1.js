/*
    �. ���������� ������� �����
    �. ���������� ������������ �������� �� ������� ����� �����
    �. ���������� ��������� �� ������� x, � ������� y.
    �. ������� ������� ���������� ���� ������� �� ������� x, �� ������� y.
    �. ������� ������� ���������� ������� �������������� �� ���� �����.
*/


/* A */
var obj = {
	square : function(a){
			return a * a;
		}
};

// alert(obj.square(5));

/* B */

var obj1 = {
	maxVal : 
		function(a){
			var max = 0,
				count = 0,
				b = a || [];
			for ( var i = 0; i < a.length; ++i){
				if (a[i] > max) max = a[i];
				count++;
			}
			console.log(count);
			return max;
		}
};

/*
var mas = new Array(1,2,3, 5, 18, 4, 2, 1);
alert(obj1.maxVal(mas));

����� ������ - ����� ���-�� ����� � ������� ������, ��� �������� ������. � ���������� ������ ��� ��������?
*/

/* C */

var obj2 = {
	isInArray : 
		function(x,y){
			for ( var i = 0; i < y.length; ++i){
				if (y[i] === x){
					return true;
				} else {
					return false;
				}
			}
		}
};


var mas =  [2,3, 5, 18, 4, 2, 1, 's'];
alert(obj2.isInArray('s', mas));

��� ������ - ������, ���� �������� � ������ �����, �.�. 's' � �������� �� � alert(obj.isInArray('s', mas)); - ������������ false?

*/

/* G */

var obj3 = {
	partOfArray : 
		function(x,y, arr){
			var arrLength = arr.length;
			var newArray = [];

			for ( var i = x; i < y; i++){
				newArray.push(arr[i]);
				
				newArray[100] = 1;
			}
			return newArray;
		}
};

/*
	�� ��� ���-�� ���� �� ��� :)
	
var mas = new Array(1,2,3, 5, 18, 4, 2, 1);
var res = obj3.partOfArray(1, 3, mas);
alert(res);
*/

/* D */

var obj4 = {
	meanAryth : 
		function(x,y){
			return (x + y) / 2;
		}
};

/*
alert(obj4.meanAryth(2, 3));
*/









