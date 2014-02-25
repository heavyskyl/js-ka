(function(){
    
var i,
    j,
    buf;

function calculateCalls(){
    i = 0;
    
    return function(){
        alert(i++);       
    }    
}

var sum = calculateCalls();

for(j = 1; j < 6; j++){
    buf = j * 1000;
    setTimeout(sum, buf);    
}
//--------------------------

setInterval(function(){alert(Math.round(5+Math.random()*15));}, 100);


    
    })();

