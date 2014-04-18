SandBox.add('animation-module', function(A) {
    function linear(progress) {
        return progress;
    }

    function quad(progress) {
        return Math.pow(progress, 2)
    }

    function circ(progress) {
    }

    var Animatinon = function(selector, cssRules, duration, callback, low) {
        var start = new Date(),
            $obj = (typeof selector === 'string') ? A.dom.one(selector) : selector,
            where = {},
            delta = low || '';

        if(Object.prototype.toString.call(delta) !== '[object Function]') {
            delta = function (pr) {
                return pr;
            };
        }

        for(i in cssRules) {
            if(cssRules.hasOwnProperty(i)) {
                where[i] = getComputedStyle($obj)[i];
            }
        }

        var timer = setInterval(function animate() {
            var progress = (new Date() - start) / duration,
                i;

            for(i in cssRules) {
                if(cssRules.hasOwnProperty(i)) {
                    if(i !== 'opacity')
                        $obj.style[i] = delta(progress) * (cssRules[i] - parseInt(where[i])) + parseInt(where[i]) + 'px';
                    else
                        $obj.style[i] = delta(progress) * (cssRules[i] - parseFloat(where[i])) + parseFloat(where[i]);
                }
            }

            if(progress > 1) {
                clearInterval(timer);
                if(callback) {
                    callback();
                }
            }
        }, 10);
    };

    A.animation = Animatinon;

}, {requires: ['dom-module']});