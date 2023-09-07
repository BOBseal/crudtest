const query =  `{
  ethereum(network: bsc) {
    address(address: {is: "0x1425844319d9a7a375c8f0d05c528948ca2fe3ce"}) {
      balances {
        currency {
          symbol
          address
        }
        value
      }
    }
  }
}
`

export { query }