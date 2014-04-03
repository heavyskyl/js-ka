MYAPP.style_Module = (function(){})();
        
MYAPP.style_Module.setStyle = function(el, property ,value) {
                var element = document.getElementById(el);
                
                element.style[property] = value;
            };        
            
MYAPP.style_Module.redraw = function(el) {
                var hei = window.innerHeight,
                    wid = window.innerWidth,
                    element = document.getElementById(el);
                    
                    element.style.height = hei / 2;
                    element.style.width = wid / 2;
                    element.style.top = hei / 4;
                    element.style.left = wid / 4;
            };
        
