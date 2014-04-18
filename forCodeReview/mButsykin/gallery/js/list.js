SandBox.add('list-module', function(A) {
    var List = function() {
        this.head = null;
    };

    List.prototype = {
        add: function(val) {
            var listItem = {
                data: val,
                prev: null,
                next: null
            };

            if(this.head === null) {
                this.head = listItem;
                this.head.prev = this.head;
            }
            else {
                this.head.next = listItem;
                listItem.prev = this.head;
                this.head = listItem;
                this.head.next = listItem;
            }
        },

        get: function(val) {
            function tmp(listItem) {
                if(listItem.data === val){
                    return listItem;
                }
                if(listItem.prev === null)
                    return false;
                return tmp(listItem.prev);
            }

            return tmp(this.head);
        }
    };

    A.List = List;
}, {requires: ['']});