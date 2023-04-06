let answer = Math.floor(Math.random()*100)
// ~~(Math.random()*100)

let count = 0

for(;;){
	count += 1
	let userInput = parseInt(window.prompt('값을 입력해주세요!'))
	if (answer > userInput){
		window.alert('UP!')
	}
	else if(answer < userInput){
		window.alert('DOWN!')
	}
	else if (Number.isNaN(userInput)) {
		window.alert('다시 입력하세요!')
	}
	else {
		window.alert('Correct!')
		break
	}
}

console.log(`${count}번째 맞추셨습니다!`)