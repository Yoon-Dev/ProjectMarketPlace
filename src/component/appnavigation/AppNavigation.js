import React, { useEffect } from 'react';
import './AppNavigation.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { compose } from 'recompose'
import Button from '@material-ui/core/Button';

import {
    Link
  } from "react-router-dom";
import { withAutorization } from '../../utils/Autorization';
const AppNavigation = props => {

    const useStyles = makeStyles( () => createStyles({
        lock: {
            display: "none !important"
        },
        bg: {
          backgroundColor: "#ffffffde"
        }
      }));
    const style = useStyles();

    useEffect(() => {
      const self = document.querySelector('#navbar')
      self.style.height = `${self.offsetHeight}px`
    }, []);
    return(
        <div className={"appnavigation"} id="navbar">
            <BottomNavigation className={style.bg}>
                <BottomNavigationAction  component={Link} to="/" icon={<HomeIcon fontSize={"large"}/>} />
                <BottomNavigationAction data-testid="signlink" component={Link} to="/sign" icon={<AccountCircleIcon fontSize={"large"}/>} />
                { props.isLogged ? 
                <BottomNavigationAction data-testid="signlink" to="/sign" >} >
                  <Button variant="contained" color="secondary" >
                    {props.nbr_article}  
                  </Button>
                </BottomNavigationAction>
                : null
                }
            </BottomNavigation>
        </div>
    )
}

export default compose(withAutorization)(AppNavigation);