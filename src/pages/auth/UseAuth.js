import React, { useEffect } from 'react'
import axios from 'axios'
import { mygraph } from './auth.gql'
import { TokenGraph } from './token.gql'
import { useSelector, useDispatch } from 'react-redux'
import { setRegistred, setRegistredFailed } from '../../stores/auth/auth.action'


const UseAuth = async (props) => {
    try {
        const res = await axios({
            url: 'http://localhost/magento2/graphql',
            method: 'POST',
            data: mygraph(props)
        })
        if ('data' in res.data) {
            // const info = res.data.data.createCustomer.customer
            // return info
            const token = await axios({
                url: 'http://localhost/magento2/graphql',
                method: 'POST',
                data: TokenGraph(props)
            })
            console.log('token' , token.data.data.generateCustomerToken.token);
            localStorage.setItem('accessToken',token.data.data.generateCustomerToken.token)
            return token
        }
        if ('errors' in res.data) {
            const errors = res.data.errors
            return errors
        }
    } catch (err) {
        console.log('Error message', err);
    }
}

export default UseAuth

