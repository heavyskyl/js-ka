var animationModule = (function() {
    
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