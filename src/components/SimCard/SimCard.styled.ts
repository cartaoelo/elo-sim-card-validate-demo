import styled from 'styled-components'

const SimCardStyled = styled.div`
	padding: 60px 70px 50px;
	background-color: #fff;
	border-radius: 35px 35px 15px 15px;
	width: 450px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	animation: 1s ease-out 1 slideFromBottom;

	h1 {
		font-size: 30px;
		text-align: center;
		margin-bottom: 55px;
	}

	@media only screen and (max-width: 768px) {
		width: 80%;
	}

	@keyframes slideFromBottom {
		0% {
			opacity: 0;
			transform: translateY(10%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`

export default SimCardStyled
