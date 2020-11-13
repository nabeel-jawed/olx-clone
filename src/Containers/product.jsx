import React, { Component } from 'react';
import Bike from '../assest/bike.jpg'
import './product.css';
import Clicked_item from '../Containers/clicked_item'




class Product extends Component {


    render() {

        return (
            <div className="product">
                <img className="product__image" src={this.props.url} alt="product" />
                <p className="product__title">{this.props.title}</p>
                <p className="product__description">{this.props.description}</p>
                <p className="product__price">Rs. <strong>{this.props.price}</strong></p>
                <p className="product__phone">{this.props.phone}</p>
            </div>
        )
    }
}

export default Product;