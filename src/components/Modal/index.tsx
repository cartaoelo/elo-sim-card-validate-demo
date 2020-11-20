// import React from 'react'
// const nada = () => {
// 	return <a>nada</a>
// }

// export default nada
import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { ADDCARD } from '../../constants/routes'
// import FormButtonStyled from '../Form/FormButton/FormButton.styled'
import {
	ModalClose,
	ModalContainerClose,
	ModalContentStyled,
	ModalStyled
} from './Modal.styled'

interface ModalProps {
	show: boolean
	modalText: string
}

const Modal = ({
	show,
	modalText,
	...rest
}: ModalProps & React.HTMLAttributes<HTMLSpanElement>) => {
	// const history = useHistory()
	return (
		<ModalStyled show={show}>
			<ModalContentStyled>
				<ModalContainerClose>
					<h2>Response da chamada da Elo Valida Sim Card API</h2>
					<ModalClose {...rest}>
						<box-icon name="x"></box-icon>
					</ModalClose>
				</ModalContainerClose>
				<pre>{modalText}</pre>
			</ModalContentStyled>
		</ModalStyled>
	)
}

export default Modal
