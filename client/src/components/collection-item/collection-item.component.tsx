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

interface Props {
    item: Item;
    addItem: (item: Item) => void;
}

export const CollectionItem = ({ item, addItem }: Props) => {
    const { name, price, imageUrl } = item;
    
    return (
        <CollectionItemCont>
            <ImgCont className="image" imageUrl={imageUrl} />
            <CollectionFooterCont>
                <NameCont>{name}</NameCont>
                <PriceCont>{price}</PriceCont>
            </CollectionFooterCont>
            <CustomButtonCont inverted onClick={() => addItem(item)}>Add to Cart</CustomButtonCont>
        </CollectionItemCont>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: Item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);