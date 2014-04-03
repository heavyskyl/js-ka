SandBox.modules = {};

function SandBox() {
    // преобразовать аргументы в массив
    var args = Array.prototype.slice.call(arguments),
    // последний аргумент - функция обратного вызова
        callback = args.pop(),
    // имена модулей могут передаваться в форме массива
    // или в виде отдельных параметров
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    // проверить, была ли функция вызвана
    // как конструктор
    if (!(this instanceof SandBox)) {
        return new SandBox(modules, callback);
    }

    // добавить модули в базовый объект 'this'
    // отсутствие аргументов с именами модулей или аргумент со значением "*"
    // предполагает необходимость включения "всех модулей"
    if (!modules[0] || modules[0] === '*') {
        modules = [];
        for (i in SandBox.modules) {
            if (SandBox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    // инициализировать необходимые модули
    for (i = 0; i < modules.length; i += 1) {
        SandBox.modules[modules[i]](this);
    }
    // вызвать функцию обратного вызова
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