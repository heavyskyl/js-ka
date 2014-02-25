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

function Human() {
    
    this.name = "Tom";
    this.surname = "Brown";
    this.age = "31";
    this.languages = ["Java", "Python"];
}

human.prototype = {
    
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
        
        for(i = 0; i < 2; i++){
            
            if(this.languages[i] === lang){
                return true;
            }
        }        
       
        Array.prototype.indexOf
        
        [1,2,3].indexOf(4); 
        
        return false;
    }
}

var person = new human();
var person2 = new human();

person2.getAge.call({age: '19'});

document.write(person.getFullName() + '<br/>');
document.write(person.getAge() + '<br/>');
document.write(person.setAge(6) + '<br/>');
document.write(person.hasKnowlege("C++") + '<br/>');
document.write(returnType(i) + '<br/>');

document.write(person2.getAge.call({age: '19'}) + '<br/>');


