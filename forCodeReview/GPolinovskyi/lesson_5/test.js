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
[12.02.2014 16:31:14] Vladimir Tkachenko: для прочтения
http://www.nczonline.net/blog/2014/01/21/private-instance-members-with-weakmaps-in-javascript/

*/