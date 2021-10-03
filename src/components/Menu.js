import React, { Component } from 'react';
import Cart from './Cart';
import DATA from "./Products.json";
const data = DATA.items;
let cartItems = [""];

export class Menu extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            cartItems: []
        }
    }
    
    onAdd = (product) => {
        cartItems = product;
        this.setState({cartItems});
    }

    render() {
        return (
            <div>
                <main className="block col-2" style={{width: "60rem", float: "left"}}>
                    <h2>Products</h2>
                    <div className="grid-container">
                        {data.map((product, index) => {
                            return (
                                <div key={index}>
                                    <img className="small" src={product.url} alt=""></img>
                                    <h3>{product.name}</h3>
                                    <div>Rs {product.price}</div>
                                    <div>
                                        <button onClick={() => {this.onAdd(product)}}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </main>
                <div style={{float: "left"}}>
                    <Cart cartItems={this.state.cartItems}/>
                </div>
            </div>
        )
    }
}

export default Menu
