import React from "react";
import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from "./collection-preview.style";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history }) => (
  <CollectionPreviewContainer>
    <Title onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </Title>

    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
