const foo1 = (x, y) => x+y;
// 매개변수가 하나면 () 생략 가능
// 함수가 바로 리턴을 한다면 {} 생략 가능

function foo2() {
	console.log("arrow function");
}

// foo1(3,4);
console.log(foo1(3,4));
foo2();