export const LOGIN_SALT = `
	mutation createLoginSalt($username: String!) {
		createLoginSalt(input: { username: $username }) {
			username
			salt
		}
	}
`

export const LOGIN = `
  mutation login($username: String!, $challenge: String!) {
    login(input: {username: $username, challenge: $challenge}) {
      accessToken
      oauthToken {
        accessToken
        refreshToken
      }
    }
  }
`

export const SOCIAL_LOGIN = `
  mutation socialNetworkOAuthLogin($provider: String!, $username: String!, $accessToken: String!) {
    socialNetworkOAuthLogin(input:{
      provider: $provider,
      username: $username,
      accessToken: $accessToken
    })
    {
      accessToken
    }
  }
`
