import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function CartContainer() {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  console.log('Amount', amount);

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        {amount === 0 && <h4 className="empty-cart">is currently empty</h4>}
      </header>
      {amount === 0 && (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total: <span>{total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear cart</button>
      </footer>
    </section>
  );
}
