SandBox.modules = {};

function SandBox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    if (!(this instanceof SandBox)) {
        return new SandBox(modules, callback);
    }

    if (!modules[0] || modules[0] === '*') {
        modules = [];
        for (i in SandBox.modules) {
            if (SandBox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    for (i = 0; i < modules.length; i += 1) {
        SandBox.modules[modules[i]](this);
    }
    callback(this);
}


SandBox.add = function() {
    var args = Array.prototype.slice.call(arguments),
        config = args.pop() || {},
        requires = config.requires || [],
        callback = args.pop(),
        module = args;

    if (!requires[0] || requires[0] === '*') {
        requires = [];
        for (var i in SandBox.modules) {
            if (SandBox.modules.hasOwnProperty(i)) {
                    requires.push(i);
            }
        }
    }

    SandBox.modules[module] = function() {
        for (var i = 0; i < requires.length; i += 1) {
            SandBox.modules[requires[i]](arguments[0]);
        }

        callback(arguments[0]);
    };
};