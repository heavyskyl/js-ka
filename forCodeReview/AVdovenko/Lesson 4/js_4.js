"use strict"

function car(){
    
    var model = "5052",
        kmStand = [1000,'km'],
        price = 10000,
        owner = "Bob";
    
       
    function kmStandToMiles(){
        return kmStand[0]*0.62;        
    };
    
    function milesStandToKm(){
        return kmStand[0]*1.6;
    };
    
    return {
        getStand: function(type){
        if (type === "km" && kmStand[1] === 'miles') {
            return kmStandToMiles();
        }
        else if (type === "miles" && kmStand[1] === 'km') {
            return milesStandToKm();
        }
        else{
            return kmStand[0];
        }
        },
        
        setStand: function(newVal, type){
            kmStand = [newVal, type];
        },
        
        getModel: function(){
            return model;
        },
        
        getPrice: function(){
            return price;
        },
        
        getOwner: function(){
            return owner;
        },
        
        setModel: function(newModel){
            model = newModel;
        },        
        setPrice: function(newPrice){
            price = newPrice;
        },        
        setOwner: function(newOwner){
            owner = newOwner;
        }
        
    }
}


var newCar = car();

alert(newCar.setStand(10, 'miles'));
alert(newCar.getStand('km'));
    
