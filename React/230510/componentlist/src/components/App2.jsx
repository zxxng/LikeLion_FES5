import React, { useState } from 'react';
import Detail from './detail';
import Question from './question';
import Review from './review';

const ContentsContainer = ({listName}) => {
	if (listName === 'detail') {
		return <Detail />;
	} else if (listName === 'qa') {
		return <Question />;
	} else if (listName === 'review') {
		return <Review />;
	}
};

function NavBar() {
	const [listName, setListName] = useState('detail');
	const checkId = (e) => {
		setListName(e.target.id)
	}

	return (
		<>
			<nav>
				<li
					id = 'detail'
					style = {
						listName === "detail" ? {color:'red'}:{dolor:'black'}
					}
					onClick={checkId}
				>
					상세정보
				</li>
				<li
					id = 'qa'
					style = {
						listName === "qa" ? {color:'red'}:{dolor:'black'}
					}
					onClick={checkId}
				>
					Q&A
				</li>
				<li
					id = 'review'
					style = {
						listName === "review" ? {color:'red'}:{dolor:'black'}
					}
					onClick={checkId}
				>
					Review
				</li>
				<ContentsContainer listName={listName} />
			</nav>
		</>
	)
}

export default NavBar;