import CollectionPage from "./collection.component";
const { selectCollectionisLoaded } = require("../../redux/shop/shop.selector");
const { createStructuredSelector } = require("reselect");
const { compose } = require("redux");
const { connect } = require("react-redux");
const {
  default: WithSpinner,
} = require("../../components/with-spinner/with-spinner.component");

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionisLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
