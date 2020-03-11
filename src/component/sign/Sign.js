import React, { useState } from 'react';
import {
  withRouter,
  Link
} from "react-router-dom";
import { withAutorization } from '../../utils/Autorization.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { compose } from 'recompose'

const Sign = props => {
   
    const useStyles = makeStyles( () => createStyles({
        center: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.33em"
        },
        mb:{
            marginTop: "2em"
        }

      }));
      const style = useStyles();

    const [identifiant, setIdentifiant] = useState(null);
    const [pass, setPass] = useState(null);

    const handleChange = e => {
        
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        switch(name){
            case 'identifiant':
                setIdentifiant(value)
                break;
            case 'pass':
                setPass(value)
                break;
            default:
                break;
        }
    }
     
    
    const handleSubmit = logout =>{
        if(!logout){
            // je me connnecte
            if((identifiant === "bru" || identifiant === "bru@gmail.com") && pass === "pass"){
                props.toLogin()
                props.setUserName(identifiant)
                props.history.push("/")
            }else{
                alert("Un intru")
            }
        }else{
            // je me deconnecte
            props.toLogin()
            props.setUserName(null)
        }

        
    }
    
    
    return(

        <Grid container justify="center" alignItems="center" className={style.mb}>
        { props.isLogged ?
            <Grid item xs={12} className={style.center}>
                <Button variant="contained" color="primary" onClick={() => handleSubmit(true)}>
                    Log Out
                </Button>
            </Grid>
            :
            <div>
                <Grid item xs={12} className={style.center}> 
                    <TextField label="username ou email"  name="identifiant" onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} className={style.center}> 
                    <TextField label="password"  name="pass" type="password" onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} className={style.center}> 
                    <Button variant="contained" color="primary" onClick={() =>handleSubmit(false)}>
                        s'identifier
                    </Button>
                </Grid>
            </div>
        } 
            <Grid item xs={12} className={style.center}> 
                <Link to={"/signup"}>Créer un compte</Link> 
            </Grid>
        </Grid>

    );
}

export default compose(withRouter, withAutorization)(Sign)
