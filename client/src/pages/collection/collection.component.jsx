import React from "react";
import { useSelector } from "react-redux"; 
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selector";

import { CollectionPageCont, Title, ItemsCont, CollectionItemCont } from "./collection.styles";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));

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

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// });
// use ownProps first, then use state in the process. CURRIED FUNCTION

export default CollectionPage;