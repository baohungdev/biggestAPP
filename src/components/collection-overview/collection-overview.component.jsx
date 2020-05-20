import React from "react";

import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.components";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
