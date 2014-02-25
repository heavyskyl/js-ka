"use strict"

var x = 5,
    y = 10,
    bigArray = [1, 11, 55, 2, 88, 121, 3, 9, 18, 21, 7, 3, 17],
    i;


var MathObject = function(){ };
MathObject.prototype = {
    square : function(x) {
        return x * x;
    },
    maxArrayNumber : function (arr) {
        var temp = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > temp) {
                temp = arr[i];
            }
        }
        return temp;
    },
    searchElementInArray : function(x, arrY){
        var buf;
        
        for (i = 0; i < arrY.length; i++) {
            if (arrY[i] === x) {
                return true;
            }       
        }
        
        return false;
    },
    sliceArray : function (x, y, arr) {
        var arr1 = [];
        for(i = x; i < y; i++){
            arr1.push(arr[i]);
        }
        return arr1;   
    },
    averageNumber : function (x, y){
        return (x * y) / 2;
    }
};

var newX = new MathObject();
var getMaxArrayNumber = new MathObject();

document.write(" x = " + x + "<br/>");
document.write(" y = " + y + "<br/>");
document.write(" x<sup>2</sup> = "+ newX.square(x)+ "<br/>"+ "<br/>");

document.write(" Array : " + bigArray + "<br/>");
document.write("Biggest number in the Array :" + "<strong>" + getMaxArrayNumber.maxArrayNumber(bigArray)+ "</strong>"+ "<br/>");
document.write("Trying to find x in Array : " + "<strong>" +newX.searchElementInArray(x, bigArray)+ "</strong>"+ "<br/>");
document.write("Avarage number of " + x + " and " + y + " : " + "<strong>" + newX.averageNumber(x, y)+ "</strong>"+ "<br/>");
document.write("Slice Array elements from " + x + " to " + y + " : " + "<strong>" + newX.sliceArray(x, y, bigArray)+ "</strong>"+ "<br/>");

