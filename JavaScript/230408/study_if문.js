// 확인 문제
// 2번
const a = parseInt(prompt('first',''))
const b = parseInt(prompt('second',''))

if (a > b){
    alert('a big')
} else if (a === b) {
    alert ('same')
} else  {
    alert('b big')
}

// 3번 &&

//4번
const a4 = Number(prompt('숫자를 입력해주세요. ', ''))

if (a4 > 0) {
	alert ('양수입니다.')
} else if (a4 === 0) {
	alert ('0 입니다.')
} else {
	alert ('음수입니다.')
}

// 5번
const a5 = Number(prompt('숫자를 입력하세요. ', ''))

if (a5 % 2 == 0) {
	alert ('짝수입니다.')
} else {
	alert ('홀수입니다.')
}

// 6번
const a6 = Number(prompt('월을 입력해주세요.', ''))

if (a6 === 12 || a6 <= 3) {
	alert ('겨울입니다.')
} else if (a6 <= 6) {
	alert ('봄입니다.')
} else if (a6 <= 9) {
	alert ('여름입니다.')
} else {
	alert ('가을입니다.')
}
