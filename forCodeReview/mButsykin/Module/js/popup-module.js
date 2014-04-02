SandBox.add('popup-module', function(A) {
    function popUp(cfg) {
        this.openButton = cfg.openSelector;
        this.closeButton = cfg.closeSelector;
        this.handlerListener = new A.Handler();

        this.init();
    }

    popUp.prototype = {
        init: function() {
            this.handlers();
        },
        center: function() {
            var $target = A.dom.one(this.target),
                width = $target.getBoundingClientRect().width,
                height = $target.getBoundingClientRect().height,
                screenW = window.innerWidth,
                screenH = window.innerHeight,
                animation = new A.Animate(),
                that = this;

            A.css.set(this.target, 'left', screenW / 2 - width / 2 + 'px');
            animation.moveRandom(A.dom.one(this.target), 1000, screenH / 2 - height / 2, function(){
                that.handlerListener.eventStarted('centered');
            });
        },
        show: function() {
            A.css.set(this.target, 'display', 'inline-block');
        },
        hide: function() {
            var animation = new A.Animate(),
                that = this,
                $target = A.dom.one(this.target),
                height = $target.getBoundingClientRect().height,
                screenH = window.innerHeight;

            animation.moveRandom($target, 1000, screenH / 2 - height / 2, function(){
                A.css.set(that.target, 'display', 'none');
            });
        },
        handlers: function() {
            var $openButton = A.dom.all(this.openButton),
                $closeButton = A.dom.all(this.closeButton),
                that = this,
                i;

            for(i = 0; i < $openButton.length; i++) {
                $openButton[i].addEventListener('click', function() {
                    that.target = this.dataset.popup;
                    $closeButton = A.dom.all(this.dataset.popup + ' ' + that.closeButton);

                    that.handlerListener.eventStarted('before show');

                    that.show();

                    that.handlerListener.eventStarted('after show');

                    that.center();
                });
            }

            for(i = 0; i < $closeButton.length; i++) {
                $closeButton[i].addEventListener('click', function() {
                    that.handlerListener.eventStarted('before hide');

                    that.hide();

                    that.handlerListener.eventStarted('after hide');
                });
            }
        }
    };

    A.popUp = popUp;
}, {requires: ['css-module', 'handlers-module', 'animate-module']});