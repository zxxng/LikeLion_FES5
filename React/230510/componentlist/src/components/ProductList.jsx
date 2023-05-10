import React from 'react'
import { useState } from 'react'

export default function ProductList() {
	const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ])

	// const itemList = [];

	// productList.forEach((item, idx) => {
	// 	itemList.push(<h1>{`${idx} ${item.title}`}</h1>)
	// 	itemList.push(<p>{`${item.price} 원`}</p>)
	// })

	// React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다.
	function handClick(id) {
		// setDatas(
		// 	datas.filter((item) => {
		// 		// 클릭한 id와 item의 id가 같지 않은 것들만 반환 하겠다. -> 클릭한 것 제외
		// 		return id !==item.id
		// 	})
		// );

		// 함수형 업데이트 표현. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장합니다. 떄문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔)을 비교하여 처리할 수 있습니다.
		setDatas((prevDatas) => {
			return prevDatas.filter((item) => {
				return id !==item.id
			})
		});
	}

	return (
		<div>
			{datas.map((item, idx) => {
				return (
					<li key={item.id}>
						<h2>{idx + 1} {item.title}</h2>
						<span>{item.price}원</span>
						{/* <button onClick={(event) => {event.target.closest('li').remove()}}>삭제</button> */}
						<button onClick={()=> {handClick(item.id)}}>삭제</button>
					</li>)
			})}
		</div>
	)
}
