import React, { Component } from 'react';
let quantity = 0;

export class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            quantity: ""
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ quantity: sessionStorage.getItem('quantity') }), 300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="row block center">
                <h3>Shopping Cart</h3>
                <h3 style={{float: "right"}}>Cart: {this.state.quantity}</h3>
            </div>
        )
    }
}

export default Header
