import React from 'react';

export class Autorization extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                isLogged: false,
                toLogin: () => {this.setState({isLogged: !this.state.isLogged})},
                userName: null,
                setUserName: username => {this.setState({userName: username})},
                nbr_article: 0,
                setNbr_article: () => {this.setState({nbr_article: this.state.nbr_article+1})}
            }
        }    

    render(){
        return(
            <AutorizationContext.Provider value={this.state}>
                {this.props.children}
            </AutorizationContext.Provider>
        )
    }
}

export const auth = new Autorization()//<Autorization/>

export const AutorizationContext = React.createContext(null)


export const withAutorization = Component => {
    const NewComponent = props => {
        return(
            <AutorizationContext.Consumer>
                { value => <Component {... value} {... props}/>}
            </AutorizationContext.Consumer>
        )
    }
    return NewComponent
}
