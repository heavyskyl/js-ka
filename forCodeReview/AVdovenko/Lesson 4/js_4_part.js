

var kmStand = [1000, 'km'];
var model = '5241c';
var price = 10000;
var owner = 'Bob';


 

function getStand(type){
       
    if (type === "km" && kmStand[1] === 'miles') {
        return kmStand[0]*0.62;
    }
    else if (type === "miles" && kmStand[1] === 'km') {
        return kmStand[0]*1.6;
    }else{
        return kmStand[0];
    }
}

function setStand(newVal, type){
        
    kmStand = [newVal, type];    
}

function getModel(){
    return model;
}
function setModel(newModel){
    model = newModel;
}
function getPrice(){
    return price;
}
function setPrice(newPrice){
    price = newPrice;
}
function getOwner(){
    return owner;
}
function setOwner(newOwner){
    owner = newOwner;
}


document.write(getPrice() + '<br/>');
setPrice("500");
document.write(getPrice() + '<br/>');

document.write(getOwner() + '<br/>');
setOwner("Tom");
document.write(getOwner() + '<br/>');
 