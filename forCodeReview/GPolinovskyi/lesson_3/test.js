/*
1. написать функцию которая возвращает тип входящего параметра ( строка, число, массив, обьект ) используя Object.prototype.toString.call и switch/case оператор
(посмотреть в интернете что она делает и как она работает)
2. написать класс Human  у которого есть параметры name, surname, age, sex, языки программирование которыми он владеет ( массив )

в прототипе класса должны быть методы getFullName, getAge, setAge(val), hasKnowledge(languge) ( возвращает true/false - знает ли человек конкреты язык программирования

3. создать 2 екземпляра класса
   передать в один из методов екземпляра ссылку this ( контекст функции ) используя Function.prototype.call метод
*/

/* 1 */

function inputType (param) {
	var input_param = Object.prototype.toString.call(param);
	switch (input_param) {
		case '[object String]':
			input_param = 'Srting';
			break;
		case '[object Boolean]':
			input_param = 'Boolean';
			break;
		case '[object Number]':
			input_param = 'Number';
			break;
		case '[object Null]':
			input_param = 'Null';
			break;
		default:
			alert('WTF?');
	}
	return input_param;
}

/*
alert(inputType());
*/

/* 2 */

function Human (name, surname, age, sex, language){
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.sex = sex;
	this.language = language;
}

Human.prototype.getFullName = function (){
	console.log(this.name + ' ' + this.surname);
};

Human.prototype.getAge = function (){
	console.log(this.age);
};

Human.prototype.setAge = function (val){
	this.age = val;
};

Human.prototype.hasKnowledge = function (input_languages){
	var i, key, hasOrNot = false;
	
	for (key in this.language) {
		if  (this.language[key] == input_languages) {
			hasOrNot = true;
		} 
	}
	console.log('language? ', hasOrNot);

};

/*
var newHuman = new Human('Vasya', 'Pupkin', 23, 'Man', ['English', 'Russich', 'German']);
newHuman.getFullName();
newHuman.setAge(27);
newHuman.getAge();
newHuman.hasKnowledge('German');
*/

/* 3 */

/*
var Greg = new Human('Greg', 'Polinovskyi', 25, 'Man', ['English']);
Greg.getFullName.call({ name : 'Vova', surname : 'Tkachenko'});
var newAge = {age : 27};
Greg.getAge();
Greg.getAge.call(newAge);
*/




