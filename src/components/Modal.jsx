import { useNavigate } from 'react-router-dom';
import Currency from '../helpers/Currency';

const Modal = ({ setOpen, product }) => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <form className="modal__form">
        <h1 className="modal__h1">Product(s) added(s) to cart</h1>
        <h3 className="modal__h3">{product.name}</h3>
        <img className="modal__image" src={product.image} alt={product.name} />
        <span className="modal__items">items: {product.quantity}</span>
        <span className="modal__amount">
          Total price:{' '}
          <strong style={{ color: 'black' }}>
            $ {Currency(product.totalPrice)}
          </strong>{' '}
        </span>
        <button
          color="black"
          className="modal__shopping"
          onClick={() => setOpen(false)}
        >
          Continue shopping
        </button>
        <button
          color="gray"
          className="modal__cart"
          onClick={() => navigate('/cart')}
        >
          Go to cart
        </button>
      </form>
    </div>
  );
}

export default Modal;
