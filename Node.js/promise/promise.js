pending  대기상태
pulfilled 이행상태
rejected 실패상태

// resolve 성공했을때
function sayHello() {
	return new Promise((resolve, reject) => {
			const hello = "Hello Hello";
			resolve(hello);
		});
	}

sayHello()
	.then((resolvedData) => {
		console.log(resolvedData);
	})

		
// reject 실패했을때
function sayHello() {
	return new Promise((resolve, reject) => {
		reject(new Error());
	});
}

sayHello()
	.then((resolvedData) => {
		console.log(resolvedData);
		return resolvedData;
	}) .then((resolvedData) => {
		console.log(resolvedData);
	})
	.catch((error) => {
		console.log(error);
	});