import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../stores/cart/cart.action'
import { createCartQuery } from '../cart/cart.gql'
import { axiosClient } from '../../AxiosClient'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FirstStep from './FirstStep';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { setAdressForm } from '../../stores/checkout/checkout.action';



const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Adresse de livraison', 'Détails de payment ', "Résumer d'ordre"];



export default function Checkout() {

    /* const [shipInfo, setshipInfo] = useState({})
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch() */

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <FirstStep /* Info={shipInfo => setshipInfo(shipInfo)} */ />;
            case 1:
                return <PaymentForm />;
            case 2:
                return <Review />;
            default:
                throw new Error('Unknown step');
        }
    }
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    

    const handleNext = () => {
        /* setshipInfo(()=> {
            return {
                ...shipInfo
            }
        })
        // dispatch(setAdressForm(shipInfo))
        if (currentUser.user.addresses.length === 0 ){
            dispatch(setAdressForm(shipInfo))
        }else{
            dispatch(setAdressForm(currentUser.user.addresses[0]))
        } */
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
          </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Merci pour votre commande
                </Typography>
                                <Typography variant="subtitle1">
                                    Votre numéro de commande est "#0225133". Merci de verifier votre boite email pour
                                    confirmer votre commande
                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Passer la commande' : 'Suivant'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}