import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPrev from "../preview-collection/CollectionPrev";

import {selectCollections} from '../../redux/shop/shop.selector'


import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => (

        <div className='collection-overview'>
            {
            collections.map(({id, ...otherProps}) => (
                <CollectionPrev key={id} {...otherProps}/>
            ))
        }
        </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
