import React from "react";
import { auth } from "../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionContainerDiv,
  OptionContainerLink,
} from "./header.styles";
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionContainerLink to="/shop">SHOP</OptionContainerLink>
        <OptionContainerLink to="/shop">CONTACT</OptionContainerLink>
        {currentUser ? (
          <div>
            <OptionContainerDiv>
              {currentUser.displayName.toUpperCase()}
            </OptionContainerDiv>
            <OptionContainerDiv onClick={() => auth.signOut()}>
              SIGN OUT
            </OptionContainerDiv>
          </div>
        ) : (
          <OptionContainerLink to="/signin">LOGIN</OptionContainerLink>
        )}
        <OptionContainerDiv>
          <CartIcon />
        </OptionContainerDiv>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
