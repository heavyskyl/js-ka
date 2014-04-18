SandBox.add('handlers-module', function(A) {
    function Handler() {
        this.events = {};
    }

    Handler.prototype = {
        on: function(ev, callback) {
            if(!this.events[ev]) {
                this.events[ev] = {
                    callbacks: []
                }
            }
            this.events[ev].callbacks.push(callback);
        },
        eventStarted: function(ev) {
            var event = this.events[ev];

            if(!event){
                return ;
            }

            for(var i in event.callbacks) {
                if(event.callbacks.hasOwnProperty(i)) {
                    event.callbacks[i]();
                }
            }
        },
        once: function(ev, callback) {
            var that = this;

            if(!this.events[ev]) {
                this.events[ev] = {
                    callbacks: []
                }
            }

            function tmp() {
                callback();

                that.unbindOne(ev, tmp);
            }

            this.events[ev].callbacks.push(tmp);
        },
        unbindOne: function(ev, callback) {
            var event = this.events[ev];
            var callbacks = event.callbacks;

            var index = callbacks.indexOf(callback);

            if (index > -1) {
                var tmp = this.events[ev].callbacks[callbacks.length - 1];
                this.events[ev].callbacks[callbacks.length - 1] = this.events[ev].callbacks[index];
                this.events[ev].callbacks[index] = tmp;
                this.events[ev].callbacks.pop();
            }
        }
    };

    A.Handler = Handler;

}, {requires: ['dom-module']});