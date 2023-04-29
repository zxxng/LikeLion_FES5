// 8-2 

// 3번.
try {
	console.log('try 구문입니다.')
	const array = ['사과','바나나','귤']
	array.forEach(() => {
			throw '예외를 강제로 발생시킵니다'
	})
} catch (e) {
	console.log('catch 구문입니다.')
} finally {
	console.log('finally 구문입니다.')
}

// try 구문입니다.
// catch 구문입니다.
// finally 구문입니다.