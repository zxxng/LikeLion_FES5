class ColaGenerator {
	constructor() {
		this.itemList = document.querySelector('.section1 .cola-list');
	}

	async setup() {
		const response = await this.loadData();

		this.colaFactory(response);
	}

	async loadData() {
		// try-catch 
		try {
			const response = await fetch('./items.json');
			// 통신이 정상적인지 판단하는 ok
			if (response.ok) { // 서버의 응답 코드가 200 ~299 일 경우
				return response.json();
			} else {
				// response의 상태를 새로운 error로 만들고 catch에 던지기(throw)
				throw new Error(response.status);
			}
		} catch (error) {
			// 상태가 어떤지 에러 뿜기
			console.log(error);
		}
	}

	colaFactory(data) {
		const docFrag = document.createDocumentFragment();
		data.forEach((el) => {
			const item = document.createElement('li');
			const itemTemplate = `
			<button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
				<img class="cola-img" src="./img/${el.img}" alt="">
				<span class="cola-name">${el.name}</span>
				<strong class="cola-price">${el.cost}원</strong>
			</button>
			`;

			item.innerHTML = itemTemplate;
			docFrag.append(item);
		})
		this.itemList.append(docFrag);
	}
	
}

export default ColaGenerator;