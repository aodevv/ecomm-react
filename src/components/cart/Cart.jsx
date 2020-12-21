import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";

import CustomButton from '../buttons/CustomButton';
import CartItem from '../cartItem/CartItem';

import { selectCartItems } from "../../redux/cart/cart.selectors";

import './Cart.styles.scss';

const Cart = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);
