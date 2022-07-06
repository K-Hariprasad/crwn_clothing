import React from 'react'
import { ReactComponent as EmptyCart} from '../../assets/empty_cart.svg'
import './EmptyCartIcon.scss';
function EmptyCartIcon() {
  return (
    <div className='empty-cart-container'>
        <EmptyCart/>
    </div>
  )
}

export default EmptyCartIcon