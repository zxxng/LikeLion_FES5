// 04-2 반복문
// 4
let output = ''
const size = 5

for (let i=0; i<=size*2-1; i++) {
	for (let j=1; j<=i*2-1; j+=2) {
		output[i] = output[i].repeat('*' * j)
		output[i].push('\n')
	}
}
console.log(output)

// 05-1 함수
// 확인문제 1
function rrhq(a,b) {
	let res = 1
	for (let i=a; i<=b; i++) {
		res *= i
	}
	return res
}

// 확인문제 2
const max = function (...arr) {
	
}
