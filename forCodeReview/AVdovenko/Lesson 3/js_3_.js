"use strict"

var i;

var Human = {
  
    name: "Tom",
    surname: "Brown",
    age: "26",
    sex: "male",
    languages: ["Pascal", "Python"],
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
        for(i = 0; i < lang.length; i++){
            if(this.languages[i] == lang){
                return true;
            }
        }
        return false;
    }
    
}

Human.prototype = {    
    
}

document.write(Human.getFullName() + '<br/>');
document.write(Human.getAge() + '<br/>');
document.write(Human.setAge(6) + '<br/>');
document.write(Human.hasKnowlege("Java") + '<br/>');

