import { useContext, useEffect, useState } from 'react';
import { Store } from '../store/index';
import Currency from '../helpers/Currency';
import Modal from './Modal';

const Description = ({ data }) => {
  const { shopping, setShopping } = useContext(Store);
  const [colorSelected, setColorSelected] = useState(() => {
    return data?.options[0].values[0];
  });
  const [sizeSelected, setSizeSelected] = useState(() => {
    try {
      const temp = data?.variants.filter(
        (product) => product.option1 === colorSelected
      );
      return temp[0].id;
    } catch (error) {
      return;
    }
  });
  const [productsSizes, setProductsSizes] = useState([]);
  const [productsSelected, setProductsSelected] = useState(() => {
    try {
      const temp = data?.variants.filter(
        (product) => product.option1 === colorSelected
      );
      return temp[0];
    } catch (error) {
      return;
    }
  });
  const [counter, setCounter] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    try {
      const temp = data?.variants.filter(
        (product) => product.option1 === colorSelected
      );
      setSizeSelected(temp[0].id);
      setProductsSelected(temp[0]);
      setProductsSizes(temp);
    } catch (error) {
      return;
    }
  }, [colorSelected, data?.variants]);

  const handleColorChange = (event) => {
    const color = event.target.attributes.getNamedItem('color').value;
    setColorSelected(color);
  };
  const handleSizeChange = (product) => {
    setSizeSelected(product.id);
    setProductsSelected(product);
  };

  const calculateTotalPrice = () => {
    return counter * productsSelected?.price;
  };

  const handleAddProduct = () => {
    const temp = [...shopping.products];
    temp.push({
      ...productsSelected,
      image: data?.images[0],
      totalPrice: calculateTotalPrice(),
      quantity: counter,
    });
    setShopping({ products: temp });
    setOpenModal(true);
  };

  return (
    <div className="description">
      <section style={{ width: '100%' }}>
        <span className="description__vendor">By {data?.vendor}</span>
        <h2 className="description__title">{data?.title}</h2>
        <div className="description__href">
          <span className="description__price">$ {Currency(data?.price)}</span>
          <span className="description__price--compare">
            $ {Currency(data?.compare_at_price)}
          </span>
        </div>
        <div className="description__href">
          <span>Color: </span>
          <ul className="description__colors">
            {data?.options[0].values.map((color, index) => (
              <li
                className={
                  color === colorSelected
                    ? 'description__item active'
                    : 'description__item'
                }
                key={index}
              >
                <button
                  className="description__option"
                  color={color}
                  onClick={handleColorChange}
                ></button>
              </li>
            ))}
          </ul>
        </div>
        <div className="description__size">
          <span className="description__size__title">Size: </span>
          <ul className="description__size__list">
            {productsSizes.map((product) => (
              <li
                className={
                  product.id === sizeSelected
                    ? 'description__size__item activate'
                    : 'description__size__item'
                }
                key={product.id}
                onClick={() => handleSizeChange(product)}
              >
                {product.option2}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ width: '100%' }}>
        <div className="description__total">
          <div className="description__quantity">
            <span
              className="description__tope"
              onClick={() =>
                setCounter((prevstate) =>
                  prevstate - 1 < 1 ? 1 : prevstate - 1
                )
              }
            >
              -
            </span>
            <span className="description__counter">{counter}</span>
            <span
              className="description__tope"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </span>
          </div>
          <div className="">
            <span style={{ color: '#C4C4C4', fontWeight: 'bold' }}>
              Total price:{' '}
            </span>
            <span style={{ fontWeight: 'bold' }}>
              $ {Currency(calculateTotalPrice())}{' '}
            </span>
          </div>
        </div>
        <div>
          <div className="description__buttons">
            <button className="description__favorite">Add to favorite</button>
            <button className="description__add" onClick={handleAddProduct}>
              Add to cart
            </button>
          </div>
          <div
            className="description__product"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>
      </section>

      {openModal ? (
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          product={{
            ...productsSelected,
            image: data?.images[0],
            totalPrice: calculateTotalPrice(),
            quantity: counter,
          }}
        />
      ) : null}
    </div>
  );
};

export default Description;
