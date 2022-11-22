import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store/index';

const CartIcon = () => {
  const navigate = useNavigate();
  const { shopping } = useContext(Store);

  return (
    <div className="cart" onClick={() => navigate('/cart')}>
      {shopping.products.length > 0 && (
        <button className="cart__products" onClick={() => navigate('/cart')}>
          {shopping.products.length}
        </button>
      )}
    </div>
  );
}

export default CartIcon;
