import { useContext } from 'react';
import { Store } from '../store/index';
import Currency from '../helpers/Currency';

const Cart = () => {
  const { shopping, setShopping } = useContext(Store);

  const handleDeleteProduct = (index) => {
    const temp = shopping.products.filter((_, item) => item !== index);
    setShopping({ products: temp });
  };

  console.log(shopping.products)
  return (
    <ul className="section__cart">
      {shopping?.products.length >= 1 ? (
        shopping.products.map((product, index) => (
          <li className="product__item" key={index}>
            <img
              className="image__item"
              src={product.image}
              alt={product.name}
            />
            <span>{product.name}</span>
            <span>Items: {product.quantity}</span>
            <span>Total price: $ {Currency(product.totalPrice)}</span>
            <button
              className="btn__delete"
              onClick={() => handleDeleteProduct(index)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <>
            <h1>Empty Cart</h1>
        </>
      )}
    </ul>
  );
};

export default Cart;
