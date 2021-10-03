import React, { Component } from 'react'

export class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            quantity: 1
        }
    }

    //for demo purposes only
    componentDidMount() {
        sessionStorage.setItem("quantity", 0);
    }

    componentDidUpdate() {
        sessionStorage.setItem("quantity", this.state.quantity);
    }

    addItem = () => {
        let quantity = this.state.quantity;
        quantity += 1;
        this.setState({quantity});
    }

    removeItem = () => {
        let quantity = this.state.quantity;
        if(quantity === 0) alert("cart already empty");
        else {
            quantity -= 1;
            this.setState({quantity});
        }
    }
    
    
    render() {
        const cartItems = this.props.cartItems;
        return (
            <div>
                <aside className="block col-1" style={{width: "18.3rem"}}>
                    <h2>Cart Items</h2>
                    <p>{cartItems.length === 0 && "Cart is empty"}</p>
                    {cartItems.length !== 0 && 
                        <div>
                            <div style={{textAlign: "center"}}>
                                <img src={cartItems.url} height="20px" width="30px"
                                style={{padding: "2px"}} alt=""></img>
                                {cartItems.name} : {" RS "}
                                {cartItems.price}
                            </div>
                            <br/>
                            <button className="remove" onClick={this.removeItem}>-</button>
                            <button className="add" onClick={this.addItem}>+</button>
                            Quantity: {this.state.quantity}
                            <hr/>
                            Total: {this.state.quantity * cartItems.price}
                        </div>
                    }
                </aside>
            </div>
        )
    }
}

export default Cart
