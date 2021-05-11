import React from 'react'
import Container from '@material-ui/core/Container';
import ProductList from './products/ProductList';



function Dashboard() {

       


        return (
            <Container maxWidth="md">
                <h1>Dashboard</h1>
                <ProductList/>
            </Container>
        )
    }



export default Dashboard
