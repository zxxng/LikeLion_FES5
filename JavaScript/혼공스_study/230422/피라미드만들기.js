// 피라미드 만들기 (1)
// *
// **
// ***
// ****

let num = 5;
let output = '';
for (let i=1; i<num; i++) {
	for(let j=0; j<i; j++) {
		output += '*'
	}
	// console.log(tmp);
	output += '\n';
}

// 피라미드 만들기 (2)
//    *
//   ***
//  *****
// *******

let output2 = '';
for (let i=1; i<num; i++) {
	for (let j=num; j>i; j--) {
		output2 += ' ';
	}
	for (let k=0; k<2*i-1; k++){
		output2 += '*'
	}
	output2 += '\n';
}

// 마름모 만들기
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

