MYAPP.eventModule = (function(){})();
    var style_ = MYAPP.namespace('style_Module');
       
    
MYAPP.eventModule.addNewEventListener = function(action, element, func) {
            
            if(element.attachEvent){
                element.attachEvent( "on" + action, func);
            }
            else{
                element.addEventListener( action , func);
            }
        };
        
MYAPP.eventModule.removeNewEventListener = function(action, element, func) {
            
           if(element.attachEvent){
                element.detachEvent( "on" + action, func);
            }
            else{
                element.removeEventListener( action , func);
            }        
        };
        
MYAPP.eventModule.hide = function(el) {
            style_.setStyle(el, 'display', 'none');
        };
                
MYAPP.eventModule.show = function(el){
           // var element = document.getElementById(el);
           // element.style.display = 'block';
           MYAPP.style_Module.setStyle(el, 'display', 'block');
           
        };
   
