 var observerable = {
 
  listeners : {},
   
  addListener : function(object, evt, callback) {
   
    if ( !this.listeners.hasOwnProperty(evt) ) {
     
      this.listeners[evt] = [];
    }       
     
    this.listeners[evt].push(object[callback]);
     
  },
   
  removeListener : function(object, evt, callback) {
   
    if ( this.listeners.hasOwnProperty(evt) ) {
      var i,length; 
       
      for (i = 0, length = this.listeners[evt].length; i < length; i += 1) {
       
        if( this.listeners[evt][i] === object[callback]) {
         
          this.listeners[evt].splice(i, 1);
        }
      } 
    }
  },
   
  triggerEvent : function(evt, args) {
   
    if ( this.listeners.hasOwnProperty(evt) )    {                  
      var i,length;                     
       
      for (i = 0, length = this.listeners[evt].length; i < length; i += 1) {
       
         this.listeners[evt][i](args);
      }         
    }                           
  } 
};



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
})(),

    styleModule = (function(){
        
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
})(),

    eventModule = (function(){
    
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
})(),
    
    animationModule = (function() {
    
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
})(),  
    
    manipulationModule = (function() {
    
    return {
        move: function(elem, delta, duration) {
            var to = window.innerHeight / 4;                
                           
            animationModule.animate({
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
            
            animationModule.animate({
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
})(),

    MainModule = (function(){
    
    function hideContainer() {       
        eventModule.hide("blackBG");
        styleModule.setStyle("modal", 'opacity', 1);
    }
    
    function showContainer() {
        eventModule.show("container");
        
    }
    
    function resizeModal() {
        styleModule.redraw("modal");
        observerable.triggerEvent("centered", {message : "new size for popup!"});
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
        
        observerable.triggerEvent("beforeShow", {message : "hello"});
        
        eventModule.show("blackBG");       
        manipulationModule.move(elem, randomMove, 500);
        
        observerable.triggerEvent("afterShow", {message : "goodbye"});
       
   }
   
   function vanishPopup(){
        var elem = document.getElementById('modal');
        var random = Math.random();
        
        observerable.triggerEvent("beforeClose", {message : "hi"});
        
        styleModule.setStyle("modal", 'opacity', random);
        manipulationModule.vanish(elem, randomMove, 1000);
     
        setTimeout(hideContainer, 600);
        
        observerable.triggerEvent("afterClose", {message : "bye"});
       
   }
   
   var beforeShow = {
        callBackOne : function(e) {        
        styleModule.setStyle("ok", 'opacity', "0");        
       
        console.log("beforeShow: " + e.message);        
        }   
    };
    
     
    var afterShow = {
      callBackOne : function(e) {
        styleModule.setStyle("close", 'background', "brown");
        styleModule.setStyle("close", 'color', "white");
        styleModule.setStyle("close", 'border-color', "black");
        
        console.log("afterShow: " + e.message);
        observerable.removeListener( afterShow, "afterShow", "callBackOne");
      }       
    };
    
    var beforeClose = {
      callBackOne : function(e) {
        styleModule.setStyle("close", 'background', "orange");
               
        console.log("beforeClose: " + e.message);
      }   
    };
     
    var afterClose = {
      callBackOne : function(e) {
        styleModule.setStyle("ok", 'opacity', "1");
        styleModule.setStyle("close", 'border-color', "brown");
        styleModule.setStyle("close", 'color', "brown");
        
        console.log("afterClose: " + e.message);
      }       
    };
    
    var centered = {
      callBackOne : function(e) {
        styleModule.setStyle("close", 'width', "25%");
        
        console.log("centered: " + e.message);
      }       
    };
    
    popupModule.showMessage();    
       
    eventModule.addNewEventListener("resize", window, resizeModal);    
    eventModule.addNewEventListener("click", document.getElementById('ok'), moveDown);
    eventModule.addNewEventListener("click", document.getElementById('close'), vanishPopup);   
        
    observerable.addListener( beforeShow, "beforeShow", "callBackOne");
    observerable.addListener( afterShow, "afterShow", "callBackOne");
    
    observerable.addListener( beforeClose, "beforeClose", "callBackOne");
    observerable.addListener( afterClose, "afterClose", "callBackOne");
    
    observerable.addListener( centered, "centered", "callBackOne");
})();