import { useState } from 'react';

const ProductsDesktop = ({ images }) => {
  const [imageSelected, setImageSelected] = useState(() => {
    try {
      return images[0];
    } catch (error) {
      return;
    }
  });

  const handleChangeImage = (event) => {
    const imgSelected = event.target.attributes.getNamedItem('src').value;
    setImageSelected(imgSelected);
  };

  return (
    <div className="products">
      <img
        className="products__selected"
        key={imageSelected}
        src={imageSelected}
        alt={`Product ${imageSelected}`}
      />
      {images
        ?.filter((image) => image !== imageSelected)
        .map(( image ) => (
          <img
            className="products__images"
            key={image}
            src={image}
            alt={image}
            onClick={handleChangeImage}
          />
        ))}
    </div>
  );
};

export default ProductsDesktop;
