import React, { useState, useRef } from 'react';
import {
  withRouter
} from "react-router-dom";
import { withAutorization } from '../../utils/Autorization.js';
const Sign = props => {
    
    console.log(props)
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const refFct = useRef(props.toLogin);
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
        console.log(name, value, email, pass)
    }
    
    const handleSubmit = () => {
        console.log(email, pass)
        props.toLogin()    
        // attention le this est undefined
//        props.history.push("/")
        
    }
    
    
    return(
        <div>
            <input type="text" name="email" onChange={handleChange}/>
            <input type="password" name="pass" onChange={handleChange}/>
            <button onClick={handleSubmit}>Envoyer</button>
        </div>

    );
}

export default withRouter(withAutorization(Sign));