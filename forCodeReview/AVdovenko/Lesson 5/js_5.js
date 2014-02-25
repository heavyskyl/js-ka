
var i,
    arr;

function calculateCalls(){
    i = 0;
    
    return function(){
       return i++;
    }    
}

var sum = calculateCalls();

/*alert(sum());
alert(sum());
alert(sum());
alert(sum());*/

//------------------------------------------------

function indFunc(i){
    this.ind = i;
    this.getIndex = function(){
        return this.ind;
    }            
}

function xFunc(x){
    arr = [];
    
    for(i = 0; i < x; i++){    
        arr[i] = new indFunc(x-i);
    }
    return arr;
}

var newXfunction = xFunc(3);
//alert(newXfunction[2].getIndex());

//создать функцию конструктор DataMap которая бы хранила данные по уникальному ключу.

function DataMap(){
    var key = [];
    var val = [];
    
    this.get = function(key){
        return val[key.indexOf()];
    };
    
    this.set = function(newKey, newVal){       
            
            if(key.indexOf(newKey) === -1){
                
                key.push(newKey);
                val.push(newVal);
            }
            else{
                return alert("already exists!");
            }        
    };
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


var newPerson = Person("Bob"); 
    


