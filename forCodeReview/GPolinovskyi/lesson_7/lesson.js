function Animal() {
    this.food = 'SomeFood';
}

Animal.prototype = {
    eat : function() {
        alert(this.key);
    }
}

function Monkey() {
    this.food = 'banana';
}

inherit(Monkey, Animal);

var monkey = new Monkey();

monkey.eat(); // banana