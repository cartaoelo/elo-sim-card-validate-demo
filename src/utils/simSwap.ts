export function tagTranslate(tag: string) {
	switch (tag) {
		case 'A':
			return 'menos de 1 dia'
			break
		case 'B':
			return 'troca de 1 a 3 dias'
			break
		case 'C':
			return 'troca de 3 a 5 dias'
			break
		case 'D':
			return 'troca de 5 a 10 dias'
			break
		case 'E':
			return 'troca de 10 a 15 dias'
			break
		case 'F':
			return 'troca de 15 a 30 dias'
			break
		case 'G':
			return 'troca de 30 a 45 dias'
			break
		case 'H':
			return 'troca de 45 a 90 dias'
			break
		case 'X':
			return 'operadora/número não monitorado'
			break
		case 'Z':
			return 'acima de 90 dias'
			break

		default:
			return 'desconhecido'
			break
	}
}
