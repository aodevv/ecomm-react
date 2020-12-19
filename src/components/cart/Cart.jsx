import React from 'react';
import CustomButton from '../buttons/CustomButton';
import './Cart.styles.scss';

const Cart = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default Cart
