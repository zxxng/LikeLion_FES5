// // 25-01
// let Person = (function() {
// 	// 생성자 함수
// 	function Person(name) {
// 		this.name = name;
// 	}
// 	// 프로토타입 메서드
// 	Person.prototype.sayHi = function() {
// 		console.log('Hi! My name is' + this.name);
// 	}
// 	return Person;
// })

// // 인스턴스 생성
// let me = new Person('Lee');
// me.sayHi();

// 25-04
class Person {
	// 생성자
	constructor(name) {
		this.name = name;
	}
	// 프로토타입 메서드
	sayHi() {
		console.log(`'Hi! My name is ${this.name}`);
	}
	// 정적 메서드
	static sayHello() {
		console.log('Hello!')
	}
}

const me = new Person('Lee');
// 인스터늣 프로퍼티 참조
console.log(me.name)
// 프로토타입 메서드 호출
me.sayHi();
// 정적 메서드 호출
Person.sayHello()

let Person = (function() {
	function Person(name) {
		this.name = name;
	}

	Person.prototype.sayHi = function() {
		console.log(`Hi! My name is ${this.name}`);
	}

	Person.sayHello = function() {
		console.log('Hello!');
	}
})

// 25-07
const Person = '';

{
	console.log(Person)
	class Person {}
}

// 정적메서드 프로토타입 메서드
class Square {
	static area(width, height) {
		return width * height;
	}
}

console.log(Square.area(10, 10)) //100