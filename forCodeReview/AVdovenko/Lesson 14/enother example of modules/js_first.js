"use strict"
var MYAPP = {};

MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;
            
    if (parts[0] === "MYAPP") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // создать свойство, если оно отсутствует
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

var x = 5,
    y = 10,
    bigArray = [1, 11, 55, 2, 88, 121, 3, 9, 18, 21, 7, 3, 17],
    i;


MYAPP.MathObject = function(){};
    
MYAPP.MathObject.square = function(x) {
        return x * x;
    };
    
MYAPP.MathObject.maxArrayNumber = function (arr) {
        var temp = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > temp) {
                temp = arr[i];
            }
        }
        return temp;
    };
    
MYAPP.MathObject.searchElementInArray = function(x, arrY){
        var buf;
        
        for (i = 0; i < arrY.length; i++) {
            if (arrY[i] === x) {
                return true;
            }       
        }
        
        return false;
    };
    
MYAPP.MathObject.sliceArray = function (x, y, arr) {
        var arr1 = [];
        for(i = x; i < y; i++){
            arr1.push(arr[i]);
        }
        return arr1;   
    }
    
MYAPP.MathObject.averageNumber = function (x, y){
        return (x * y) / 2;
    };
    

var main = MYAPP.namespace('MathObject');


document.write(" x = " + x + "<br/>");
document.write(" y = " + y + "<br/>");
document.write(" x<sup>2</sup> = "+ main.square(x)+ "<br/>"+ "<br/>");

document.write(" Array : " + bigArray + "<br/>");
document.write("Biggest number in the Array :" + "<strong>" + main.maxArrayNumber(bigArray)+ "</strong>"+ "<br/>");
document.write("Trying to find x in Array : " + "<strong>" + main.searchElementInArray(x, bigArray)+ "</strong>"+ "<br/>");
document.write("Avarage number of " + x + " and " + y + " : " + "<strong>" + main.searchElementInArray(x, y)+ "</strong>"+ "<br/>");
document.write("Slice Array elements from " + x + " to " + y + " : " + "<strong>" + main.sliceArray(x, y, bigArray)+ "</strong>"+ "<br/>");

