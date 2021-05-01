import axios from 'axios'
import { mygraph } from './auth.gql'

export const UseAuth = async (props) => {
    try{
        const res = await axios({
            url: 'http://localhost/magento2/graphql',
            method: 'POST',
            data: mygraph(props)
        })
        const data = res.data.data.createCustomer
        if(data != null ){
            return data.customer
        }else{
            return res.data.errors
        }
    }catch(err){
        console.log('Error message' ,err);
    }    
}

export default UseAuth

