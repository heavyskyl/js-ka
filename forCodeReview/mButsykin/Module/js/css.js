SandBox.add('css-module', function(A) {

    A.css = {
        set: function(el, style, val) {
            var arr = A.dom.all(el),
                i;

            for(i = 0 ; i < arr.length; i++) {
                arr[i].style[style] = val;
            }
        },
        get: function(el, style) {
            return A.dom.one(el).style[style];
        }
    };
}, {requires: ['dom-module']});