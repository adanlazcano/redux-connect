import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clearCart, getTotals } from "redux/cart/actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(
    (_) => {
      dispatch(getTotals());
    },
    [dispatch]
  );
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          onClick={(_) => dispatch(clearCart())}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

// const mapDispatchToProps = dispatch =>{
//   return {
//        getTotals:_=>dispatch({type:GET_TOTALS})
//   }
// }
const mapStateToProps = (state) => {
  const { cart, total } = state;
  return {
    cart,
    total,
  };
};
export default connect(mapStateToProps)(CartContainer);
