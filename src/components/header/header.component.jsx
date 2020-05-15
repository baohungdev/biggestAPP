import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>

        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div>
            <div className="option">
              {currentUser.displayName.toUpperCase()}
            </div>
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <div className="option">
          <CartIcon />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
