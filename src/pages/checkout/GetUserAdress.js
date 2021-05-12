import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Box, FormControlLabel, Grid } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import FormAdress from '../../components/FormAdress';
import Checkbox from '@material-ui/core/Checkbox';



function GetUserAdress() {

    const currentUser = useSelector(state => state.currentUser)


    return (
        <>
            <List>
                {currentUser.user.addresses.map((product) => (
                    <ListItem display="block" className='li' component="span" key={product.firstname}>
                        <Box p={2} border={1} >
                            <FormAdress info={currentUser.user.addresses} />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    size={50}
                                    inputProps={{ 'aria-label': 'checkbox with small size' }}
                                />
                            }
                                label="Choisir cette adresse pour la livraison"
                            />
                        </Box>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GetUserAdress
