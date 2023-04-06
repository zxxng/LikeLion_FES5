// 반복문 미사용
const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = ''

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)

// for문 사용
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = ''
for (let i=0; i<cars2.length; i++) {
	text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}

for (let i=0; i<10; i++) { //++i 차이 없다.
	console.log(i)
}
console.log(i) // i는 반복문이 끝난 후 호출할 수 없다.

for (let i=0; i<10; i+=2) {
	console.log(i)
}

for (i=1; i<10; i+=2) { // let을 생략하면 전역이 된다.
	console.log(i)
}

for (;;) {
	// 무한반복 코드입니다.
	// 이런 코드는 작성도 하지 마세요
	// 의도한 무한반복은 매우 위험합니다.
	// 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체에 영향이 간다.
	console.log('실행하지 마세요.')
}

// 무한반복 코드가 필요한 이유? -> os
// 사용할 경우
// 1. 반복의 시간을 가능하면 설정
// 2. 탈출 조건을 명확히 설정

for (let i = 0; i < 10;) {
	console.log('실행하지 마세요.')
	i += 1
}

for (let i = 0;;) {
	console.log('실행하지 마세요.')
	i += 1
	if (i >= 10) {
			break
	}
}

for (;;) { //무한반복입니다.
	let i = 0
	console.log('실행하지 마세요.')
	i += 1
	if (i >= 10) {
			break
	}
}

let i = 0
for (;;) {
	console.log('실행하지 마세요.')
	i += 1
	if (i >= 10) {
			break
	}
}