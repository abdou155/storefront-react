import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector, useDispatch } from 'react-redux'
import { setRegistred , getUser , setRegistredFailed, setRegistredSuccess , setLoginSuccess} from '../../stores/auth/auth.action'
import { mygraph } from './auth.gql'
import axios from 'axios';
import {TokenGraph} from './token.gql'
import { getUserInfo } from './userInfo.utils'
import {createCustomerCart } from '../../stores/cart/cart.action'
import { getUserCart } from '../cart/CustomerCart';

import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles();

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const [loading, setloading] = useState(false)
  const [errors, setErrors] = useState(false)


  const handleFnameChange = (e) => {
    currentUser.user.firstname = e.target.value
  }
  const handleLnameChange = (e) => {
    currentUser.user.lastname = e.target.value
  }
  const handleEmailChange = (e) => {
    currentUser.user.email = e.target.value
  }
  const handlePasswordChange = (e) => {
    currentUser.user.password = e.target.value
  }

  const Register = (userState) => {
    //USER_REGISTER
    dispatch(setRegistred(userState))
    axios({
      url: 'http://localhost/magento2/graphql',
      method: 'POST',
      data: mygraph(currentUser.user)
    }).then((result)=>{
      //USER_REGISTER_ERROR
      if(result.data.errors){
        dispatch(setRegistredFailed(result.data.errors))
        setErrors(true)
      }else{
      //USER_REGISTER_SUCCESS
        dispatch(setRegistredSuccess(currentUser))
        setErrors(false)
        axios({
            url: 'http://localhost/magento2/graphql',
            method: 'POST',
            data: TokenGraph(currentUser.user)
        }).then((token)=>{
          //USER_LOGIN_SUCCESS
          const accesToken = token.data.data.generateCustomerToken.token
          dispatch(setLoginSuccess(accesToken))
          getUserInfo(accesToken).then((data)=> {
            dispatch(getUser(data))  
          })
          getUserCart(accesToken).then((data)=>{
            dispatch(createCustomerCart(data))
          })
          props.history.push('/')
        })
      }
      setloading(false)
    })
  }




  const onSubmitForm = (e) => { 
    e.preventDefault()
    setloading(true)
    Register(currentUser)
  }

  return (
    <Container component="main" maxWidth="xs">
      <br />
      {loading === true ? (<div><LinearProgress /></div>) : (<div></div>)}

      {errors ? (<div><Alert severity="error">{currentUser.errors[0].message}</Alert></div>) : (<div></div>)}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleFnameChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleLnameChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleEmailChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePasswordChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to={`/login/`} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}