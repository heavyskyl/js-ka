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

            this.images = new A.List();

            for(i = 0; i < $images.length; i++) {
                this.images.add($images[i].getAttribute('src'));
            }

            this.handlers();

            this.events.once('init');
        },

        on: function(ev, callback) {
            this.events.on(ev, callback);
        },

        moveLeft: function() {
            this.changeImage(this.currentImage.prev);
        },
        moveRight: function() {
            this.changeImage(this.currentImage.next);
        },
        changeImage: function(img) {
            var $image = A.dom.one(this.gallerySelector + ' ' + '.image img'),
                that = this;

            that.currentImage = img;

            A.animation($image,
                {
                    opacity: 0.2,
                    height: 0
                }, 100, function() {
                    $image.setAttribute('src', that.currentImage.data + '?' + new Date().getTime());
                    A.animation($image,
                        {
                            opacity: 1,
                            height: window.innerHeight
                        }, 500, function() {
                        that.events.eventStarted('image changed');
                    });
                }, function(progress) { // Custom delta function!!!!!!!!!!!!!!!!!!
                    return progress;
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

                    that.changeImage(that.images.get(this.getAttribute('src')));
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
}, {requires: ['dom-module', 'css-module', 'animation-module', 'handlers-module', 'list-module']});