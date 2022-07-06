import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import "./Navigation.scss";
import { signOutAuthUser } from '../../utils/firebase.config';
import CartIcon from '../cart-icon/CartIcon';
import CartModal from '../cart-modal/CartModal';

const Navigation = () => {
  const { activeUser } = useContext(UserContext)
  const { showCart } = useContext(CartContext)
  return (
    <header className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {activeUser ? <span className='nav-link' onClick={()=>signOutAuthUser()}>SIGN OUT</span> :
        <Link className="nav-link" to="/sign-in">
          SIGN IN
        </Link>}
        <CartIcon/>
      </div>
      {showCart && <CartModal/>}
    </header>
  );
};

export default Navigation;
