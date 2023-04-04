// 함수

// 1. 재사용성이 높아집니다.
function one(){
	console.log('hello')
	console.log('hello')
	console.log('hello')
	console.log('hello')
	console.log('hello')
	console.log('hello')
	console.log('hello')
}
one()
one()
one()
one()
one()

// 2. 유지보수가 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 3. 구조 파악이 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 함수의 일반적인 형태
// 함수선언문
// 파선아실 - (a,b : 파라미터 선언!), (7,3 : 아규먼트 실사용!)  
function one(a, b) { // 1
	let z = a + b // 2
	return z ** 2 // 3
}
console.log(one(7, 3))
console.log(one(7, 3))


// 화살표 함수
const two = (a, b) => (a + b)**2
console.log(two(7, 3))
console.log(two(7, 3))

// 이름 없이 선언하는 함수
// 함수 표현식
const three = function(a, b) {
	let z = a + b
	return z ** 2
}
console.log(three(7,3))
console.log(three(7,3))

// 콜백함수 - c언어 함수포인터와 개념이 비슷
function four(a, b, c) {
	let z = c(a, b) + c(a, b)
	return z * 2
}
console.log(four(7, 3, one))

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a, b, c) {
	let z = one(a, b) + one(a, b)
	return z * 2
}



// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// 💡 return, console.log 구분!

function hello(para) {
		console.log(para)
		console.log('hello')
		return 100
}
console.log(hello(10)) // 10 hello 100

let x = console.log('hello')
x // undefined

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수입니다.
let x1 = console.log
x1('hello')

// 2번 (3개는 모두 같은 코드)
function hello1(){
	console.log('hello')
}
function hello2(){
	console.log('hello')
	return
}
function hello3() {
	console.log('hello')
	return undefined
}

// return 을 만나면 중간에 종료된다.
function hello4() {
	console.log('hello')
	console.log('hello')
	console.log('hello')
	return
	console.log('hello')
	console.log('hello')
	console.log('hello')
}

hello4() // 3번만 실행됨

const x2 = [10, 20, 30, 40]
x2.forEach(function(el) {
	console.log(el)
	return
	console.log('world')
})

/////////////////////////////

function 함수1(a, b, c) {
	return a + b + c
}

함수1(10, 20, 30, 40) // error가 발생하지 않습니다.
함수1(10, 20) // error 가 발생하지 않습니다.

function 함수2(a=10, b=20, c=30) {
	return a + b + c
}
함수2(a=1, c=1) // a, b에 대입된다

// 아래와 같은 식별 이슈가 있을 경우 object로 넘긴다. roro기법
function runPython(user, time, code, lv){
}
runPython('jaeyyoo', 100, 'function...', 3)

function runPython(user, time, code, lv){
}
runPython({
	user: 'jaeyyoo',
	time: 100,
	code: 'function...',
	lv: 3
})

// 기본값 설정
function runPython({
	user='',
	time=0,
	code='',
	lv=0}){
}

//////////////////////////

// 화살표 함수의 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
	return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시실행함수
(function() {
	console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();

// function 함수() {} 생략 후 실행