import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../context/ShoppingContext';

export default function CartIcon() {
  const navigate = useNavigate();
  const { shopping } = useContext(ShoppingContext);

  return (
    <div className="cart" onClick={() => navigate('/cart')}>
      {shopping.products.length > 0 ? (
        <button className="cart__products" onClick={() => navigate('/cart')}>
          {shopping.products.length}
        </button>
      ) : null}
    </div>
  );
}
