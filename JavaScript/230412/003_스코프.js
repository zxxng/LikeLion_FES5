{
	let x = 10
	const y = 20
}

console.log(x, y)

// 지역변수와 스코프
x = 100 // 블록 밖에서 선언시 전역 접근 가능
function 함수(){
	let y = 20  // 블록 안에 변수 선언시 밖에서 접근 불가능 = 지역변수
	console.log(x) // 스코프 체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라간다. -> 전역(window)까지 올라갔는데도 변수가 없다면 에러발생)
}

함수()

// 1
x = 10
function 함수1() {
	let x = 20
	function 함수2() {
		function 함수3() {
			console.log(x)
		}
	}
}

함수1()

// 2
let x = 10
function 함수1() {
	let x = 20
	function 함수2() {
		function 함수3() {
			let x = 30
			console.log(x)
		}
		함수3()
	}
	함수2()
}

함수1()

// 3
x = 10
function 함수1() {
	let x = 20
	function 함수2() {
		function 함수3() {
			console.log(x) // 20
		}
		함수3()
	}
	함수2()
}

함수1()
console.log(x) // 10

// 함수의 호이스팅(함수나 변수를 끌어올려 주는 것)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행 됩니다.
함수(10)

function 함수(x) {
    return x + 100
}

// error가 생깁니다.
함수(10)

let 함수 = x => x + 100

// error가 생깁니다.
함수(10)

const 함수 = function (x) {
    return x + 100
}