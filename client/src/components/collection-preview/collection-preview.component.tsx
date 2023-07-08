import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewCont,
  TitleCont,
  PreviewCont,
} from "./collection-preview.styles";
import { useNavigate } from "react-router-dom";

type Props = Pick<Collection, "title" | "items" | "routeName">;

const CollectionPreview = ({ title, items, routeName }: Props) => {
  const navigate = useNavigate();
  return (
    <CollectionPreviewCont>
      <TitleCont onClick={() => navigate(routeName)}>
        {title.toUpperCase()}
      </TitleCont>
      <PreviewCont>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewCont>
    </CollectionPreviewCont>
  );
};

export default CollectionPreview;
