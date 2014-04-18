SandBox.add('dom-module', function(A) {
    A.dom = {
        all: function(selector) {
            return document.querySelectorAll(selector);
        },
        one: function(selector) {
            return document.querySelectorAll(selector)[0];
        }
    };
}, {requires: ['']});