

var popupModule = (function(){
    var titleMod = "Filozoa",
        bodyMod = "The ancestral opisthokont cell is assumed to have possessed slender filose (thread-like) projections or 'tentacles'. In some opisthokonts (Mesomycetozoa and Corallochytrium) these were lost. They are retained in Filozoa, where they are simple and non-tapering, with a rigid core of actin bundles (contrasting with the flexible, tapering and branched filopodia of nucleariids and the branched rhizoids and hyphae of fungi). In choanoflagellates and in the most primitive animals, namely sponges, they aggregate into a filter-feeding collar around the cilium or flagellum; this is thought to be an inheritance from their most recent common filozoan ancestor.";
    
    return{   
        showMessage: function() {
            var container = document.createElement('div');
          
            container.innerHTML = '<link type="text/css" rel="stylesheet" href="modalCss.css">\
            <div id="container"><div id="blackBG"></div> \
            <div id="modal"> \
              <h1>' + titleMod + '</h1> \
              <div class="content">' + bodyMod + '</div> \
              <input id="close" type="button" value="Close"> \
            </div></div>';
            
            document.body.appendChild(container);        
        }
    }
})();

var styleModyle = (function(){
        
        return{
            setStyle: function(el, property ,value) {
                var element = document.getElementById(el);
                
                element.style[property] = value;
            },          
            
            redraw: function(el) {
                var hei = window.innerHeight,
                    wid = window.innerWidth,
                    element = document.getElementById(el);
                    
                    element.style.height = hei / 2;
                    element.style.width = wid / 2;
                    element.style.top = hei / 4;
                    element.style.left = wid / 4;
            }
        }
    })();

var eventModyle = (function(){
    
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
            styleModyle.setStyle(el, 'display', 'none');
        },
                
        show: function(el){
            styleModyle.setStyle(el, 'display', 'block');            
        }
    }
    })();
    
var animationModyle = (function() {
    
    return{
        animate: function(opts) {
            var start = new Date; 
            var timer = setInterval(function() {
                            var progress = (new Date - start) / opts.duration;
                            if (progress > 1) progress = 1; 
                            opts.step(progress);
                            if (progress == 1) clearInterval(timer); 
                        },
                        opts.delay || 10); 
        },
        
        linear: function(progress) {
            return progress;
        },   
          
        quad: function(progress) {
            return Math.pow(progress, 2)
        },
          
        circ: function(progress) {
            return 1 - Math.sin(Math.acos(progress))
        }       
    }
})();  
    
var manipulationModyle = (function() {
    
    return {
        move: function(elem, delta, duration) {
                var to = window.innerHeight / 4;
                               
                animationModyle.animate({
                  delay: 10,
                  duration: duration,
                  delta: delta,
                  step: function(delta) {
                    elem.style.top = to*delta + "px";            
                  }
                });      
            },
            
        vanish: function(elem, delta, duration) {
            var to = 1000,
                minTo = -1000,
                random = Math.random();
            
            animationModyle.animate({
              delay: 10,
              duration: duration,
              delta: delta,
              step: function(delta) {            
                if(random >= 0.5){                
                    elem.style.top = to*delta + "px";                
                } else {
                    elem.style.top = minTo*delta + "px";
                }
              }
            });                 
        }
    }
})();

var MainModyle = (function(){
    
    function hideContainer() {       
        eventModyle.hide("blackBG");
        styleModyle.setStyle("modal", 'opacity', 1);
    }
    
    function showContainer() {
        eventModyle.show("container");
        
    }
    
    function resizeModal() {
        styleModyle.redraw("modal");      
    }
    
   function randomMove() {
        var ran = Math.random()*10;
        
        if(0 < ran < 0.3) {
            return animationModyle.linear;
        } else if(0.3 < ran < 0.9) {
            return animationModyle.quad;
        } else {
            return animationModyle.circ;
        }
   }  
    
    
    popupModule.showMessage();
    
    eventModyle.addNewEventListener("click", document.getElementById("ok"), showContainer);    
    eventModyle.addNewEventListener("resize", window, resizeModal);
    
    document.getElementById('ok').onclick = function(e) {
        var elem = document.getElementById('modal');
        
        eventModyle.show("blackBG");
        manipulationModyle.move(elem, randomMove, 500);
    }
    
    document.getElementById('close').onclick = function(e) {
        var elem = document.getElementById('modal');
        var random = Math.random();
        
        styleModyle.setStyle("modal", 'opacity', random);
        manipulationModyle.vanish(elem, randomMove, 1000);
        setTimeout(hideContainer, 600);       
    }
})();
    
