var manipulationModule = (function() {
    
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
})();