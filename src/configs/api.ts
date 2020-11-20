import { config } from 'dotenv'
import { encodeBase64 } from '../utils/base64'

config()

export const args = {
	client_id: '',
	secret: '',
	graphQLurl: 'https://hml-api.elo.com.br/graphql',
	authorization: '',
	google_id: ''
}
args.authorization = `Basic ${encodeBase64(`${args.client_id}:${args.secret}`)}`
