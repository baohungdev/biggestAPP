import CollectionOverview from "./collection-overview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoadingCollection } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
const { compose } = require("redux");
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingCollection,
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverViewContainer;
