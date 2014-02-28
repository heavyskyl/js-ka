/*
a. написать рекурсивную функцию которая возводит число x в степень y;
b. написать рекурсивную функцию которая подсчитывает n-е число фибоначчи
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Пример работы: function fib ( n ) { / ваш код / }
alert( fib(3) ); // 2
alert( fib(7) ); // 13
c. написать функцию которая исчет количество пробелов в строке
d. написать функцию которая возвращает массив подстрок разделенных пробелом в строке

Во всех функиях использовать строгй режим "use strict";
*/



/* A */

function number (x, y) {
	"use strict";
	
	if (y === 1) {
		return x;
	} else {
		return x * number(x, y - 1);
	}
}

/*
alert(number(2,3));
*/


/* B */

function fib (n) {
	"use strict";
	
	if (n <= 1) {
		return n;
	} else{
		return fib(n - 1) + fib(n - 2);
	}
}

/*
alert (fib(5));
*/

/* C */

function whitespaceSearch(s){
	"use strict";
	
	var i = 0,
		count = 0;
		
	for (i = 0; i < s.length; i++){
		if (s.charAt(i) === ' '){
			count++;
		} 
	}
	
	return count;
}

/*
alert(whitespaceSearch('Hello world and fuck all!'));
*/

/* D */

function subString(s){
	"use strict";
	var newArray = s.split(' ');
	return newArray;
}

/*
alert(subString('Hello world and fuck all!'));
*/

	
	
	
	