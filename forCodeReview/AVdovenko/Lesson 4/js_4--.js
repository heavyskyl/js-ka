

function car(){
    
    var model = "5052",
        kmStand = [1000,'km'],
        price = 10000,
        owner = "Bob";
    
       
    /*function kmStandToMiles(){
        
    }  
    function milesStandToKm(){
        
    }*/
 
    
    
    return{
        
        getStand: function(type){
   
            if (type === "km" && kmStand[1] === 'miles') {
                return kmStand[0]*0.62;
            }
            else if (type === "miles" && kmStand[1] === 'km') {
                return kmStand[0]*1.6;
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
        
        setModel: function(newModel){
            model = newModel;
        },
        
        getPrice: function(){
            return price;
        },
         
        setPrice: function(newPrice){
            price = newPrice;
        },
        
        getOwner: function (){
            return owner;
        },
        
        setOwner: function(newOwner){
            owner = newOwner;
        },  
    
    }
    
    
    
}
 var newCar = car();

    
    
