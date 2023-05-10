import React from 'react'
import { useState } from 'react'


export default function Count() {
	const [cnt, setCnt] = useState(0);

	function increment() {
		setCnt(cnt + 1);
		setCnt((prevCnt) => prevCnt + 1);
	}
	function decrement() {
		setCnt(cnt - 1);
	}
	return (
		<div>
			<h1>Counter: {cnt}</h1>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	)
}
