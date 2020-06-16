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
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubcribeFromCollection = null;

  componentDidMount() {
    const { setCollection } = this.props;
    const collectionsRef = firestore.collection("collection");
    collectionsRef.onSnapshot(async (snapshot) => {
      const collectionMapFetched = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionMapFetched);
      setCollection(collectionMapFetched);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
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
