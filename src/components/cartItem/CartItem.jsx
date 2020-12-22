import React from "react";
import Cart from "../cart/Cart";

import './CartItem.styles.scss';

const CartItem = ({item: {price,imageUrl,  name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt=""/>
        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;