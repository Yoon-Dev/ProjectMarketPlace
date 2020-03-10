import React from 'react';

export const auth = {
    isLogged: false,
    toLogin: () => this.isLogged = true
}

export const AutorizationContext = React.createContext(null)


export const withAutorization = Component => {
    const NewComponent = () => {
        return(
            <AutorizationContext.Consumer>
                { value => <Component {... value}/>}
            </AutorizationContext.Consumer>
        )
    }
    return NewComponent
}
