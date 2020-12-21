import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './CollectionPrev.styles.scss';

const CollectionPrev = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPrev;
