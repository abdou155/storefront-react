import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { setLogout } from '../stores/auth/auth.action';
import Avatar from '@material-ui/core/Avatar';
import Cart from './Cart'
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));



const Header = () => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const onLogout = () => {    
    currentUser.token=''
    currentUser.isLogged = false
    currentUser.user = {}
    dispatch(setLogout(currentUser))
  }


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button component={Link} to={`/`} color="inherit">StoreFront</Button>
          </Typography>
          <Cart/>
          {currentUser.isLogged ? (<div>
            <Button color="inherit"><Avatar variant="square" >AB</Avatar></Button>
            <Button onClick={onLogout} color="inherit">Logout</Button>
          </div>) : (<div>
            <Button component={Link} to={`/login/`} color="inherit">Login</Button>
            <Button component={Link} to={`/register/`} color="inherit">Register</Button>
          </div>)}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
