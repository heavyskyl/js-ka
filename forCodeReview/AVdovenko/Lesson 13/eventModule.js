var eventModule = (function(){
    
    return{
        addNewEventListener: function(action, element, func) {
            
            if(element.attachEvent){
                element.attachEvent( "on" + action, func);
            }
            else{
                element.addEventListener( action , func);
            }
        },
        
        removeNewEventListener: function(action, element, func) {
            
           if(element.attachEvent){
                element.detachEvent( "on" + action, func);
            }
            else{
                element.removeEventListener( action , func);
            }        
        },
        
        hide: function(el) {
            styleModule.setStyle(el, 'display', 'none');
        },
                
        show: function(el){
            styleModule.setStyle(el, 'display', 'block');            
        }
    }
})();