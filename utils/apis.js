import axios from "axios"

const cgcApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})

const etherApi = axios.create({
    baseURL: 'https://api.etherscan.io/api',
})


export { etherApi, cgcApi }

