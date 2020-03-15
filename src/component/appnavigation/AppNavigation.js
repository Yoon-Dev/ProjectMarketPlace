import React, { useEffect, useState } from 'react';
import './AppNavigation.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { compose } from 'recompose'
import {
    Link
  } from "react-router-dom";
import { withAutorization } from '../../utils/Autorization';
const AppNavigation = props => {

    const useStyles = makeStyles( () => createStyles({
        el:{
          position: 'fixed',
          top: '0',
          right: '0',
          left: '0'
        },
        bg: {
          backgroundColor: "#ffffffde"
        }
      }));
    const style = useStyles();

    const [value, setValue] = useState(props.isLogged ? 0 : 1);
    useEffect(() => {
      const self = document.querySelector('#navbar')
      self.style.height = `${self.offsetHeight}px`
      setValue(props.isLogged ? 0 : 1)
    }, [props.isLogged]);
    return(
        <div className={`${style.el} appnavigation`} id="navbar">
            <BottomNavigation className={style.bg} showLabels value={value} onChange={(event, newValue) => {
              setValue(newValue)
            }}>
                <BottomNavigationAction data-testclass="icon-navbar" data-testid="homelink" component={Link} to="/" icon={<HomeIcon fontSize={"large"}/>} />
                <BottomNavigationAction data-testclass="icon-navbar" data-testid="signlink" component={Link} to="/sign" icon={<AccountCircleIcon fontSize={"large"}/>} />
                { props.isLogged ? 
                <BottomNavigationAction data-testclass="icon-navbar" data-testid="cartlink"  component={Link} to="/shopping-cart" label={props.nbr_article} icon={<ShoppingCartIcon fontSize={"large"}/>} />
                : null
                }
            </BottomNavigation>
        </div>
    )
}

export default compose(withAutorization)(AppNavigation);