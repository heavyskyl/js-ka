SandBox.add('animate-module', function(A) {
    function linear(progress) {
        return progress;
    }

    function quad(progress) {
        return Math.pow(progress, 2)
    }

    function circ(progress) {
        return 1 - Math.sin(Math.acos(progress))
    }

    function Animate() {
        this.animations = [linear, quad, circ];
    }

    Animate.prototype = {
        startAnimation: function(opts) {
            var start = new Date;
            var timer = setInterval(function() {
                var progress = (new Date - start) / opts.duration;

                if (progress > 1) progress = 1;
                opts.step( opts.delta(progress) );
                if (progress == 1) {
                    clearInterval(timer);
                    opts.callback();
                }

            }, opts.delay || 10);
        },
        move: function (elem, delta, duration, where, callback) {
            var to = where;
            this.startAnimation({
                delay: 10,
                duration: duration || 1000,
                delta: delta,
                step: function(delta) {
                    elem.style.top = to * delta + "px";
                },
                callback: callback || function() {}
            });
        },
        moveRandom: function (elem, duration, where, callback) {
            var to = where;
            var fun = Math.floor(Math.random() * this.animations.length);
            var currentTop = elem.getBoundingClientRect().top;

            this.startAnimation({
                delay: 10,
                duration: duration || 1000,
                delta: this.animations[fun],
                step: function(delta) {
                    elem.style.top = Math.abs(currentTop - to * delta) + "px";
                },
                callback: callback || function() {}
            });
        }
    };
    A.Animate = Animate;

}, {requires: ['dom-module']});