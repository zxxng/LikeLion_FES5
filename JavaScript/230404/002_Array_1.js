// Array *****

const arr = [10, 20, 30]
arr[0] = 100 // const는 값의 변화가 안된다고 하지 않았냐?
// arr1 = 100 // error
// arr1 = [10, 20, 30] // error
console.log(arr)
console.dir(arr) // 프러퍼티와 메서드 확인 가능

// 문자열 (String)
const s = 'hello world'
console.log(s[0])
s[0] = i // immutable

//arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을 찍어서 호출할 수 있습니다.
arr[1]
arr.length
arr['length']

// 두개가 같은 얘기 입니다.
arr.length = 10
arr[0] = 100

// 프로퍼티를 추가하는 것도 가능합니다.
arr['u_jaeng'] = 100
arr.jaeyyoo = 10000

// 배열의 특징
// let arr1 = [];
// let arr2 = [1, 2, 3];
// let arr3 = new Array(4, 5, 6);
// let arr4 = new Array(3);
// Array(100).fill(0); 

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 합니다. 배열 안에 값을 원소(elements)라고 합니다.
const arr1 = [10, 20, 30]
arr1[0] = 100

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

arr2[0] // [1, 2, 3]
arr2[1] // [4, 5, 6]
arr2[2] // [7, 8, 9]
arr2[1][2] // 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10, 20, 30] // 벡터
const c = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
] // 매트릭스
const d = [
	[[1, 2], [1, 2], [1, 2]],
	[[1, 2], [1, 2], [1, 2]],
	[[1, 2], [1, 2], [1, 2]]
] // 텐서 (3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.

// arr.push() : Array에 값을 추가한다.
// push: 배열의 뒤에 값을 추가한다.
const arr3 = [1, 2, 3]
arr3.push(4)

// arr.pop() : 마지막에서 값을 꺼내고 그 값을 리턴한다.
// pop: 배열의 마지막 값을 꺼내고, 그 값을 리턴한다.
const arr4 = [1, 2, 3, 4, 5]
let lastValue = arr.pop()

// arr.unshift() : 첫번째에 값을 추가한다.
// unshift: 배열의 앞에 값을 추가한다.
const arr5 = ["사과", "바나나", "수박"];
arr5.unshift("오이", "배");
console.log(arr5); // ['오이', '배', '사과', '바나나', '수박']

// arr.shift() : 첫번째 값을 꺼내고 그 값을 리턴한다.
// shift: 배열의 첫번째 값을 꺼내고, 그 값을 리턴한다.
const arr6 = ['apple', 'banana', 'melon']
let firstValue = arr6.shift();
console.log(arr6) // ['banana', 'melon']
console.log(firstValue) // apple

// arr.splice(start, delaeteCount, items)
const arr7 = [1, 2, 3]
arr7.splice(1, 0, 4)

const arr8 = [1, 2, 3]
arr8.splice(1, 0, [10, 20, 30])

const arr9 = [1, 2, 3]
arr9.splice(1, 0, ...[10, 20, 30])

const arr10 = [1, 2, 3]
arr10.splice(1, 0, 10, 20, 30)

arr11 = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 1, 2, 3, 50]
arr11.splice(1, 0, ...x)
arr11.splice(6, 1, ...x)

// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.

const arr12 = [1, 2, 3, 4, 5]
arr12.splice(2, 2)
// 2번째 인덱스부터 2개를 삭제

const arr13 = [1, 2, 3, 4, 5]
arr13.splice(2)
// 2번째 인덱스 이후부터 모두 삭제

// arr.slice(start, end)
const myArray = ["apple", "banana", "cherry", "durian", "elderberry"]
console.log(myArray.slice(1, 4))
console.log(myArray)
myArray.slice(1)
myArray.slice(0, 100)

//////////////////////

const arr14 = [1,2,3,4,5]
// arr.forEach(함수)
// 함수(callback) : (value: number, index: number, array: number[])
arr14.forEach(function(item, index){
	console.log(item)
})

arr14.forEach(function(item, index){
	console.log(index, item)
	console.log('hello')
	console.log('world')
})

arr14.forEach(function(item, index, arr14){
	console.log(index, item, arr14)
	console.log('hello')
	console.log('world')
})

// 실무에서 사용하는 코드는 아닙니다.
const arr15 = Array(100).fill(0)
const arr16 = []

arr15.forEach(function(item, index){
	arr16.push(index)
})

// same code1 (이름이 없는 함수)
arr15.forEach(function(item, index){
	arr16.push(index+1)
})

// same code2 (화살표 함수)
arr15.forEach((item, index) => {
	arr2.push(index+1)
})

// same code3 (중괄호를 생략한 화살표 함수): 주로 이렇게 실무에서 사용한다.
arr15.forEach((item, index) => arr2.push(index+1))

// same code4 (이름이 있는 함수): 이렇게는 사용하지 않는다.
function jaeyyoo(item, index) {
	arr16.push(index + 1)
}
arr16.jaeyyoo()

// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

// map : 데이터를 뽑기 위해 사용한다. 새로운 배열이 생성됨
// (면접 질문에서도 많이 나온다. - 데이터와 노트북을 주며 뽑아보라고?)
const arr17 = [1, 2, 3]
arr17.map(function(x){
	return x ** 2
})
arr17.map(x => x ** 2)

// map을 활용해서 1~100 배열 만들기
const arr18 = Array(100).fill(0)

// same code1
arr18.map((v, i) => i + 1)

// same code2
arr18.map(function(v, i){
	return i + 1
})

// same code3
function jaeyyoo2(v, i){
	return i + 1
}
arr18.jaeyyoo2()

// same code4
arr18.map((v, i) => {
    return i + 1
})



//////////////////////////////////////////////////
// 실무 팁
// 마지막 값 꺼내기
let tip1 = [1, 2, 3, 4, 5]
console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을때
console.log([...tip1].pop())
let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2)

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]
console.log([...tip3, 1000, ...tip4])

const tip5 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

const tip6 = [
	[[1, 2], [1, 2], [1, 2]],
	[[1, 2], [1, 2], [1, 2]],
	[[1, 2], [1, 2], [1, 2]]
]

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip4)
Math.max(...tip5.flat())
Math.max(...tip6.flat(2))
Math.max(...tip6.flat(Infinity)) // 다 펼치면 스톱

// 0 으로 채워진 10개의 요소가 들어간 배열 만들기
const tip7 = new Array(10).fill(0)
// tip7 = Array(10).fill(0)

// 문자열 배열로 만들기
const tip8 = Array.from('hello world')

// 빈 배열 만들기 repeat & split - 권하진 않습니다.
// '.'.repeat(100).split('.')

let tip9 = [1, 2, 3, 4, 5]
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)])

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)
console.log(tip10)

// map하고 다시 오겠습니다.
const tip11 = Array(100).fill(0).map((v, i)=> i + 1)

const tip12 = [
  {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
  },
  {
    "_id": "642ba398d0fed6e17f2f50c9",
    "index": 1,
    "age": 37,
    "eyeColor": "green",
    "name": "Kidd Roman",
    "gender": "male",
    "company": "AUSTECH"
  },
  {
    "_id": "642ba39827d809511d00dd8d",
    "index": 2,
    "age": 39,
    "eyeColor": "brown",
    "name": "Best Ratliff",
    "gender": "male",
    "company": "PRISMATIC"
  }
]

// askup

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
	return item.age
});
console.log(ages)