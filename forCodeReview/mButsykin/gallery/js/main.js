SandBox('gallery-module', function(A) {
    var gallery = new A.Gallery({
        images: '.images',
        gallery: '.gallery'
    });

    gallery.on('prev image', function() {console.log(console.log('prev image'));});
    gallery.on('hide gallery', function() {console.log(console.log('hide gallery'));});
    gallery.on('show gallery', function() {console.log(console.log('show gallery'));});
    gallery.on('next image', function() {console.log(console.log('next image'));});
    gallery.on('last image', function() {console.log(console.log('last image'));});
    gallery.on('first image', function() {console.log(console.log('first image'));});
});