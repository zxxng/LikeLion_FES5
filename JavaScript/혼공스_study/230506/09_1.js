// 객체와 배열 조합하기
const students = []
students.push({이름: '구름', 국어: 87, 영어: 98, 수학: 88, 과학:90})
students.push({이름: '별이', 국어: 87, 영어: 98, 수학: 88, 과학:90})
students.push({이름: '김치', 국어: 87, 영어: 98, 수학: 88, 과학:90})
students.push({이름: '진주', 국어: 87, 영어: 98, 수학: 88, 과학:90})

alert(JSON.stringify(students, null, 2))

// 객체 활용하기
let output = '이름\t총점\t평균\n'
for (const s of students) {
	const sum = s.국어 + s.영어 + s.수학 + s.과학
	const average = sum / 4
	output += `${s.이름}\t${sum}점\t${average}점\n`
}
console.log(output)

// 객체를 처리하는 함수
function getSumOf(student) {
	return student.국어 + student.영어 + student.수학 + student.과학
}

function getAverageOf (student) {
	return getSumOf(student) / 4
}

let output2 = '이름\t총점\t평균\n'
for (const s of students) {
	output2 += `${s.이름}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n`
}
console.log(output2)

// 객체를 처리하는 함수2
// 배열 내부의 객체 모두에 메소드 추가
for (const s of students) {
	s.getSum = function () {
		return this.국어 + this.영어 + this.수학 + this.과학
	}

	s.getAverage = function() {
		return this.getSum() / 4
	}
}

let output3 = '이름\t총점\t평균\n'
for (const s of students) {
	output3 += `${s.이름}\t${s.getSum()}점\t${s.getAverage()}점\n`
}
console.log(output3)

// 객체를 생성하는 함수
function createStudent(이름, 국어, 영어, 수학, 과학) {
	return {
		이름: 이름,
		국어: 국어,
		영어: 영어,
		수학: 수학,
		과학: 과학,

		getSum () {
			return this.국어 + this.영어 + this.수학 + this.과학
		},
		getAverage () {
			return this.getSum() / 4
		},
		toString () {
			return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
		}
	}
}

const st = []
st.push(createStudent('구름', 87, 98, 88, 90))
st.push(createStudent('별이', 87, 98, 88, 90))
st.push(createStudent('김치', 87, 98, 88, 90))
st.push(createStudent('진주', 87, 98, 88, 90))

let output4 = '이름\t총점\t평균\n'
for (const s of st) {
	output4 += s.toString()
}
console.log(output4)