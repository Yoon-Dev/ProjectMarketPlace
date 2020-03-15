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
                setNbr_article: nbr => {this.setState({nbr_article: nbr})},
                tab_purchased_article: [],
                setPurchased_article: x => {this.state.tab_purchased_article.push(x)},
                removePurchased_article: x => {this.state.tab_purchased_article.splice(x, 1)},
                determinePurchased: id => {
                    let isPurchased = false
                    this.state.tab_purchased_article.forEach(el => {
                        if(id === el){               
                            isPurchased = true
                        }
                    })
                    return isPurchased;
                },
                users: [{username: 'bru', passwd: 'pass', email: 'bru@gmail.com'}],
                setUsers: newuser => {this.state.users.push(newuser)},
                checkUser: (identifiant, pass, type) => {
                    let res = null
                    this.state.users.forEach((el, i) => {          
                        if((identifiant === el.username || identifiant === el.email) && pass === el.passwd){
                            if(type === 'check'){
                                res = true
                            }else{
                                res = i
                            }   
                        }
                    })
                    return res;
                },
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
