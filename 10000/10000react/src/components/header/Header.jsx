import './Header.css'
import React from 'react'
import title from '../../images/title.png'
import subTitle from '../../images/txt_subtitle.png'

export default function Header() {
	return (
		<header className="header-law">
			<h1 className="tit-law">
				<img className="img-tit" src={title} alt="1만시간의법칙" />
			</h1>
			<img className="img-txt" src={subTitle} alt="연습은 어제의 당신보다 당신을 더 낫게 만든다." />
			<p className="txt-desc">
				<strong className="tit-desc">1만 시간의 법칙</strong>은<br />
				어떤 분야의 전문가가 되기 위해서는<br />
				최소한 1만 시간의 훈련이 필요하다는 법칙이다
			</p>
		</header>
	)
}
