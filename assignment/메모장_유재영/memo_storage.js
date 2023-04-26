let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];

const Editor = toastui.Editor;

const editor = new Editor({
	el: document.querySelector("#editor"),
	height: "600px",
	initialEditType: "markdown",
	previewStyle: "vertical",
});

render();

// 메모장 내용을 로컬스토리지에 저장하는 함수
function saveNote() {
	const title = document.getElementById("title").value;
	const content = editor.getHTML();
	// 메모 생성 시간 추가
	const date = new Date();
	const makeTime = date.toLocaleString('ko-KR')

	allMemo.push({ title, makeTime, content, len: allMemo.length });

	localStorage.setItem("allMemo", JSON.stringify(allMemo));
	render();
}

// 로컬스토리지에 저장된 메모를 표시하는 함수 + 정렬까지
function render() {
	const display = document.getElementById("display");
	display.innerHTML = "";

	// // 최신 게시물이 위로 올라오도록
	// for (let i = allMemo.length; i > 0 ; i--) {
	//   // 아래와 유사 코드
	// }

	for (const item of allMemo) {
		const saveId = document.createElement("p");
		const saveTitle = document.createElement("h2");
		const saveTime = document.createElement("p");
		const saveContent = document.createElement("div");
		const modifyMemoBtn = document.createElement("button");
		const deleteMemoBtn = document.createElement("button");


		saveId.textContent = "No."+ (item.len + 1);
		saveTime.innerHTML = item.makeTime;
		saveTitle.textContent = item.title;
		saveContent.innerHTML = item.content;
		modifyMemoBtn.textContent = "수정";
		modifyMemoBtn.setAttribute("id", item.len);
		modifyMemoBtn.setAttribute("onclick", "update()");
		deleteMemoBtn.textContent = "삭제";
		deleteMemoBtn.setAttribute("id", item.len);
		deleteMemoBtn.setAttribute("onclick", "remove()");

		display.appendChild(saveId);
		display.appendChild(saveTime);
		display.appendChild(saveTitle);
		display.appendChild(saveContent);
		display.appendChild(modifyMemoBtn);
		display.appendChild(deleteMemoBtn);
	}
}

// 메모장 삭제
function remove() {
	const idx = allMemo.find(
		(item) => item.len == event.srcElement.id
	);
	if (idx) {
		allMemo.splice(
			allMemo.findIndex((item) => item.len == idx.len),
			1
		);
	}
	localStorage.setItem("allMemo", JSON.stringify(allMemo));
	render();
}

// 메모장 수정 - 에디터에 내용을 입력하고 수정을 누르면 반영
function update() {
	const idx = allMemo.find(
		(item) => item.len == event.srcElement.id
	);
	if (idx) {
		const title = document.getElementById("title");
		const content = editor.getHTML();

		// 메모 수정 시간 추가
		const date = new Date();
		const modifyTime = date.toLocaleString('ko-KR');

		allMemo.splice(
			allMemo.findIndex((item) => item.len == idx.len),
			1,
			{ title: title.value, makeTime: idx.makeTime, modifyTime: modifyTime, content: content, len: idx.len }
		);
	}
	localStorage.setItem("allMemo", JSON.stringify(allMemo));
	render();
}