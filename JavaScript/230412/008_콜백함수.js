// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function min_x2(a, b) {
	console.log(a)
	z = b(...a) * 2
	return z
}

min_x2([10, 20, 11, 21, 19, 17], Math.min)

// (v, i) => v * 2 왜 콜백함수지?
let arr1 = [10, 20, 11, 21, 19, 17]
arr1.map((v, i)=> v * 2)

let arr2 = [10, 20, 11, 21, 19, 17]
function map_x2(v, i){
	return v * 2
}
arr2.map(map_x2)