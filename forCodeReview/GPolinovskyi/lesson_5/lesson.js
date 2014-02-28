for(var i = 0; i < 10; i++) (function(i) {{
    var el = creatrElement();
    
    el.onclick = function() {
        alert(i);
    }
})(i); /* Пример Замыкания */

var id = setTimeout(something, 1000); /* Задать таймаут выполнения */
clearTimeout(id); /* отменить выполнение */
var id = setInterval(function() {
	alert('hello');
} , 1000); /* Запускать функцию бесконечно, с интервалом */

clearInterval /* Очистка интервала */ 