// Methods
import axios from 'axios'
import { mygraph } from './auth.gql'
import { TokenGraph } from './token.gql'



export const signUpUser = async (props) => {
    try {
        const res = await axios({
            url: 'http://localhost/magento2/graphql',
            method: 'POST',
            data: mygraph(props)
        })
        return(res)
    } catch (err) {
        console.log('Error message', err);
    }
}

export const loginUser = async (props) => {
    try {
        const res = await axios({
            url: 'http://localhost/magento2/graphql',
            method: 'POST',
            data: TokenGraph(props)
        })
        return(res)
    } catch (err) {
        console.log('Error message', err);
    }
}