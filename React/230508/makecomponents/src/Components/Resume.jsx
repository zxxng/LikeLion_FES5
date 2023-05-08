import React from 'react'

export default function Resume(props) {
	return (
		<div style={{border:"solid 1px", width:"500px"}}>
			<h2>{props.name}</h2>
			<strong>{props.hello}</strong>
			<dl>
				<dt>취미 : </dt>
				<dd>{props.hobby}</dd>
				<dt>좋아하는 음식 : </dt>
				<dd>{props.food}</dd>
				<dt>좋아하는 색 : </dt>
				<dd style={{color:props.color}}>{props.color}</dd>
			</dl>
		</div>
	)
}
