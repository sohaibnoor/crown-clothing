import React from 'react';
import './CartDropdown.scss';
import CustomButtom from '../CustomButtom/CustomButton';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

export default CartDropdown;
