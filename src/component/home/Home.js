import React, { useEffect } from 'react';
import {
    withRouter
  } from "react-router-dom";
import { withAutorization } from '../../utils/Autorization.js';

const Home = props => {

    console.log(props)

    useEffect(() => {
        if(!props.userName){
            props.history.push("/sign")
        }
    }, [props.userName, props.history]);

    return(

    <h1>Bienvenue sur le site {props.userName}</h1>
    );
}

export default withRouter(withAutorization(Home));