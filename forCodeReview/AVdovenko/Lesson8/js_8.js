

(function() {
    var classStr = "main menu one two three ",
        i,
        j = 0,
        part,
        newDiv = [],
        classArr;
        
        if(classStr[classStr.length - 1] == ' '){
            classStr = classStr.substring(0, classStr.length - 1);
        }
        
        classArr = classStr.split(' ');
       
    function browserSystemType() {
        
        return navigator.appCodeName + " " + navigator.platform;
        
    }
    
    function addCssClass(className, element, number) {       
       
        if( classArr.indexOf(className) === -1) {                
            classArr.push(className);
            alert("current classes : " + classArr);                 
            document.body.getElementsByTagName(element)[number].className = className;                       
        }
        else{
            alert("Element " + element + "already exists! " + classArr);               
        }    
    }
    
    function removeCssClass(className, element, number){
        var buf,
            indexOfClassName = classArr.indexOf(className);
        
        if(indexOfClassName === -1) {                
            alert("there is no such element :" + classArr);                
        }
        else{
            document.body.getElementsByTagName(element)[number].className = ' ';
            buf = classArr.splice(indexOfClassName, indexOfClassName + 1);               
        }       
    }
    
    function addClassToTagHTML(element, number){
        if(screen.width === 1600){
            addCssClass( browserSystemType() + " " + "1600", element, number);
        }
        else{
            addCssClass( browserSystemType(), element, number);
        }
    }

    addClassToTagHTML('div', 0);
    alert(document.body.innerHTML);
    removeCssClass(browserSystemType() + " " + "1600", 'div', 0);
    alert(document.body.innerHTML);
    
})();