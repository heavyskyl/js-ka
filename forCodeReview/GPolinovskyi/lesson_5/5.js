/*

1. написать функцию которая бы вовращала количество вызовов эьтой функции используя замыкания

2. создать функцию которая циклом создает x обьектов с методом getIndex которая возвращает порядковый номер создания
и возвращает массив  этих обьектов.

3. (из последнего примера - приватные данные в функции конструкторе)

var Person = (function() {

    var privateData = new DataMap();

    function Person(name) {
        privateData.set(this, { name: name });
    }

    Person.prototype.getName = function() {
        return privateData.get(this).name;
    };

    return Person;
}());

создать функцию конструктор DataMap которая бы хранила данные по уникальному ключу.
для прочтения
http://www.nczonline.net/blog/2014/01/21/private-instance-members-with-weakmaps-in-javascript/

*/

/* 1 */

var countItself = (function() {
	var count = 1;
	
	function callMe() {
		return count++;
	}
	
	return callMe;
})();

/*
alert(countItself());
alert(countItself());
alert(countItself());
*/

/* 2 */

/* */
function objFactory(x) {
	var result = [],
		index = 0,
		i;
 
	for (i = 0; i < x; ++i) {
		result.push({
			getIndex : function() {console.log(i)}
		});
		index++;
	}
	
	return result;
}

console.log('Creation obj number: ', objFactory(3)[1].getIndex())

/* 3 */

function DataMap() {
	var keys = [],
		values = [];
		
	this.set = function (key, val) {
		keys.push(key);
		values.push(val);
	}
	
	this.get = function (key) {
		return values[keys.indexOf(key)];
	}
}


var Person = (function() {

    var privateData = new DataMap();

    function Person(name) {
        privateData.set(this, { name: name });
    }

    Person.prototype.getName = function() {
        return privateData.get(this).name;
    };

    return Person;
	
}());

/*
var bot_1 = new Person('vasia');
alert(bot_1.getName());
*/

