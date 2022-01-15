import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewCont, TitleCont, PreviewCont } from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewCont>
        <TitleCont>{title.toUpperCase()}</TitleCont>
        <PreviewCont>
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </PreviewCont>
    </CollectionPreviewCont>
);

export default CollectionPreview;