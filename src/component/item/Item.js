import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import './Item.css'
import { compose } from 'recompose'
import { withAutorization } from '../../utils/Autorization';

const Item = props => {

    
    const useStyles = makeStyles( () => createStyles({
        center: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.33em"
        },
        mb:{
            marginTop: "2em"
        },
        el: {
            textAlign: "center"
        },
        img: {
            maxWidth: "100%"
        }

      }));
    const style = useStyles();

    const [purchased, setPurchased] = useState(props.determinePurchased(props.id));
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
      useEffect(() => {
        const self = document.getElementById(props.id)
          if(purchased){
            self.firstChild.style.background = "url('https://media.giphy.com/media/l0OXXpl20sY9G0uJy/source.gif')";
          }
      }, [purchased, props.id]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// send a request to delete the ressouce in BDD
    const handleSubmit = () => {
        const self = document.getElementById(props.id)
        if(purchased){
            // remove
            // props.setPurchased_article(props.id)
            props.removePurchased_article(props.tab_purchased_article.indexOf(props.id))
            props.setNbr_article(props.nbr_article -1)
            self.firstChild.style.background = "white";
        }else{
            props.setPurchased_article(props.id)
            props.setNbr_article(props.nbr_article + 1)
            self.firstChild.style.background = "url('https://media.giphy.com/media/l0OXXpl20sY9G0uJy/source.gif')";
        }
        setPurchased(!purchased)
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
    return(
    <Grid id={props.id} className={style.center} item xs={6}>
        <div className="card">
            <Grid container justify="center" alignItems="center" className={style.mb}>
                <Grid item xs={12} className={style.center}> 
                    <h4 className={style.el}>{props.nom}</h4> 
                </Grid>
                <Grid item xs={12} className={style.center}> 
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/46/IMG_Academy_Logo.jpg" alt="product" className={style.img}/>
                </Grid>
                <Grid item xs={12} className={style.center}> 
                    <Button variant="contained" color={ purchased ? "secondary" : "primary" } startIcon={ purchased ? <DeleteIcon /> : <AddCircleIcon/>}className={style.el} onClick={handleSubmit}>
                        { purchased ? "Enlever du panier" : "Acheter" }
                    </Button>
                </Grid>
            </Grid>
        </div>
        
    </Grid>
    )
}

export default compose(withAutorization)(Item);