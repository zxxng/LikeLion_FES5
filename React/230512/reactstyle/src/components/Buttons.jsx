import styled, { css } from 'styled-components'

const BtnOne = styled.button`
  background-color: royalblue;
	color: white;
	border: solid 3px black;
	padding: 10px 15px;
`;

const BtnRadius = css`
	border: none;
	border-radius: 15px;
	font-weight: bold;
	box-shadow: 0 0 2px 2px rgba(0,0,0, 0.3);
`
const BtnTwo = styled(BtnOne)`
	${BtnRadius}
	color: black;
	`;

const BtnThree = styled(BtnOne)`
	${BtnRadius}
	background-color: lime;
`

export { BtnOne, BtnRadius, BtnTwo, BtnThree}
