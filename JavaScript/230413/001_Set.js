// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다.

let s1 = new Set('aabbbccccdd') // 중복을 제거하는구나
s1.size

회사게시판 = ['이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '김연하', '김연하', '최흥석', '이나영']
let 게시자 = new Set(회사게시판)

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
	console.log(i, 회사게시판.filter(e => e === i))
}

for (const i of 게시자) {
	console.log(i, 회사게시판.filter(e => e === i).length)
}

// 이 풀이는 매우 어렵습니다. 초급자 분들에게 권장하지 않습니다.
let map1 = new Map()
for (const i of 회사게시판) {
	map1.set(i, (map1.get(i) || 0) + 1)
}

// 1번째 순회 i에 '이호준'
map1.set(i, (map1.get(i) || 0) + 1)

let map2 = new Map()
map2.get('이호준') // undefined

map2.set('이호준', 1) // 최종

// 2번째 순회 i에 '이호준'
map2.set(i, (map2.get(i) || 0) + 1)

map2.set('이호준', 2) // 최종


/// set 연습 /// 

let s2 = new Set('aabbbccccdd')
s2.size
s2.has('a')
s2.has('f')
s2.add('z')
s2

for (const i of s2) {
	console.log(i)
}

let s3 = new Set('aabbbccccdd'.split(''))
let s4 = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd'])

// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e))

// 합집합
let union1 = new Set([...a].concat(...b))
let union2 = new Set([...a, ...b])

// 차집합
let diff = [...a].filter(e => !b.has(e))


// 6. 정수연 — 오늘 오전 9:49
// set, map, object, array, string가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// set, map, array, string

// 순서를 보장하나요? (object는 순서를 보장하지 않습니다.)
// set, map, array, string
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90

// 교집합의 갯수 구하는 문제
function solution(s1, s2) {
	return s1.length + s2.length - new Set([...s1],[...s2]).size;
}

function solution(s1, s2) {
	let set_s1 = new Set(s1);
	let set_s2 = new Set(s2);
	
	return [...set_s1].filter(e => set_s2.has(e)).length;
}

// 369게임