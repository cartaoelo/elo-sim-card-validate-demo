export const SERVER_KEYS = `
  query {
    serverPublicKey {
        key
    }
  }
`
export const SIM_SWAP = `
  query ($phone: String!) {
    simSwap(phone: $phone) {
      tag,
      swapMin,
      swapMax
    }
  }
`
