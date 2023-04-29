// 기존
const object = {a:1, b:2};

const a = object.a;
const b = object.b;

// console.log(a);
// console.log(b);

// 비구조화 할당
const obj = {a1:1, b1:2};

const {a1, b1} = obj;

console.log(a1);
console.log(b1);

const arr = [1, 2];
const [one, two] = arr;

console.log(one);
console.log(two);