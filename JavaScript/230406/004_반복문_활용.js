for (let i=0; i<10; i++) {
	console.log(10)
}

let arr = [10, 20, 30, 40, 50]
for (let i=0; i<arr.length; i++) {
	console.log(arr[i])
}

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50]
let obj1 = {'one': 10, 'two': 20}
for (const i in arr1) {
	console.log(arr1[i]) // index를 가져온다?!
}

for (const i in obj1) {
	console.log(obj1[i]) // key를 가져온다?!
}

let s1 = 0;
for (const i in '.'.repeat(10)) {
	s1 += parseInt(i)
}
console.log(s1)

// airbnb 컨벤션에 권장
// IE에서도 사용 불가
// 개발자의 행복을 위해 익스프로러를 버리자 => 이렇게 해야만 사용할 수 있다.
let arr2 = [10, 20, 30, 40, 50]
let obj2 = {'one': 10, 'two': 20}
for (const item of arr2){
	console.log(item)
}

let s2 = 0
for (const item of arr2){
	s2 += item
}
console.log(s2)

for (const item of obj2) { 
	console.log(item)
}
// error - obj2 is not iterable
// of 뒤에 iterable한 값이 나와야 한다.

// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
	console.log(10);
} // error

{
	const x = 10
	console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
	console.log(i)
}

for (const i of [1, 2, 3]) {
	console.log(i)
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
	console.log(s[i], s[i+1]) // 마지막 값을 확인해보세요.
	console.log(s[i+1] - s[i]) 
}

for (let i = 0; i < s.length-1; i++) {
	console.log(s[i], s[i+1]) // 마지막 값을 확인해보세요.
	console.log(s[i+1] - s[i])
}

for (let i = 1; i < s.length; i++) {
	console.log(s[i-1], s[i]) // 마지막 값을 확인해보세요.
	console.log(s[i] - s[i-1]) 
}

// 위보다 깔끔한 코드가 나오진 않습니다.
let s = [1, 3, 4, 8, 13, 17, 20]
for (const i in s) {
    console.log(parseInt(i))
    console.log(s[i], s[parseInt(i) + 1])
}

// 문제1
// 다음 수학 점수의 반평균을 구하세요.
mathScore = [10, 99, 89, 70]

let sum = 0;
for (let i of mathScore) {
	sum += i;
}
console.log(sum / mathScore.length)

// 문제2
// 다음 user의 나이 평균을 구하세요.
let user = [
	{
		"_id": "642e3071c61a23c70ae6076b",
		"index": 0,
		"age": 31,
		"name": "Hicks Garza",
		"gender": "male",
	},
	{
		"_id": "642e3071ecd6f90a87d64731",
		"index": 1,
		"age": 32,
		"name": "Ayers Harrington",
		"gender": "male",
	},
	{
		"_id": "642e3071cef9ddc131f047fb",
		"index": 2,
		"age": 39,
		"name": "Lamb Adams",
		"gender": "male",
	}
]

let sum2 = 0;
for (let i of user) {
	sum2 += i['age'];
}
console.log((sum2 / user.length).toFixed(2))


////
let hap = 0
for (const i of user) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(hap) // 마지막에 102
    console.log('----------')
    hap += i.age ?? 0 // 값이 없으면 undefined가 아닌 0을 하겠다. 
}
console.log((hap / user.length).toFixed(2))

////
hap = 0;
for (const i of user.map((v, i) => v.age)) {
	if (!!i) {
		s += i
	}
}
console.log((hap / user.length).toFixed(2))

////
!true // false
!false // true
!!10 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false

///// 외우세요 /////
// 메서드 체이닝 사용시 가독성이 좋다.
// 성능면에서는 for와 if 보다 성능면에서 좋지는 않다.
user
	.map(v => v.age)
	.filter(v => !!v)
	.reduce((a, b) => a + b, 0)