import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../stores/categories/category.action'
import categoryService from "./categoryService";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Category() {

  const listCategories = useSelector(state => state.listCategories)
  const [isLoadiong, setisLoadiong] = useState(true)
  const [isShown, setIsShown] = useState(false);
  const [children, setchildren] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    categoryService().then((data) => {
      dispatch(setCategory(data))
      setisLoadiong(false)
    })
  }, [])
//children state should fixed *******************************

  const LoadChildren = () => {
      setIsShown(true)
      setchildren(2)
      console.log('state', children);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center" spacing={5}>
              {listCategories.categories.map((el) => (
                <Button key={el.uid} onMouseEnter={LoadChildren} color="inherit">{el.name}</Button>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      { isLoadiong ? (<div><LinearProgress /></div>) : (<div></div>)}
      {
        isShown && (
          <AppBar position="static" color="default" onMouseLeave={()=>{setIsShown(false)}}>
          <Toolbar variant="dense">
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" spacing={5}>
               <div>CATGORY</div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        )
      }
    </div>
  );
}