let x = 0
while (x < 10){
	console.log(x)
	x += 1
}

/////
// why? 10까지 출력이 되는가?
x = 0
while (x < 10) {
    console.log(x)
    x += 1
}

x = 0
while (x < 10) {
    console.log(x)
    x += 1
    console.log('')
}

/////

let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

// 구구단
for (let i=2; i<10; i++) {
	for (let j=1; j<10; j++){
		console.log(`${i} x ${j} = ${i*j}`)
	}
}

let i = 1;
while (i++ < 9){
	let j = 0;
	while (j++ < 9){
		console.log(`${i} x ${j} = ${i*j}`)
	}
}

// 암기코드 2
let s = 'hello world'
let result = ''
for (let i=0; i<s.length; i++) {
	console.log(i)
	result = s[i] + result
}
console.log(result)

let s1 = 'hello world'
let result1 = ''
let cnt = s.length
while (cnt--){
	console.log(cnt)
	result1 += s1[cnt]
}

// 암기코드3
// 팩토리얼
let s3 = 1;
for (let i=0; i<6; i++){
	s *= i
}

let s4 = 1;
i = 1;
while (i < 6) {
	s4 *= i
	i += 1
}

console.log(s4)
