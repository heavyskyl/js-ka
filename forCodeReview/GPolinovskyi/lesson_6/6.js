/*

1. Написать функцию которая вызывает сама себя 5 раз с таймаутом 1, 2, 3, 4, 5 секунд
2. Написать функцию которая раз в 100 мс выводит в консоль случайное число от 5 до 20.

*/

/* 1 */

for(var i = 1; i < 6; i++){
	setTimeout( function selfCall() {
		console.log('go');
	}, i*1000)
}

/* Not working :((( */

	


/* 2 */

function rand(){
	console.log(Math.random()*15 + 5)
	/*
		setInterval(rand, 100);
	*/
}
