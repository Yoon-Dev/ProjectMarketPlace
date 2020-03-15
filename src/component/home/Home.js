import React, { useEffect, useState } from 'react';
import {
    withRouter
  } from "react-router-dom";
import { compose } from 'recompose'
import { withAutorization } from '../../utils/Autorization.js';
import Grid from '@material-ui/core/Grid';
// component
import Item from '../item/Item'

const Home = props => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        if(!props.userName){
            props.history.push("/sign")
        }else{
            if(2+2 === 4){
                fetch('https://apid2d.pierre-monier.com/src/OnlineSelect.php')
                .then(response => response.json())
                .then(json => {
                    setItems(createItems(json))
                })
                .catch(error => {
                    alert(error)
                })
            }

        }
    }, []);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// create item component
    const createItems = data => {
        const items = data.map( item => 
            <Item key={item.id} id={item.id} nom={item.nom} url={item.url} />  
        );
        return items;
    }
    return(
    <div data-testid="homecomponent">
        <h1 data-testid="title">Bienvenue {props.userName}, faite de bonne course</h1>
        <Grid container justify="center" alignItems="center">
            { items ? items : "loading" }
        </Grid>     
    </div>
    );
}

export default compose(withRouter, withAutorization)(Home);
