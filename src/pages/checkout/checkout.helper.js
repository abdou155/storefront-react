import axios from "axios";
import { setShippingAddressesOnCart, setAdressBook } from './checkout.query'

const url = 'http://localhost/magento2/graphql'


export const setShippingAdress = async (adress, token, cartID) => {
    const res = await axios({
        url: url,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        data: setShippingAddressesOnCart(adress, cartID)
    }).catch((err) => {
        throw err;
    })
    return res.data.data.setShippingAddressesOnCart.cart
}


export const createCustomerAdress = async (adress, token) => {
    const res = await axios({
        url: url,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        data: setAdressBook(adress)
    }).catch((err) => {
        throw err;
    })
    // console.log('adressbook saved' , res);
    return res.data.data.createCustomerAddress
}

export const setShippingMethod = async () => {

}


