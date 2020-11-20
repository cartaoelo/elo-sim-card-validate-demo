import styled from 'styled-components'

const FormButtonStyled = styled.button`
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	width: 100%;
	height: 62px;
	border-radius: 100px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s;
	background-color: #00a4df;
	color: #fafafa;
	cursor: pointer;
	font-weight: 600;
	margin-top: 20px;

	&:hover {
		background-color: #00b1ed;
	}

	&:active {
		border: none !important;
		background-color: #333;
	}
`

export default FormButtonStyled
