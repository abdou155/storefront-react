import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState } from 'react'
import { productQuery } from './product.gql'
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const getAllProducts = async () => {
    const data = await axios({
        url: 'http://localhost/magento2/graphql',
        method: 'POST',
        data: productQuery
    }).catch((err) => {
        console.log('Error message', err);
    })
    return data.data.data.products.items
}

function ProductList() {
    const [prodList, setprodList] = useState([])
    
    let array = []
    const addToCart = (product) => {
        let myData = localStorage.getItem('cart')
        //get old data from local storage
        array.push(product) 
        localStorage.setItem('cart' ,JSON.stringify(array))
        
    }

    useEffect(() => {
        getAllProducts().then((data) => {
            setprodList(data)
        })
    }, [])


    return (
        <>
            <List>
                {prodList.map((product) => (
                    <ListItem key={product.sku}>
                        <ListItemText primary={product.name} secondary={product.sku} />
                        <Box m={3}>
                            <Typography variant="body2">{product.price_range.minimum_price.regular_price.value} USD</Typography>
                        </Box>
                        <Button variant="contained" size="small" onClick={()=> addToCart(product)}> Add to cart</Button>     
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ProductList
