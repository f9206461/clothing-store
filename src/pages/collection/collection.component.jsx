import React from "react";
import { connect } from "react-redux"; 

import { selectCollection } from "../../redux/shop/shop.selector";

import { CollectionPageCont, Title, ItemsCont, CollectionItemCont } from "./collection.styles";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <CollectionPageCont>
            <Title>{title}</Title>
            <ItemsCont>
                {items.map(item => (
                    <CollectionItemCont key={item.id} item={item}/>
                ))}
            </ItemsCont>
        </CollectionPageCont>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});
// use ownProps first, then use state in the process. CURRIED FUNCTION

export default connect(mapStateToProps)(CollectionPage);