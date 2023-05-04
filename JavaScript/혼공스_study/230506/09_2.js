// Rectangle 클래스 
class Rectangle {
	constructor (width, height) {
		this.width = width
		this.height = height
	}

	getPerimeter () {
		return 2 * (this.width + this.height)
	}

	getArea () {
		return this.width * this.height
	}
}

const rectangle = new Rectangle(10,20)
console.log(`사각형의 둘레 : ${rectangle.getPerimeter()}`)
console.log(`사각형의 넓이 : ${rectangle.getArea()}`)

// Square 클래스 추가하기
class Square {
	#length

	constructor (length) {
		if (length <= 0) {
			throw '길이는 0보다 커야 합니다.'
		}
		this.#length = length
	}

	getPerimeter() {
		return 4 * this.#length
	}

	getArea() {
		return this.#length * this.#length
	}
}

const square = new Square(10)
// square.#length = -10
console.log(`정사각형의 둘레 : ${square.getPerimeter()}`)
console.log(`정사각형의 넓이 : ${square.getArea()}`)


// 사각형 클래스와 정사각형 클래스
class Square2 extends Rectangle {
	constructor (length) {
		super(length, length)
	}
}

const square2 = new Square(10)
console.log(`정사각형의 둘레 : ${square2.getPerimeter()}`)
console.log(`정사각형의 넓이 : ${square2.getArea()}`)


// 연습문제 6
class Parent {
	test () {
		console.log("Parent.test() 메소드")
	}
}

class ChildA extends Parent {
	test () {
		super.test()
		console.log("ChildA.test 메소드")
	}
}

class ChildB extends Parent {
	test() {
		console.log("ChildB.test() 메소드")
		super.test()
	}
}

new ChildA.test()
new ChildB.test()