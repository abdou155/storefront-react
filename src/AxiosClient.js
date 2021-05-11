import axios from "axios";

export const axiosClient = async (query) => {
    const result = await axios({
        url: 'http://localhost/magento2/graphql',
        method: 'POST',
        data: query
    }).catch((err) => {
       return('Error message', err);
    })
    return result
}