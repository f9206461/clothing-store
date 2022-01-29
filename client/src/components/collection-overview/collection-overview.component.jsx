import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { Title, CollectionOverviewCont } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
    <CollectionOverviewCont>
        <Title>SHOP OVERVIEW</Title>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewCont>
); // CollectionPreview will be the one that filters out 4 items. But this function can also be put here.

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);