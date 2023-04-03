// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이 필요합니다.
// 폴리필 - 최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것

let firstName = null
let lastName = null
let nickName = 'licat'

// 앞의 값이 null 이면 뒤 반환
console.log(firstName ?? nickName) // licat
console.log(firstName ?? lastName ?? nickName) // licat
nickName = null
console.log(firstName ?? lastName ?? nickName ?? '익명사용자') // '익명사용자'

let a = null
let b = 10
let c = null
console.log(a ?? b ?? c)

// 단락회로평가와 nullish 연산자 차이점
let height1 = 0
console.log(height1 || 100) // 100
console.log(height1 ?? 100) // 0

let height2
console.log(height2 || 100) // 100
console.log(height2 ?? 100) // 100

let height3 = ''
console.log(height3 || 100) // 100
console.log(height3 ?? 100) // ''