import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// set hammerjs event 
    useEffect(() => {
        console.log("Mount")

    });
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// send a request to delete the ressouce in BDD
    const handleSubmit = () => {
        const self = document.getElementById(props.id)
        self.style.backgroundColor = "green";
        props.setNbr_article()
        // props.
        // add item
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
                    <Button variant="contained" color="secondary" className={style.el} onClick={handleSubmit}>
                        Acheter
                    </Button>
                </Grid>
            </Grid>
        </div>
        
    </Grid>
    )
}

export default compose(withAutorization)(Item);