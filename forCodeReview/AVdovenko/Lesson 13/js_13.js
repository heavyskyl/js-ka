
var MainModule = (function(){
    
    function hideContainer() {       
        eventModule.hide("blackBG");
        styleModule.setStyle("modal", 'opacity', 1);
    }
    
    function showContainer() {
        eventModule.show("container");
        
    }
    
    function resizeModal() {
        styleModule.redraw("modal");      
    }
    
   function randomMove() {
        var ran = Math.random()*10;
        
        if(0 < ran < 0.3) {
            return animationModule.linear;
        } else if(0.3 < ran < 0.9) {
            return animationModule.quad;
        } else {
            return animationModule.circ;
        }
   }
   
   function moveDown(){
        var elem = document.getElementById('modal');
        
        eventModule.show("blackBG");
        manipulationModule.move(elem, randomMove, 500);
   }
   
   function vanishPopup(){
        var elem = document.getElementById('modal');
        var random = Math.random();
        
        styleModule.setStyle("modal", 'opacity', random);
        manipulationModule.vanish(elem, randomMove, 1000);
        setTimeout(hideContainer, 600);
   }  
    
    popupModule.showMessage();    
       
    eventModule.addNewEventListener("resize", window, resizeModal);    
    eventModule.addNewEventListener("click", document.getElementById('ok'), moveDown);
    eventModule.addNewEventListener("click", document.getElementById('close'), vanishPopup);   
})();
    
