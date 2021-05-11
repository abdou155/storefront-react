import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import FormAdress from '../../components/FormAdress';


function GetUserAdress() {

    const currentUser = useSelector(state => state.currentUser)


    return (
        <>
            <List>
                {currentUser.user.addresses.map((product) => (
                    <ListItem display="block" className='li' component="span" key={product.firstname}>
                        <Box p={3} border={1} borderColor="primary.main">
                           <FormAdress info={currentUser.user.addresses} />
                        </Box>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GetUserAdress
