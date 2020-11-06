import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPrev from '../../components/preview-collection/CollectionPrev';

class ShopPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            collection: SHOP_DATA
        };
    }
    render() {
        const collections = this.state.collection;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPrev key={id} {...otherProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
