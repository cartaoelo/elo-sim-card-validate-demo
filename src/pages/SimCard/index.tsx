import iziToast from 'izitoast'
import React, { useState, useReducer, useContext } from 'react'
import { useForm } from 'react-hook-form'
import FormButtonStyled from '../../components/Form/FormButton/FormButton.styled'
import FormInput from '../../components/Form/FormInput'
import FormStyled from '../../styles/Home/LoginForm.styled'
import Modal from '../../components/Modal'
import SimCardContainerStyled from '../../styles/SimCard/SimCardContainer.styled'

import { args } from '../../configs/api'
import { callAPI } from '../../services/graphQL/api'
import { SIM_SWAP } from '../../services/graphQL/Queries'
import AppContext from '../../store'
import callApiErrorHandler from '../../services/Error/callApiErrorHandler'
import BackgroundCenterContainerStyled from '../../styles/BackgroundCenter'
import { tagTranslate } from '../../utils/simSwap'

const { client_id } = args

const SimCard = () => {
	const { access_token } = useContext(AppContext)

	const { handleSubmit, register } = useForm({
		criteriaMode: 'all',
		mode: 'onSubmit',
		shouldFocusError: true,
		reValidateMode: 'onSubmit'
	})
	const [statePhone, setStatePhone] = useState({
		ended: false,
		buttonLoading: false,
		buttonText: ''
	})
	const [stateModal, setStateModal] = useState({
		modalShow: false,
		modalText: ''
	})

	const onSubmit = handleSubmit(async ({ phone }) => {
		if (phone === '') {
			return iziToast.error({
				title: 'Erro',
				message: 'Veja se você preencheu o campo!'
			})
		}

		if (phone === undefined) {
			return iziToast.error({
				title: 'Erro',
				message: `Erro desconhecido, recarregue a página e tente novamente.`
			})
		}

		const eloCall = await callAPI({
			query: SIM_SWAP,
			variables: { phone: phone.replace(/[-()\s]/g, '') },
			headers: {
				access_token
			},
			client_id
		})
		const eloRes = await eloCall.json()

		callApiErrorHandler({
			call: eloCall,
			res: eloRes,
			state: statePhone,
			setState: setStatePhone
		})
		if (eloRes.data !== null) {
			const { simSwap } = eloRes.data
			setStateModal({ modalShow: true, modalText: JSON.stringify(simSwap, null, 2) })
			return iziToast.success({
				title: 'Sucesso',
				message: `Última alteração: ${tagTranslate(simSwap.tag)}.`
			})
		}

		return ''
	})

	return (
		<BackgroundCenterContainerStyled>
			<SimCardContainerStyled>
				<h1>Elo Valida Sim Card</h1>
				<FormStyled onSubmit={onSubmit}>
					<FormInput
						boxIcons={{ name: 'phone', type: 'solid' }}
						name="phone"
						required
						mask="+99 (99) 99999-9999"
						ref={register({ required: true })}
					/>
					<FormButtonStyled type="submit" disabled={statePhone.ended}>
						Validar
					</FormButtonStyled>
				</FormStyled>
				<Modal
					onClick={() => setStateModal({ ...stateModal, modalShow: false })}
					show={stateModal.modalShow}
					modalText={stateModal.modalText}
				/>
			</SimCardContainerStyled>
		</BackgroundCenterContainerStyled>
	)
}

export default SimCard
