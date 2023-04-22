// 05-2 함수 고급
// 1. filter
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]

numbers.filter(function (value) {return value % 2 === 1}) // [273, 25, 75, 103, 57]
				.filter(function (value) {return value < 101}) // [25, 75, 57]
				.filter(function (value) {return value % 5 === 0}) // [25, 75]
numbers.filter(e => (e%2===1)&&(e<=100)&&(e%5===0))
numbers.filter(e => {return (e%2===1)&&(e<=100)&&(e%5===0)})

// filter는 비파괴적 처리가 되기 때문에 numbers는 그대로 출력된다.

// 2. forEach
arr = ['사과', '배', '귤', '바나나']

console.log('# for in 반복문')
arr.forEach(function (value, index) {return index})
console.log('# for of 반복문')
arr.forEach(function (value) {return value})



// 06-1 객체의 기본
// 1. 객체 선언
const book = {
	name : '혼자 공부하는 파이썬',
	price : 18000,
	publisher : '한빛미디어'
}

// 2. 동적으로 속성 추가
객체[속성] = 값

// 3. 동적으로 속성 제거
delete 객체[속성]
delete 객체.속성



// 06-2. 객체의 속성과 메소드 사용하기
// 1. 기본자료형의 속성값 추가
// 1020:1 Uncaught TypeError: num.원 is not a function

// 2. 코드 실행결과 예측
// printLang("ko") : 한국어
// printLang("en") : 영어

// 3. 모질라.. 어쩌고..
// 라디안 단위...
// Math.sin()????

// 4. 객체들이 공유하는 모든 속성과 메소드를 추가할 때 사용하는 객체
prototype

// 5. Lodash 라이브러리.. 어쩌고..



// 06-3. 객체와 배열 고급
// 1. 전개연산자
// ...

// 2. 자바스크립트 라이브러리