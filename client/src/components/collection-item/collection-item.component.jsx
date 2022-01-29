import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import { 
    CollectionItemCont, 
    ImgCont, 
    CollectionFooterCont,
    NameCont,
    PriceCont,
    CustomButtonCont
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    
    return (
        <CollectionItemCont>
            <ImgCont className="image"
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            />
            <CollectionFooterCont>
                <NameCont>{name}</NameCont>
                <PriceCont>{price}</PriceCont>
            </CollectionFooterCont>
            <CustomButtonCont inverted onClick={() => addItem(item)}>Add to Cart</CustomButtonCont>
        </CollectionItemCont>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);