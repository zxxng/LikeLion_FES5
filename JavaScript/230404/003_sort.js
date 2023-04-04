// sort
let avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());

let nums = [3, 1, 8, 6];
console.log(nums.sort());

let nums2 = [23, 5, 1000, 42];
console.log(nums2.sort()); // 'sort를 어느 알고리즘으로 할거냐?'는 브라우저의 자유

// 오름차순
const num1= [3, 1, 11, 8, 6]
console.log(num1.sort((a, b) => a - b))

// 내림차순
const num2 = [3, 1, 11, 8, 6]
console.log(num2.sort((a, b) => b - a))

// 실무사용코드
function sort(key){
	if (click){
		click = false
		var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
	}
	else{
		click = true
		var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
	}
}

// 딥하게 sort를 탐색해보겠다!?
const num3= [3, 1, 11, 8, 6]
console.log(num3.sort((a, b) => {
	console.log(a, b)
}))

