// 1-1
// let q1 = [10, 20, 30, 10, 20, 30, 40, 10]
let sum1 = 0
for (let i=0; i<q1.length; i++){
    sum1 += q1[i]
}
console.log(sum1 / q1.length)

// 1-2
let q1 = [10, 20, 30, 10, 20, 30, 40, 10]
let sum1_2 = 0
const ft = (a, b) => ((a-b) **2)
for (let i of q1){
	sum1_2 += ft(i, sum1/q1.length)
}
console.log(sum1_2 /q1.length)

// 2
let str = '5, 4, 10, 2, 5'
str = str.split(', ')
let sum2 = 0
for (let i of str) {
	sum2 += parseInt(i)
}
console.log(sum2 / str.length)

// 3
let num = [11, 22, 33, 111, 2]
num = num.join('')
let sum3 = 0
for (let i in num) {
	sum3 += parseInt(num[i])
}

// 4
// 반복문만 사용하여 숫자단위 콤마 찍기
let num2 = 1000000
num2 = String(num2)
let print = ''
for (let i=0; i<num2.length; i++){
	print += num2[i]
	if (i % 3 === 0 && !(i === num2.length-1)) {
		print += ','
	}
}


// 반복문만 사용하여 숫자단위 콤마 없애기


// 문자열 뒤깁기
let str2 = 'hello jaeyyoo'
let res2 =''
let i=str2.length;
while (i--){
	res2 += str2[i]
}

let str3 = 'hello jaeyyoo'
let res3 = ''
for (let i=0; i<str3.length; i++){
	res3 = str3[i] + res3
}