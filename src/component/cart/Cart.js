import React, { useEffect, useState } from 'react';
import {
    withRouter
  } from "react-router-dom";
import { compose } from 'recompose'
import { withAutorization } from '../../utils/Autorization.js';
import Grid from '@material-ui/core/Grid';
import './Cart.css';
// component
import Item from '../item/Item'

const Cart = props => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        if(!props.userName){
            props.history.push("/sign")
        }else{
            if(2+2 === 4){
                fetch('https://apid2d.pierre-monier.com/src/RealSelect.php')
                .then(response => response.json())
                .then(data => {
                    
                    setItems(data => {
                        const data_filtered = data.filter(el => props.determinePurchased(el.id))
                        const items = data_filtered.map( item => 
                                <Item key={item.id} id={item.id} nom={item.nom}></Item> 
                        );
                        if(items.length === 0){
                            items.push(<img key="1" className="empty" data-testid="gif" src="https://media.giphy.com/media/6uGhT1O4sxpi8/source.gif" alt="empty"/>)
                        }
                        return items;
                    })

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
    return(
    <div data-testid="cartcomponent"> 
        <h1>{props.userName}, voici ce que vous avez acheté</h1>
        <Grid container justify="center" alignItems="center">
            { items ? items : "loading" }
        </Grid>     
    </div>
    );
}

export default compose(withRouter, withAutorization)(Cart);
