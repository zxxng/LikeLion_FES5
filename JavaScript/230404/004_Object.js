const human = {
	name: 'jaeyyoo',
	age: 25,
	from: 'korea',
	askingHim: function(){
		console.log('hello world!')
	},
	0: '01050446632'
}

console.log(human.name)
console.log(human.age)
console.log(human['name'])
console.log(human['age'])
// human.0 error // 그래서 Array.1 이 안된다.
human['0'] // '01050446632'
human[0] // '01050446632'

const arr = {
	0: 10,
	1: 20,
	2: 30,
	length: 3
}
// 유사배열객체
// 같은 요소로 만들어도 arr가 순회할 때 더 빠르다.
arr[0]
arr[1]
arr[2]
arr[3]

arr.push(4) // error - 배열이 아니기 때문에


const human2 = {
	name: 'jaeyyoo',
	age: 25,
	from: 'korea',
	askingHim: function(){
		console.log('hello world!')
	},
	0: '01050446632'
}

human2.name = 'jun'
human2.name
human2.askingHim()

// 다른 언어와 동작방식이 달라 주의해주세요.
console.log('age' in human2); // true
// console.log(20 in [10, 20, 30, 40])
// console.log('length' in [10, 20, 30, 40])

const aespa = {
	members: ['카리나', '윈터', '지젤', '닝닝'],
	from: '광야',
	sing: function(){
		return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
	}
};

// 별표(**)
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

// 별표(**)
// 다른 언어는 aespa.keys()와 같은 방식으로 사용합니다.
console.log(Object.keys(aespa)) // 불편한 코드입니다.
console.log(Object.values(aespa)) // 불편한 코드입니다.