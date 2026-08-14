import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/appSlice";
import { ButtonCustom } from "../../components/button/button";
export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.app.cartItems);

  return (
    <div className="cartPage">
      <div className="cartHeader">
        <div>
          <p className="eyebrow">Carrello</p>
          <h1>I prodotti selezionati</h1>
        </div>
        {cartItems.length > 0 ? (
          <ButtonCustom title="Svuota carrello" onClick={() => dispatch(clearCart())} customClass="secondaryButton" />
        ) : null}
      </div>

      {cartItems.length === 0 ? (
        <div className="emptyState">Il carrello è vuoto.</div>
      ) : (
        <div className="cartList">
          {cartItems.map((item) => (
            <article className="cartItem" key={item.id}>
              <img src={item.images?.[0]} alt={item.title} className="cartImage" />
              <div className="cartInfo">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>${item.price}</strong>
              </div>
              <ButtonCustom
                title="Rimuovi"
                onClick={() => dispatch(removeFromCart(item.id))}
                customClass="ghostButton"
              />
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
