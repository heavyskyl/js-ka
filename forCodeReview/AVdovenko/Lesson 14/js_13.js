
MYAPP.MainModule = (function(){
    var animation = MYAPP.namespace('animationModule'),
        event = MYAPP.namespace('MYAPP.eventModule'),
        manipulation = MYAPP.namespace('manipulationModule'),
        popup = MYAPP.namespace('popupModule'),
        style_ = MYAPP.namespace('style_Module');
    
    function hideContainer() {       
        event.hide("blackBG");
        style_.setStyle("modal", 'opacity', 1);
    }
    
    function showContainer() {
        event.show("container");
        
    }
    
    function resizeModal() {
        style_.redraw("modal");      
    }
    
   function randomMove() {
        var ran = Math.random()*10;
        
        if(0 < ran < 0.3) {
            return animation.linear;
        } else if(0.3 < ran < 0.9) {
            return animation.quad;
        } else {
            return animation.circ;
        }
   }
   
   function moveDown(){
        var elem = document.getElementById('modal');
        
        event.show("blackBG");
        manipulation.move(elem, randomMove, 500);
   }
   
   function vanishPopup(){
        var elem = document.getElementById('modal');
        var random = Math.random();
        
        style_.setStyle("modal", 'opacity', random);
        manipulation.vanish(elem, randomMove, 1000);
        setTimeout(hideContainer, 600);
   }  
    
    popup.showMessage();    
       
    MYAPP.eventModule.addNewEventListener("resize", window, resizeModal);    
    MYAPP.eventModule.addNewEventListener("click", document.getElementById('ok'), moveDown);
    MYAPP.eventModule.addNewEventListener("click", document.getElementById('close'), vanishPopup);   
})();
    
