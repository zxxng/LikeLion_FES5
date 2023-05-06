let start = Date.now();

const result = (x) => {
	console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
}

const blocking = () => {
	let i = 0;
	while (i < 9999999) {
		i++;
	}
	return "blocking finished"
}

const asyncBlocking = () => {
	return new Promise ((resolve, reject) => {
		let i = 0;
		while (i < 9999999) {
			i++;
		}
		resolve("blocking finished");
	});
}

result('동기식 코드1');
result(blocking());
// result(asyncBlocking());
result(asyncBlocking().then((txt) => {
	result(txt);
}));
result('동기식 코드2');