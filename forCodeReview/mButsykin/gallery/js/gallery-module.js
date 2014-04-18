SandBox.add('gallery-module', function(A) {
    var Gallery = function(cfg) {
        this.imagesWrapperSelector = cfg.images || '.images';
        this.gallerySelector = cfg.gallery || '.gallery';

        this.events = new A.Handler();

        this.init();
    };

    Gallery.prototype = {
        init: function() {
            var i,
                $images = A.dom.all(this.imagesWrapperSelector + ' ' + 'img');

            this.images = [];

            for(i = 0; i < $images.length; i++) {
                this.images.push($images[i].getAttribute('src'));
            }

            this.handlers();

            this.events.once('init');
        },

        on: function(ev, callback) {
            this.events.on(ev, callback);
        },

        moveLeft: function() {
            if(this.currentImage !== 0){
                this.changeImage(this.currentImage - 1);
                this.events.eventStarted('prev image');
            }
            else{
                this.hide();
                this.events.eventStarted('first image');
            }
        },
        moveRight: function() {
            if(this.currentImage !== this.images.length - 1){
                this.changeImage(this.currentImage + 1);
                this.events.eventStarted('next image');
            }
            else{
                this.hide();
                this.events.eventStarted('last image');
            }
        },
        changeImage: function(imgNum) {
            var $image = A.dom.one(this.gallerySelector + ' ' + '.image img'),
                that = this;

            if(typeof imgNum !== 'number'){
                this.currentImage = this.images.indexOf(imgNum);
            }
            else{
                this.currentImage = imgNum;
            }

            A.animation($image, {opacity: 0.2, height: 0}, 100, function() {
                $image.setAttribute('src', that.images[that.currentImage] + '?' + new Date().getTime());
                A.animation($image, {opacity: 1, height: window.innerHeight}, 500, function() {
                    that.events.eventStarted('image changed');
                });
            }, function(progress) { // Custom delta function!!!!!!!!!!!!!!!!!!
                return 1 - Math.sin(Math.acos(progress));
            });
        },
        show: function() {
            var that = this;

            A.css.set(this.gallerySelector, 'display', 'block');
            A.css.set(this.gallerySelector + ' ' + '.image', 'display', 'inline-block');

            A.animation(this.gallerySelector, {opacity: 1}, 500, function() {
                that.events.eventStarted('show gallery');
            });
        },
        hide: function() {
            var that = this;

            A.animation(this.gallerySelector, {opacity: 0}, 500, function() {
                A.css.set(that.gallerySelector, 'display', 'none');
                A.css.set(that.gallerySelector + ' ' + '.image', 'display', 'none');

                that.events.eventStarted('hide gallery');
            });

            document.body.removeEventListener('keyup', that.keyUpEvent);
        },
        keyUpEvent: function(e) {
            e.preventDefault();

            switch (e.keyCode){
                case 27:
                    this.hide();
                    break;
                case 37:
                    this.moveLeft();
                    break;
                case 39:
                    this.moveRight();
                    break;
                default :
                    break;
            }
        },
        handlers: function() {
            var that = this,
                $img = A.dom.all(that.imagesWrapperSelector + ' ' + 'img'),
                $arrowLeft = A.dom.one(that.gallerySelector + ' ' + '.left'),
                $arrowRight = A.dom.one(that.gallerySelector + ' ' + '.right'),
                $gallery = A.dom.one(that.gallerySelector),
                $image = A.dom.one('.image'),
                i;

            for(i = 0; i < $img.length; i++) {
                $img[i].addEventListener('click', function(e) {
                    e.preventDefault();

                    that.changeImage(this.getAttribute('src'));
                    that.show();
                });
            }

            $gallery.addEventListener('click', function(e) {
                that.hide();
            });

            $image.addEventListener('click', function(e) {
                e.stopPropagation();
            });

            $arrowLeft.addEventListener('click', function(e) {
                e.preventDefault();

                that.moveLeft();
            });

            $arrowRight.addEventListener('click', function(e) {
                e.preventDefault();

                that.moveRight();
            });

            document.body.addEventListener('keyup', that.keyUpEvent.bind(that));
        }
    };

    A.Gallery = Gallery;
}, {requires: ['dom-module', 'css-module', 'animation-module', 'handlers-module']});