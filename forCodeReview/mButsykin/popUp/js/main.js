function animate(opts) {
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
}

function linear(progress) {
    return progress;
}

function quad(progress) {
    return Math.pow(progress, 2)
}

function circ(progress) {
    return 1 - Math.sin(Math.acos(progress))
}

function move(elem, delta, duration, where, callback) {
    var to = where;

    animate({
        delay: 10,
        duration: duration || 1000,
        delta: delta,
        step: function(delta) {
            elem.style.top = to*delta + "px";
        },
        callback: callback || function() {}
    });

}

var animations = [linear, quad, circ];

function PopUp(cfg) {
    this.button = document.querySelector(cfg.button);
    this.popUpWrapperSelector = cfg.wrapper;

    this.init();
}

PopUp.prototype = {
    init: function() {
        var target = document.getElementById(this.button.dataset.popup).innerHTML,
            header = this.button.innerHTML;

        document.querySelector(this.popUpWrapperSelector + ' .inner').innerHTML = target;
        document.querySelector(this.popUpWrapperSelector + ' .header p').innerHTML = header;
        this.handlers();
    },
    setCssStyle: function(selector, prop, val) {
        var arr = document.querySelectorAll(selector),
            i;

        for(i = 0 ; i < arr.length; i++) {
            arr[i].style[prop] = val;
        }
    },
    show: function() {
        var elem = document.getElementsByClassName('popUpWrapper')[0],
            fun = Math.floor(Math.random() * (animations.length));

        this.setCssStyle(this.popUpWrapperSelector, 'display', 'block');
       // move(elem, animations[fun], 1000, (window.innerHeight / 2 - document.querySelector(this.popUpWrapperSelector).offsetHeight));
    },
    hide: function() {
        var elem = document.getElementsByClassName('popUpWrapper')[0],
            that = this,
            fun = Math.floor(Math.random() * (animations.length));

        move(elem, animations[fun], 1000, 0, function(){
            that.setCssStyle(that.popUpWrapperSelector, 'display', 'none');
        });
    },
    handlers: function() {
        var that = this;

        that.button.addEventListener('click', function() {
            that.show();
            document.querySelector(that.popUpWrapperSelector + ' .header a.close').addEventListener('click', function() {
                that.hide();
            });
        });
    }
};