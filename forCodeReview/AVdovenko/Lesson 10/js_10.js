

(function() {
        
    function browserVersion(){
        var str = navigator.userAgent,
            arr = [];

            if(str.indexOf("Chrome") != -1){
                arr[0] = "Chrome";
                arr[1] = str.substring(str.indexOf(arr[0]) + 7, str.indexOf(arr[0]) + 20);                
            }
            else if(str.indexOf("Firefox") != -1){
                arr[0] = "Firefox";
                arr[1] = str.substring(str.indexOf(arr[0]) + 8, str.indexOf(arr[0]) + 12);                
            }
            
            return arr[0] + " " + arr[1];
        }
        
    function addCssClass(enterClassName, element){
                    
        if(element.className.indexOf(enterClassName) === -1){
            element.className = element.className + " " + enterClassName;            
        }
        else{
            alert("already exists!");
        }    
    }
    
    function removeCssClass(enterClassName, element){
        var elemClassName = element.className;
        
        if(elemClassName.indexOf(enterClassName) !== -1){ 
            elemClassName = elemClassName.slice(0, elemClassName.indexOf(enterClassName)) + elemClassName.slice(elemClassName.indexOf(enterClassName) + enterClassName.length, elemClassName.length);            
        }
        else{
            alert("there is no such class!");
        }    
    }
    
    function testFunc(){
        if (screen.width === 1600) { 
            addCssClass(browserVersion() + " ", document.getElementById("camel"));
        } else {
            addCssClass(browserVersion() + " ", document.getElementById("add"));
            removeCssClass("one" + " ", document.getElementById("camel"));
        }       
    }

    testFunc();
    alert(document.body.innerHTML);
        
})();