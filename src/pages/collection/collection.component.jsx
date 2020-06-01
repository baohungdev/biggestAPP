import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
const CollectionPage = (props) => {
  console.log(props);
  console.log(props.match.params.collectionId);
  return (
    <div className="">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
