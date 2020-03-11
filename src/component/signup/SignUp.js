import React, { useState } from 'react';
import {
  withRouter,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const SignUp = props => {

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
    
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const handleChange = e => {
        
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        switch(name){
            case 'email':
                setEmail(value)
                break;
            case 'pass':
                setPass(value)
                break;
            default:
                break;
        }
    }
    
    const handleSubmit = () => {

        alert(email, pass)
        if(email && pass){
            props.history.push("/sign")
        }
        
    }
    
    
    return(

        <Grid container justify="center" alignItems="center" className={style.mb}>
            <Grid item xs={12} className={style.center}> 
                <TextField label="email"  name="email" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} className={style.center}> 
                <TextField label="password" name="pass" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} className={style.center}> 
                <Button variant="contained" color="secondary" onClick={() =>handleSubmit()}>
                    SignUp
                </Button>
            </Grid>
            <Grid item xs={12} className={style.center}> 
                <Link to={"/sign"}>Se connecter</Link> 
            </Grid>
        </Grid>

    );
}

export default withRouter((SignUp));