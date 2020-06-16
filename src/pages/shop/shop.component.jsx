import React, { Component } from "react";
import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCollectionToReducer } from "../../redux/shop/shop.actions";
class ShopPage extends Component {
  unsubcribeFromCollection = null;

  componentDidMount() {
    const { setCollection } = this.props;
    const collectionsRef = firestore.collection("collection");
    collectionsRef.onSnapshot(async (snapshot) => {
      const collectionMapFetched = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionMapFetched);
      setCollection(collectionMapFetched);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverView} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCollection: (collectionMapFetched) =>
    dispatch(setCollectionToReducer(collectionMapFetched)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
