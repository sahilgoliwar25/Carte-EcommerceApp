import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItem } from "../../ReduxCart/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Cart.cart);
  // console.log(data);
  return (
    <>
      <div className="Title">Cart</div>
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.image}
                  alt="Img not found"
                  height={150}
                  width={150}
                />
                <h3>{item.title}</h3>
                <button onClick={() => dispatch(RemoveItem({ id: item.id }))}>
                  Remove from Cart
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CartPage;
