import React from "react";
import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
