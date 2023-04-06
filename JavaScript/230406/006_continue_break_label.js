// break는 자신을 감싼 반복문만 탈출한다.
// 상위 반복문까지 탈출하지 않는다.
for (let i=2; i<10; i++){
	for (let j=1; j<10; j++){
		console.log(`${i} x ${j} = ${i*j}`)
		if (j === 3) {
			break
		}
	}
}

for (let i=2; i<10; i++){
	for (let j=1; j<10; j++){
		console.log(`${i} x ${j} = ${i*j}`)
	}
	if (i === 3) {
		break
	}
}

// contineu는 아래 구문을 실행시키지 않고 다음 루프로 넘어가서 구문을 실행
for (let i=2; i<10; i++){
	for (let j=1; j<10; j++){
		if(j===3) {
			console.log(`${i} x ${j} = ${i*j}`)
			continue
		}
	}
}