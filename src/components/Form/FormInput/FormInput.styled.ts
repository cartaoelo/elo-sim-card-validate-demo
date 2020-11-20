import MaskedInput from 'react-input-mask'
import styled from 'styled-components'

export const FormDivStyled = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 16px;
`

export const FormInputStyled = styled(MaskedInput)`
	width: 100%;
	font-size: 18px;
	color: #686868;
	display: block;
	background-color: #ededed;
	height: 50px;
	border-radius: 20px;
	padding: 0 30px 0 65px;
	transition: all 0.15s;

	&:focus {
		background-color: #fff;
		box-shadow: 0 0 7px rgba(0, 164, 223, 0.15);
		border: 1px solid #00a4df;
	}
`

export const FormInputIcon = styled.span`
	color: #999;
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	padding-left: 23px;
	padding-bottom: 13.5px;
	transition: all 0.4s;
`
