import axios from 'axios';
import { userInfo } from './userInfo.gql'

export const getUserInfo = async (token) => {
    const data = await axios({
      url: 'http://localhost/magento2/graphql',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: userInfo
    }).catch((err) => {
      console.log('Error message', err);
    })
    // return (data.data.data.categories.items)
    // console.log('userInfo', data.data.data.customer);
    return  data.data.data.customer     
  }