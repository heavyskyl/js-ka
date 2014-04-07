SandBox.add('gallery-module', function(A) {
    var Gallery = function(cfg) {
        this.imagesWrapperSelector = cfg.images || '.images';
        this.gallerySelector = cfg.gallery || '.gallery';

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
        },
        moveLeft: function() {
            if(this.currentImage !== 0){
                this.changeImage(this.currentImage - 1);
            }
            else{
                this.hide();
            }
        },
        moveRight: function() {
            if(this.currentImage !== this.images.length - 1){
                this.changeImage(this.currentImage + 1);
            }
            else{
                this.hide();
            }
        },
        changeImage: function(imgNum) {
            var $image = A.dom.one(this.gallerySelector + ' ' + '.image img');

            if(typeof imgNum !== 'number'){
                this.currentImage = this.images.indexOf(imgNum);
            }
            else{
                this.currentImage = imgNum;
            }

            $image.setAttribute('src', this.images[this.currentImage]);
        },
        show: function() {
            var that = this;

            document.body.addEventListener('keyup', that.keyUpEvent.bind(that), false);

            A.css.set(this.gallerySelector, 'display', 'block');
            A.css.set(this.gallerySelector + ' ' + '.image', 'display', 'block');
        },
        hide: function() {
            var that = this;

            A.css.set(this.gallerySelector, 'display', 'none');
            A.css.set(this.gallerySelector + ' ' + '.image', 'display', 'none');

            document.body.removeEventListener('keyup', that.keyUpEvent, false);
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
                $arrowLeft = A.dom.one(that.gallerySelector + ' ' + '.leftArrow a'),
                $arrowRight = A.dom.one(that.gallerySelector + ' ' + '.rightArrow a'),
                i;

            for(i = 0; i < $img.length; i++) {
                $img[i].addEventListener('click', function(e) {
                    e.preventDefault();

                    that.changeImage(this.getAttribute('src'));
                    that.show();
                });
            }

            $arrowLeft.addEventListener('click', function(e) {
                e.preventDefault();

                that.moveLeft();
            });

            $arrowRight.addEventListener('click', function(e) {
                e.preventDefault();

                that.moveRight();
            });
        }
    };

    A.Gallery = Gallery;
}, {requires: ['dom-module', 'css-module', 'animation-module']});