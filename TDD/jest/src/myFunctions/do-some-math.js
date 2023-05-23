function sum(num1=0, num2=0){
	return num1 + num2;
};

function subdtract(num1=0, num2=0){
	return num1 - num2;
};

function multiply(num1=0, num2=0){
	return parseFloat((num1 * num2).toFixed(3));
};

function divide(num1=0, num2=0){
	if (num2 !== 0) return num1/num2;
	else throw new Error('0으로 나눌 수 없습니다.')
};

export {sum, subdtract, multiply, divide}