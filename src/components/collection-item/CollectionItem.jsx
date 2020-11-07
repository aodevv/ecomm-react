import React from 'react';

import './CollectionItem.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className="product-info">
                <div className="product-name">{name}</div>
                <div className="product-price">{`$${price}`}</div>
            </div>
        </div>
    )
}

export default CollectionItem
