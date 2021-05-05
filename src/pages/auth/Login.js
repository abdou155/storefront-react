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
import { Link as RouterLink } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector, useDispatch } from 'react-redux'
import Alert from '@material-ui/lab/Alert';
import { setLogin, setLoginFailed, setLoginSuccess } from '../../stores/auth/auth.action';
import axios from 'axios'
import { TokenGraph } from './token.gql'

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login(props) {
  const classes = useStyles();

  const currentUser = useSelector(state => state.currentUser)
  const [loading, setloading] = useState(false)
  const [errors, setErrors] = useState(false)
  const dispatch = useDispatch()

  const handleEmailChange = (e) => {
    currentUser.user.email = e.target.value
  }
  const handlePasswordChange = (e) => {
    currentUser.user.password = e.target.value
  }


  const Login = (userState) => {
    //USER_LOGIN
    dispatch(setLogin(userState))
    axios({
      url: 'http://localhost/magento2/graphql',
      method: 'POST',
      data: TokenGraph(currentUser.user)
    }).then((token) => {
      //USER_LOGIN_ERROR
      if (token.data.errors) {
        dispatch(setLoginFailed(token.data.errors))
        setErrors(true)
      } else {
      //USER_LOGIN_SUCCESS
        const accesToken = token.data.data.generateCustomerToken.token
        dispatch(setLoginSuccess(accesToken))
        setErrors(false)
        props.history.push('/')
      }
      setloading(false)
    })
  }


  const onSubmitForm = (e) => {
    e.preventDefault()
    setloading(true)
    Login(currentUser)
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <TextField
            onChange={handleEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handlePasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to={`/register/`} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}