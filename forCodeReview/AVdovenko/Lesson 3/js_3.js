"use strict"

var i;

function returnType(typeOfParameter){
    
    switch(Object.prototype.toString.call(typeOfParameter)){
        case "[object String]":
            return "String";
            break;
        case "[object Array]":
            return "Array";
            break;
        case "[object Number]":
            return "Number";
            break;
        case "[object Object]":
            return "Object";
            break;        
    }    
}

function Human(name, surname, age, languages) {
    
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.languages = languages;
}

Human.prototype = {
    
    getFullName: function(){
        
        return this.name + " " + this.surname; 
    },
    
    getAge: function(){
        
        return this.age;
    },
    
    setAge: function(num){
        
        this.age = num;
        
        return this.age;
    },
    
    hasKnowlege: function(lang){
        
   /*     for(i = 0; i < this.languages.length; i++){
            
            if(this.languages[i] === lang){
                return true;
            }
        }
        return false;*/
   
        if(this.languages.indexOf(lang, 0) === -1){
            return false;
        }
        return true;
    }
}

var person = new Human("Tom", "Brown", "31", ['Java', 'Python']);
var person2 = new Human("Bob", "Brown", "22", ['Java', 'Python']);

person2.getAge.call({age: '19'});

document.write(person.getFullName() + '<br/>');
document.write(person.getAge() + '<br/>');
document.write(person.setAge(6) + '<br/>');
document.write(person.hasKnowlege("C++") + '<br/>');
document.write(returnType(person) + '<br/>');

document.write(person2.getAge.call({age: '19'}) + '<br/>');


