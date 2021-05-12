import React , { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AddressForm from './AddressForm'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Paper } from '@material-ui/core';
import { setShipMethod } from '../../stores/checkout/checkout.action'
import GetUserAdress from './GetUserAdress';

function FirstStep(props) {
        const currentUser = useSelector(state => state.currentUser)
        let content = <div></div>
        const [adForm, setadForm] = useState({})
    
        //User must logged in ***********************************************************
        if (currentUser.user.addresses.length === 0) {
            content = <AddressForm getInfo={ adForm => {
                setadForm(adForm) 
            }
            }/>
        } else {
            content = <GetUserAdress/>
        }

        // const dispatch = useDispatch()

        // const [value, setValue] = React.useState('reservation');

        // const handleChange = (event) => {
        //     setValue(event.target.value);
        //     dispatch(setShipMethod(event.target.value))
        //     setadForm(()=> {
        //         return {
        //             ...adForm, 
        //             shipMethod : value
        //         }
        //     })


        //     return props.Info(adForm)
        // };



        return (
            <React.Fragment>
                <Box mt={3} p={2}>
                    {
                        content
                    }
                </Box>
               {/*  <Box p={3}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" >Mehode de Livraison</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="reservation" control={<Radio />} label="Réservation en bouique" />
                            <FormControlLabel value="aramex" control={<Radio />} label="Aramex" />
                        </RadioGroup>
                    </FormControl>
                </Box> */}
            </React.Fragment>
        )
    }

export default FirstStep
