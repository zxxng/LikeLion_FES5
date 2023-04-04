const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.filter(function(el) {
	return el % 2 === 0
})

function solution(n) {
	return Array(n)
		.fill()
		.map((_, i) => i + 1)
		.filter((v) => v % 2 === 0)
		.reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el) {
	return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter((v)=>!['a','e','i','o','u'].includes(v))

// reduce(function, initialValue)
const arr3 = [1, 2, 3, 4, 5]
arr3. reduce((a, c) => a + c, 0)

const arr4 = []
arr4.reduce((a, c) => a + c)

const arr5 = [1]
arr5.reduce((a, c) => a + c)

// 0을 항상 넣는것을 권장. 견고한 코드.
const arr6 = []
arr6.reduce((a, c) => a + c, 0)

// min, max도 있는데 sum이 없다.

// includes - 반환값 : true, false
const arr7 = ['hello', 'world', 'jaeyyoo']
arr7.includes('world')

const arr8 = ['hello', 'world', 'jaeyyoo']
arr8.includes('u__jaeng')

const arr9 = ['hello', 'world', 'jaeyyoo']
arr9.includes('yeong')

// join
const arr10 = ['hello', 'world', 'jaeyyoo']
arr10.join('!')

const arr11 = ['010', '5044', '2903']
arr11.join('-')

// const arr12 = [010, 5044, 2903]
// arr11.join('-') // '8-5044-2903' 잘못된 반환값. 

// 0b100 // b는 바이너리의 첫글자 - 2진법
// 0o100 // o는 옥타의 첫글자
// 0x100 // x는 헥사를 표현 - 16진법