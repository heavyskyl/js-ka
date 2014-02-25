"use strict"

var x = 8,
        y = 2,
        str = "Jane Austen was born December 16th, 1775 at Steventon, Hampshire, England (near Basingstoke). She was the seventh child (out of eight) and the second daughter of the Rev. George Austen, 1731-1805 (the local rector, or Church of England clergyman), and his wife Cassandra, 1739-1827",
        str2 = "Jane Austen was born December 16th",
        i;


function square(n, y){
        if (y == 0) 
                return 1; 
        else
                return n * square(n, y-1);
}

function fibonacci(i){
        if(i <=2){
                return 1;    
        }else{              
                return (fibonacci(i-1) + fibonacci(i-2));                  
        }
}

function spaceCounter(str){
        var counter = 0;
        
        for (i = 0; i < str.length; i++) {              
                if (str.charAt(i) == ' ') {
                        counter++;                        
                }
        }
        
        return counter;
}

function tokenize(str){
    var arr = [],
        m = 0;

    for(i = 0; i < str.length; i++) {            
        if (str[i] == ' ') {
            arr.push(str.slice(m, i));
            m = i;
        }
    }
    
    arr.push(str.slice(m, str.length));
    
    return arr;
}

document.write(" x = " + x + "<br/>");
document.write(" y = " + y + "<br/>");
document.write(" String = " + str2 + "<br/>" + "<br/>");
document.write(" x<sup>y</sup> = "+ x + "<sup>" + y + "</sup> = " + square(x, y)+ "<br/>" + "<br/>");
document.write("Fibonacci number "+ x + " = " + fibonacci(x) + "<br/>");

document.write("Spaces at string = " + spaceCounter(str2) + "<br/>" + "<br/>");
document.write(tokenize(str2));

