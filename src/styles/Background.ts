import styled from 'styled-components'

const BackgroundContainerStyled = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
	min-width: 100vw;
	min-height: 100vh;
	background: linear-gradient(15deg, rgba(0, 150, 219, 0.8), rgba(0, 0, 255, 0) 70.71%),
		linear-gradient(160deg, rgba(150, 20, 20, 0.8), rgba(255, 0, 0, 0) 70.71%),
		linear-gradient(300deg, rgba(255, 190, 0, 0.8), rgba(0, 255, 0, 0) 70.71%);
	img {
		position: absolute;
		top: 50px;
		left: 50px;
		height: 50px;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Poppins', sans-serif;
	}

	@media only screen and (max-width: 960px) {
		justify-content: center;
		padding: 20px;
		img {
			display: none;
		}
	}
`

export default BackgroundContainerStyled
