import axios from 'axios'
import {mygraph} from './category.gql'

const categoryService = async() => {
    const data = await axios({
        url : 'http://localhost/magento2/graphql',
        method : 'POST',
        data : mygraph
    }).catch((err)=>{
        console.log('Error message' ,err);
    })
    return(data.data.data.categories.items)
}

export default categoryService
 

