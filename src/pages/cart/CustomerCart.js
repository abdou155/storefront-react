import axios from "axios"
import {createCartQuery} from './cart.gql'

export const getUserCart = async (token) => {
    const data = await axios({
        url: 'http://localhost/magento2/graphql',
        method: 'POST',
        headers: {
            Authorization : 'Bearer '+token
        },
        data: createCartQuery
    }).catch((err) => {
       return('Error message', err);
    })
    console.log(data.data.data.customerCart);
    return data.data.data.customerCart
}